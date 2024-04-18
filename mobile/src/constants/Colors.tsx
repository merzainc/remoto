import { lightTheme } from '@expo/styleguide-native';
import { Platform } from 'react-native';

const tintColor = '#4e9bde';
const darkTintColor = '#1a74b3';
const error = '#dc3545';

export default {
  disabled: '#bbbbbb',
  absolute: '#fff',
  text: '#242c39',
  tintColor,
  black: '#000000',
  darkTintColor,
  navBorderBottom: 'rgba(46, 59, 76, 0.10)',
  navBackgroundColor: '#fff',
  sectionLabelBackgroundColor: '#f8f8f9',
  sectionLabelText: '#a7aab0',
  bodyBackground: lightTheme.background.screen,
  cardBackground: '#fff',
  cardSeparator: '#f4f4f5',
  cardTitle: '#242c39',
  error,
  highlightColor: '#5944ed',
  noticeText: '#fff',
  greyBackground: '#f8f8f9',
  greyText: '#a7aab0',
  greyUnderlayColor: '#f7f7f7',
  blackText: '#242c39',
  separator: '#f4f4f5',
  refreshControl: undefined,
  tabIconDefault: '#bdbfc3',
  tabIconSelected: Platform.OS === 'android' ? '#000' : tintColor,
  tabBar: '#fff',
  white: '#fff',
  primary: '#3390EC',
  bgBody: '#f4f4f5',
  textColor: '#707579',
  borderColor: '#dfe1e5',
  bgHover: '#eceef0',
};
