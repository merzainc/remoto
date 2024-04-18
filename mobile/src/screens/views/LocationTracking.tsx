import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import { EventEmitter, EventSubscription } from 'fbemitter';
import { doc, GeoPoint, updateDoc } from 'firebase/firestore';
import * as React from 'react';
import { Modal, Platform, StyleSheet, Text, View } from 'react-native';
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from 'react-native-maps';

import useAuth from '@/auth/useAuth';
import Button from '@/components/AppButton';
import db from '@/config/firebase';
import mapStyles from '@/constants/MapStyles';
import usePermissions from '@/hooks/usePermissions';
import * as Battery from 'expo-battery';
import { AppState } from 'react-native';
import Colors from '@/constants/Colors';

const STORAGE_KEY = 'expo-home-locations';
const LOCATION_UPDATES_TASK = 'location-updates';

const locationEventsEmitter = new EventEmitter();

const locationAccuracyStates: {
  [key in Location.Accuracy]: Location.Accuracy;
} = {
  [Location.Accuracy.Lowest]: Location.Accuracy.Low,
  [Location.Accuracy.Low]: Location.Accuracy.Balanced,
  [Location.Accuracy.Balanced]: Location.Accuracy.High,
  [Location.Accuracy.High]: Location.Accuracy.Highest,
  [Location.Accuracy.Highest]: Location.Accuracy.BestForNavigation,
  [Location.Accuracy.BestForNavigation]: Location.Accuracy.Lowest,
};

const locationActivityTypes: {
  [key in Location.ActivityType]: Location.ActivityType | undefined;
} = {
  [Location.ActivityType.Other]: Location.ActivityType.AutomotiveNavigation,
  [Location.ActivityType.AutomotiveNavigation]: Location.ActivityType.Fitness,
  [Location.ActivityType.Fitness]: Location.ActivityType.OtherNavigation,
  [Location.ActivityType.OtherNavigation]: Location.ActivityType.Airborne,
  [Location.ActivityType.Airborne]: undefined,
};

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type State = Pick<
  Location.LocationTaskOptions,
  'showsBackgroundLocationIndicator'
> & {
  activityType: Location.ActivityType | null;
  accuracy: Location.Accuracy;
  isTracking: boolean;
  savedLocations: any[];
  initialRegion: Region | null;
};

const initialState: State = {
  isTracking: false,
  savedLocations: [],
  activityType: null,
  accuracy: Location.Accuracy.High,
  initialRegion: null,
  showsBackgroundLocationIndicator: true,
};

function reducer(state: State, action: Partial<State>): State {
  return {
    ...state,
    ...action,
  };
}

export default function LocationTracking() {
  const [permission] = usePermissions(
    Location.requestForegroundPermissionsAsync
  );

  React.useEffect(() => {
    (async () => {
      if (!(await Location.isBackgroundLocationAvailableAsync())) {
        alert('Background location is not available in this application.');
      }
    })();
  }, []);

  if (!permission) {
    return (
      <Text style={styles.errorText}>
        Location permissions are required in order to use this feature. You can
        manually enable them at any time in the "Location Services" section of
        the Settings app.
      </Text>
    );
  }

  return <BackgroundLocationMapView />;
}

