import { View } from 'expo-dev-client-components';
import React from 'react';
import LocationTracking from './views/LocationTracking';

export default function HomeScreen() {
  return (
    <>
      <View bg='default' flex='1'>
        <LocationTracking />
      </View>
    </>
  );
}
