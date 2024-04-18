import Colors from '@/constants/Colors';
import { Text, View } from 'expo-dev-client-components';
import React from 'react';

export default function ActivityScreen() {
  return (
    <View
      flex='1'
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.bgBody,
      }}
    >
      <Text type='InterRegular' style={{ color: Colors.textColor }}>
        No activity assigned
      </Text>
    </View>
  );
}