function BackgroundLocationMapView() {
  const mapViewRef = React.useRef<MapView>(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [location, setLocation] =
    React.useState<Location.LocationObject | null>(null);
  const { user } = useAuth();
  const [isAvailable, setIsAvailable] = React.useState<boolean | null>(null);
  const [batteryLevel, setBatteryLevel] = React.useState(-1);
  const [batteryState, setBatteryState] = React.useState(
    Battery.BatteryState.UNKNOWN
  );

  React.useEffect(() => {
    let subscription: EventSubscription | null = null;
    let isMounted = true;
    (async () => {
      if (
        (await Location.getBackgroundPermissionsAsync()).status !== 'granted'
      ) {
        console.log(
          'Missing background location permissions. Make sure it is granted in the OS Settings.'
        );
        return;
      }
      const { coords } = await Location.getCurrentPositionAsync();
      const isTracking = await Location.hasStartedLocationUpdatesAsync(
        LOCATION_UPDATES_TASK
      );
      const task = (await TaskManager.getRegisteredTasksAsync()).find(
        ({ taskName }) => taskName === LOCATION_UPDATES_TASK
      );
      const savedLocations = await getSavedLocations();

      subscription = locationEventsEmitter.addListener(
        'update',
        (savedLocations: any) => {
          if (isMounted) dispatch({ savedLocations });
        }
      );

      if (!isTracking) {
        toggleTracking();
        onAccuracyChange();
      }

      if (!isMounted) return;

      dispatch({
        isTracking,
        accuracy: task?.options.accuracy ?? state.accuracy,
        showsBackgroundLocationIndicator:
          task?.options.showsBackgroundLocationIndicator,
        activityType: task?.options.activityType ?? null,
        savedLocations,
        initialRegion: {
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
      });
    })();

    return () => {
      isMounted = false;
      if (subscription) {
        subscription.remove();
      }
    };
  }, [state.accuracy, state.isTracking]);

  React.useEffect(() => {
    (async () => {
      const [isAvailable, batteryLevel, batteryState] = await Promise.all([
        Battery.isAvailableAsync(),
        Battery.getBatteryLevelAsync(),
        Battery.getBatteryStateAsync(),
      ]);
      setIsAvailable(isAvailable || false);
      setBatteryLevel(batteryLevel);
      setBatteryState(batteryState);
    })();

    const batteryLevelListener = Battery.addBatteryLevelListener(
      ({ batteryLevel }) => setBatteryLevel(batteryLevel)
    );
    const batteryStateListener = Battery.addBatteryStateListener(
      ({ batteryState }) => setBatteryState(batteryState)
    );

    return () => {
      batteryLevelListener && batteryLevelListener.remove();
      batteryStateListener && batteryStateListener.remove();
    };
  }, []);

  React.useEffect(() => {
    Location.watchPositionAsync(
      {
        accuracy: Location.LocationAccuracy.Highest,
        timeInterval: 6000, // 1 minute
        distanceInterval: 1,
      },
      (response) => {
        const positionsRef = doc(db, 'positions', user?.force as string);
        updateDoc(positionsRef, {
          name: user?.name,
          location: new GeoPoint(
            response.coords.latitude,
            response.coords.longitude
          ),
          battery: {
            status: isAvailable
              ? getBatteryStateString(batteryState)
              : 'Not supported',
            level: isAvailable ? batteryLevel.toFixed(2) : 'Not supported',
          },
        })
          .then((res) => {})
          .catch((err) => console.error(err));
        setLocation(response);
        mapViewRef.current?.animateCamera(
          {
            pitch: 50,
            center: response.coords,
          },
          { duration: 3000 }
        );
      }
    );
  }, []);

  const startLocationUpdates = React.useCallback(
    async (acc = state.accuracy) => {
      if (
        (await Location.getBackgroundPermissionsAsync()).status !== 'granted'
      ) {
        console.log(
          'Missing background location permissions. Make sure it is granted in the OS Settings.'
        );
        return;
      }
      await Location.startLocationUpdatesAsync(LOCATION_UPDATES_TASK, {
        accuracy: acc,
        activityType: state.activityType ?? undefined,
        pausesUpdatesAutomatically: state.activityType != null,
        showsBackgroundLocationIndicator:
          state.showsBackgroundLocationIndicator,
        deferredUpdatesInterval: 30 * 1000, // 45 seconds
        deferredUpdatesDistance: 1, // 100 meters
        foregroundService: {
          notificationTitle: 'Shift Active',
          notificationBody: 'Collecting precise location in background',
        },
      });
      dispatch({
        isTracking: true,
      });
    },
    [
      state.isTracking,
      state.accuracy,
      state.activityType,
      state.showsBackgroundLocationIndicator,
    ]
  );

  const stopLocationUpdates = React.useCallback(async () => {
    await Location.stopLocationUpdatesAsync(LOCATION_UPDATES_TASK);
    dispatch({
      isTracking: false,
    });
  }, []);

  const clearLocations = React.useCallback(async () => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    dispatch({
      savedLocations: [],
    });
  }, []);

  const toggleTracking = React.useCallback(async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);

    if (state.isTracking) {
      await stopLocationUpdates();
    } else {
      await startLocationUpdates();
    }
    dispatch({
      savedLocations: [],
    });
  }, [state.isTracking, startLocationUpdates, stopLocationUpdates]);

  const onAccuracyChange = React.useCallback(() => {
    const currentAccuracy = locationAccuracyStates[Location.Accuracy.Highest];

    dispatch({
      accuracy: currentAccuracy,
    });

    if (state.isTracking) {
      // Restart background task with the new accuracy.
      startLocationUpdates(currentAccuracy);
    }
  }, [state.accuracy, state.isTracking, startLocationUpdates]);

  const toggleLocationIndicator = React.useCallback(() => {
    dispatch({
      showsBackgroundLocationIndicator: !state.showsBackgroundLocationIndicator,
    });
    if (state.isTracking) {
      startLocationUpdates();
    }
  }, [
    state.showsBackgroundLocationIndicator,
    state.isTracking,
    startLocationUpdates,
  ]);

  const toggleActivityType = React.useCallback(() => {
    let nextActivityType: Location.ActivityType | null;
    if (state.activityType) {
      nextActivityType = locationActivityTypes[state.activityType] ?? null;
    } else {
      nextActivityType = Location.ActivityType.Other;
    }
    dispatch({
      activityType: nextActivityType,
    });

    if (state.isTracking) {
      // Restart background task with the new activity type
      startLocationUpdates();
    }
  }, [state.activityType, state.isTracking, startLocationUpdates]);

  const onCenterMap = React.useCallback(async () => {
    const mapView = mapViewRef.current;

    if (mapView) {
      //   mapView.animateToRegion({
      //     latitude: coords.latitude,
      //     longitude: coords.longitude,
      //     latitudeDelta: 0.004,
      //     longitudeDelta: 0.002,
      //   });
      mapView.animateCamera(
        {
          pitch: 50,
          center: location?.coords,
        },
        { duration: 3000 }
      );
    }
  }, []);

  //   const renderPolyline = React.useCallback(() => {
  //     if (state.savedLocations.length === 0) {
  //       return null;
  //     }
  //     return (
  //       // @ts-ignore
  //       <MapView.Polyline
  //         coordinates={state.savedLocations}
  //         strokeWidth={3}
  //         strokeColor={Colors.tintColor}
  //       />
  //     );
  //   }, [state.savedLocations]);

  return (
    <View style={styles.screen}>
      <PermissionsModal />
      {location ? (
        <MapView
          customMapStyle={mapStyles}
          provider={PROVIDER_GOOGLE}
          ref={mapViewRef}
          style={styles.mapView}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <>
            <Circle
              center={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              radius={150}
              strokeColor='rgba(78,155,222,0.8)'
              fillColor='rgba(78,155,222,0.2)'
            />
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
            >
              <Callout>
                <View style={{ padding: 4 }}>
                  <Text style={{ fontSize: 14 }}>Mataga Ralph</Text>
                </View>
              </Callout>
            </Marker>
          </>
        </MapView>
      ) : null}
      <View style={styles.buttons} pointerEvents='box-none'>
        <View style={styles.topButtons}>
          <View style={styles.buttonsColumn}>
            {Platform.OS === 'android' ? null : (
              <Button style={styles.button} onPress={toggleLocationIndicator}>
                <View style={styles.buttonContentWrapper}>
                  <Text style={styles.text}>
                    {state.showsBackgroundLocationIndicator ? 'Hide' : 'Show'}
                  </Text>
                  <Text style={styles.text}> background </Text>
                  <FontAwesome name='location-arrow' size={20} color='white' />
                  <Text style={styles.text}> indicator</Text>
                </View>
              </Button>
            )}
            {Platform.OS === 'android' ? null : (
              <Button
                style={styles.button}
                onPress={toggleActivityType}
                title={
                  state.activityType
                    ? `Activity type: ${Location.ActivityType[state.activityType]}`
                    : 'No activity type'
                }
              />
            )}
            {/* <Button
              title={`Accuracy: ${Location.Accuracy[state.accuracy]}`}
              style={styles.button}
              onPress={onAccuracyChange}
            /> */}
          </View>
          <View style={styles.buttonsColumn}>
            <Button style={styles.button} onPress={onCenterMap}>
              <MaterialIcons name='my-location' size={20} color='white' />
            </Button>
          </View>
        </View>

        <View style={styles.bottomButtons}>
          <Button
            buttonStyle={{ backgroundColor: 'red' }}
            title='Emergency'
            style={styles.button}
            onPress={clearLocations}
          />
          <Button
            title={state.isTracking ? 'Flashlight Off' : 'Flashlight On'}
            style={styles.button}
            onPress={toggleTracking}
          />
        </View>
      </View>
    </View>
  );
}

