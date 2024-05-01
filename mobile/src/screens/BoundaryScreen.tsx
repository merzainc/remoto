import { useFocusEffect } from '@react-navigation/native';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import * as TaskManager from 'expo-task-manager';
import { doc, getDoc } from 'firebase/firestore';
import React from 'react';
import { NativeSyntheticEvent, StyleSheet, Text, View } from 'react-native';
import MapView, { Circle } from 'react-native-maps';

import Button from '@/components/AppButton';
import db from '@/config/firebase';
import mapStyles from '@/constants/MapStyles';

const GEOFENCING_TASK = 'geofencing';

interface GeofencingRegion {
  identifier: string;
  latitude: number;
  longitude: number;
  radius: number;
}

interface Setting {
  filter: number;
  interval: number;
  region: {
    lat: number;
    lng: number;
    radius: number;
  };
}

export interface MapEvent<T = object>
  extends NativeSyntheticEvent<
    T & {
      coordinate: {
        latitude: number;
        longitude: number;
      };
      position: {
        x: number;
        y: number;
      };
    }
  > {}

type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

type State = {
  isGeofencing: boolean;
  geofencingRegions: GeofencingRegion[];
  initialRegion: Region | null;
};

const initialState: State = {
  isGeofencing: false,
  geofencingRegions: [],
  initialRegion: null,
};

function reducer(
  state: State,
  action:
    | { type: 'toggle' }
    | { type: 'clearRegions' }
    | ({ type: 'update' } & State)
    | ({ type: 'updateRegions' } & Pick<State, 'geofencingRegions'>)
): State {
  switch (action.type) {
    case 'update':
      return {
        isGeofencing: action.isGeofencing,
        geofencingRegions: action.geofencingRegions,
        initialRegion: action.initialRegion,
      };
    case 'updateRegions':
      return {
        ...state,
        geofencingRegions: action.geofencingRegions,
      };
    case 'clearRegions':
      return { ...state, geofencingRegions: [] };
    case 'toggle':
      return { ...state, isGeofencing: !state.isGeofencing };
  }
}

export default function BoundaryScreen() {
  const mapViewRef = React.useRef<MapView>(null);
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [defaultRegion, setDefaultRegion] = React.useState<Setting>();

  const onFocus = React.useCallback(() => {
    let isActive = true;

    (async () => {
      await Location.requestForegroundPermissionsAsync();

      const { coords } = await Location.getCurrentPositionAsync();
      const isGeofencing =
        await Location.hasStartedGeofencingAsync(GEOFENCING_TASK);
      const geofencingRegions = await getSavedRegions();

      if (isActive) {
        dispatch({
          type: 'update',
          isGeofencing,
          geofencingRegions,
          initialRegion: {
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.004,
            longitudeDelta: 0.002,
          },
        });
      }
      setTrackingRegion();
    })();
    return () => (isActive = false);
  }, []);

  useFocusEffect(onFocus);

  const toggleGeofencing = React.useCallback(async () => {
    if (state.isGeofencing) {
      await Location.stopGeofencingAsync(GEOFENCING_TASK);
      dispatch({ type: 'clearRegions' });
    } else {
      await Location.startGeofencingAsync(
        GEOFENCING_TASK,
        state.geofencingRegions
      );
    }
    dispatch({ type: 'toggle' });
  }, [state.isGeofencing, state.geofencingRegions]);

  const setTrackingRegion = async () => {
    const settingsRef = doc(db, 'settings', 'R100');
    const docSnap = await getDoc(settingsRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      //@ts-ignore
      setDefaultRegion(data);
      dispatch({ type: 'updateRegions', geofencingRegions: [] });
      dispatch({ type: 'clearRegions' });
      const newRegion = {
        identifier: `${data.region.lat},${data.region.lng}`,
        latitude: data.region.lat,
        longitude: data.region.lng,
        radius: data.region.radius,
      };
      dispatch({ type: 'updateRegions', geofencingRegions: [newRegion] });

      if (await Location.hasStartedGeofencingAsync(GEOFENCING_TASK)) {
        // update existing geofencing task
        await Location.startGeofencingAsync(GEOFENCING_TASK, [newRegion]);
      }
    } else {
      console.log('No such document!');
    }
  };

  const centerMap = React.useCallback(async () => {
    const { coords } = await Location.getCurrentPositionAsync();
    const mapView = mapViewRef.current;

    if (mapView) {
      mapView.animateToRegion({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.004,
        longitudeDelta: 0.002,
      });
    }
  }, []);

  const onMapPress = async ({ nativeEvent: { coordinate } }: MapEvent) => {
    const next = [...state.geofencingRegions];
    next.push({
      identifier: `${coordinate.latitude},${coordinate.longitude}`,
      latitude: coordinate.latitude,
      longitude: coordinate.longitude,
      radius: 50,
    });
    dispatch({ type: 'updateRegions', geofencingRegions: next });

    if (await Location.hasStartedGeofencingAsync(GEOFENCING_TASK)) {
      // update existing geofencing task
      await Location.startGeofencingAsync(GEOFENCING_TASK, next);
    }
  };

  const renderRegions = React.useCallback(() => {
    return (
      <>
        {defaultRegion && (
          <Circle
            center={{
              latitude: defaultRegion.region.lat,
              longitude: defaultRegion.region.lng,
            }}
            radius={defaultRegion.region.radius}
            strokeColor='rgba(78,155,222,0.8)'
            fillColor='rgba(78,155,222,0.2)'
          />
        )}
      </>
    );
  }, [defaultRegion]);

  if (!state.initialRegion) {
    return null;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          {state.isGeofencing
            ? 'You will be receiving notifications when the device enters or exits from defined working zone regions.'
            : 'Click `Start geofencing` to start getting geofencing notifications.'}
        </Text>
      </View>

      <MapView
        customMapStyle={mapStyles}
        ref={mapViewRef}
        style={styles.mapView}
        initialRegion={state.initialRegion}
        showsCompass={false}
        showsUserLocation
      >
        {renderRegions()}
      </MapView>
      <View style={styles.buttons}>
        <View style={styles.leftButtons}>
          <Button
            // disabled={
            //   !state.isGeofencing && state.geofencingRegions.length === 0
            // }
            buttonStyle={styles.button}
            title={state.isGeofencing ? 'Stop geofencing' : 'Start geofencing'}
            onPress={() => {
              setTrackingRegion();
              toggleGeofencing();
            }}
          />
        </View>
        <Button
          buttonStyle={styles.button}
          title='Center'
          onPress={centerMap}
        />
      </View>
    </View>
  );
}

async function getSavedRegions(): Promise<GeofencingRegion[]> {
  const tasks = await TaskManager.getRegisteredTasksAsync();
  const task = tasks.find(({ taskName }) => taskName === GEOFENCING_TASK);
  return task ? task.options.regions : [];
}

TaskManager.defineTask(
  GEOFENCING_TASK,
  async ({ data: { region } }: { data: any }) => {
    const stateString =
      Location.GeofencingRegionState[region.state].toLowerCase();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Remoto Geofencing',
        body: `You are currently ${stateString} the [${region.identifier}] region.`,
        data: region,
      },
      trigger: null,
    });
  }
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  heading: {
    backgroundColor: 'rgba(255, 255, 0, 0.1)',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    zIndex: 2,
  },
  blurView: {
    flex: 1,
    padding: 5,
  },
  headingText: {
    textAlign: 'center',
  },
  mapView: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 10,
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,
  },
  leftButtons: {
    alignItems: 'flex-start',
  },
  button: {
    padding: 10,
    marginVertical: 5,
  },
});
