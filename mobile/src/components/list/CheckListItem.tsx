import { CheckIcon, iconSize, lightTheme } from '@expo/styleguide-native';
import { Row, Spacer, Text } from 'expo-dev-client-components';
import React, { ReactNode } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  onPress: () => void;
  icon?: ReactNode;
  title: string;
  checked?: boolean;
};

export function CheckListItem({ onPress, icon, title, checked }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row align='center' justify='between' padding='small' bg='default'>
        <Row align='center'>
          {icon}
          {icon ? <Spacer.Horizontal size='small' /> : null}
          <Text size='medium' type='InterRegular'>
            {title}
          </Text>
        </Row>
        {checked ? (
          <CheckIcon size={iconSize.regular} color={lightTheme.icon.default} />
        ) : null}
      </Row>
    </TouchableOpacity>
  );
}
