import Colors from '@/constants/Colors';
import { Platform, StatusBar } from 'react-native';

export default function ThemedStatusBar() {
  const barStyle = 'light-content';

  if (Platform.OS === 'android') {
    StatusBar.setBarStyle(barStyle);
  }
  return <StatusBar barStyle={barStyle} backgroundColor={Colors.primary} />;
}