const PermissionsModal = () => {
  const [showPermissionsModal, setShowPermissionsModal] = React.useState(true);
  const [permission] = usePermissions(Location.getBackgroundPermissionsAsync);

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={!permission && showPermissionsModal}
      onRequestClose={() => {
        setShowPermissionsModal(!showPermissionsModal);
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <View
          style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
        >
          <Text style={styles.modalHeader}>Background location access</Text>

          <Text style={styles.modalText}>
            This app collects location data to enable updating the sending
            updates in the background even when the app is closed or not in use.
            Otherwise, your location on the map will only be updated while the
            app is foregrounded.
          </Text>
          {/* <Text style={styles.modalText}>
            This data is not used for anything other than updating the position
            on the map, and this data is never shared with anyone.
          </Text> */}
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Button
            title='Request background location permission'
            style={styles.button}
            onPress={async () => {
              // Need both background and foreground permissions
              await Location.requestForegroundPermissionsAsync();
              await Location.requestBackgroundPermissionsAsync();
              setShowPermissionsModal(!showPermissionsModal);
            }}
          />
          <Button
            title='Continue without background location permission'
            style={styles.button}
            onPress={() => setShowPermissionsModal(!showPermissionsModal)}
          />
        </View>
      </View>
    </Modal>
  );
};

async function getSavedLocations() {
  try {
    const item = await AsyncStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch {
    return [];
  }
}

TaskManager.defineTask(
  LOCATION_UPDATES_TASK,
  async ({ data: { locations } }: any) => {
    const appState = AppState.currentState;
    if (appState !== 'active' && locations && locations.length > 0) {
      const savedLocations = await getSavedLocations();
      const newLocations = locations.map(({ coords }: any) => ({
        latitude: coords.latitude,
        longitude: coords.longitude,
      }));
      console.log(`Received new locations at ${new Date()}:`, locations);

      savedLocations.push(...newLocations);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(savedLocations));

      locationEventsEmitter.emit('update', savedLocations);
    }
  }
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mapView: {
    flex: 1,
  },
  buttons: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomButtons: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  buttonsColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  buttonAlert: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'red',
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  buttonContentWrapper: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontWeight: '700',
  },
  errorText: {
    fontSize: 15,
    color: 'rgba(0,0,0,0.7)',
    margin: 20,
  },
  modalHeader: { padding: 12, fontSize: 20, fontWeight: '800' },
  modalText: { padding: 8, fontWeight: '600' },
});

function getBatteryStateString(batteryState: Battery.BatteryState): string {
  switch (batteryState) {
    case Battery.BatteryState.UNPLUGGED:
      return 'UNPLUGGED';
    case Battery.BatteryState.CHARGING:
      return 'CHARGING';
    case Battery.BatteryState.FULL:
      return 'FULL';
    case Battery.BatteryState.UNKNOWN:
    default:
      return 'UNKNOWN';
  }
}
