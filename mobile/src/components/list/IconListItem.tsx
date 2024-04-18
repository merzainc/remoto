import Colors from '@/constants/Colors';
import { Row, Spacer, Text } from 'expo-dev-client-components';
import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  onPress?: () => void;
  icon: ReactNode;
  title: string;
};

export function IconListItem({ onPress, icon, title }: Props) {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Row align='center' justify='between' padding='small' bg='default'>
        <Row align='center'>
          {icon}
          {icon ? <Spacer.Horizontal size='medium' /> : null}
          <Text
            size='medium'
            type='InterRegular'
            style={{ color: Colors.black }}
          >
            {title}
          </Text>
        </Row>
      </Row>
    </TouchableOpacity>
  );
}
