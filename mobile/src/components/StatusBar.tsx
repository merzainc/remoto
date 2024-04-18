import * as React from 'react';
import { Platform, StatusBar as RNStatusBar } from 'react-native';

export default function StatusBar({
  bg = '#3390ec',
  content = true,
}: {
  bg?: string;
  content?: boolean;
}) {
  const barStyle = content ? 'light-content' : 'dark-content';

  if (Platform.OS === 'android') {
    RNStatusBar.setBarStyle(barStyle);
  }

  return <RNStatusBar barStyle={barStyle} backgroundColor={bg} />;
}
