import mapStyles from '@/constants/MapStyles';
import useMapRef from '@/hooks/useMapViewRef';
import { View } from 'expo-dev-client-components';
import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function HomeScreen() {
  const mapRef = useMapRef();
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  useEffect(() => {
    Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.Highest,
        timeInterval: 1000 * 30,
        distanceInterval: 0.5,
      },
      (point) => {
        setLocation(point);
        mapRef.current?.animateCamera(
          {
            center: point.coords,
            pitch: 50,
          },
          {
            duration: 3000,
          }
        );
      }
    );
  }, []);

  return (
    <>
      <View bg='default' flex='1'>
        {location ? (
          <MapView
            ref={mapRef}
            style={styles.mapView}
            customMapStyle={mapStyles}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            showsCompass={false}
            zoomControlEnabled
          >
            <>
              <Marker
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                }}
              />
            </>
          </MapView>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});
