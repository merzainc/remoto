import Colors from '@/constants/Colors';
import { Row, Spacer, Text, View } from 'expo-dev-client-components';
import React, { ReactNode } from 'react';
import { Switch } from 'react-native-paper';

type Props = {
  onToggleSwitch?: () => void;
  icon?: ReactNode;
  title: string;
  checked?: boolean;
};

export function RadioListItem({ onToggleSwitch, icon, title, checked }: Props) {
  return (
    <Row align='center' justify='between' bg='default' padding='small'>
      <Row align='center'>
        {icon}
        {icon ? <Spacer.Horizontal size='small' /> : null}
        <Text size='medium' type='InterRegular' style={{ color: Colors.black }}>
          {title}
        </Text>
      </Row>
      <View
        style={{ width: 15, height: 15, paddingRight: 12 }}
        align='centered'
      >
        <Switch
          value={checked}
          onValueChange={onToggleSwitch}
          color={Colors.primary}
        />
      </View>
    </Row>
  );
}
