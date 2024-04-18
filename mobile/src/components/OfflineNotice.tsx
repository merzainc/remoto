import { useNetInfo } from '@react-native-community/netinfo';
import Constants from 'expo-constants';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../constants/Colors';
import { StyledText } from './StyledText';

export default function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <StyledText style={styles.text}>No Internet Connection</StyledText>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fc5c65',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: Colors.white,
  },
});
