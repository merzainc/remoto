import * as React from 'react';
import { Text } from 'react-native';

import Colors from '../constants/Colors';

type TextProps = Text['props'];
interface Props extends TextProps {
  lightColor?: string;
}

function useThemeColor(props: Props, colorName: keyof typeof Colors) {
  return props.lightColor || Colors[colorName];
}

export const StyledText = (props: Props) => {
  const { style, ...otherProps } = props;
  const color = useThemeColor(props, 'text');

  return <Text style={[{ color }, style]} {...otherProps} />;
};
