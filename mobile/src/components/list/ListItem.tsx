import Colors from '@/constants/Colors';
import { Text, Row } from 'expo-dev-client-components';
import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  title: string;
  value: string;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
};

export function ListItem({ title, value, onPress, style }: Props) {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Row justify='between' align='center' padding='medium'>
        <Text type='InterRegular' style={{ color: Colors.black }}>
          {title}
        </Text>
        <Text style={[style, { color: Colors.primary }]} type='InterRegular'>
          {value}
        </Text>
      </Row>
    </TouchableOpacity>
  );
}
