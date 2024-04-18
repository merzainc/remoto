import { View } from 'expo-dev-client-components';
import React, { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

interface ScreenProps {
  children: ReactNode;
  style?: any;
}

export default function Screen({ children, style }: ScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={[{ paddingTop: insets.top, flex: 1 }, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});
