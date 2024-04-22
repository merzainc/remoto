import useAuth from '@/auth/useAuth';
import { ActivityIcon, CogIcon, TaskIcon, TasksIcon } from '@/components/icons';
import Colors from '@/constants/Colors';
import {
  HomeFilledIcon,
  iconSize,
  lightTheme,
  spacing,
} from '@expo/styleguide-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import {
  Button,
  ChevronRightIcon,
  Image,
  Row,
  Spacer,
  Text,
  View,
} from 'expo-dev-client-components';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { navigate } from './RootNavigation';

const drawerList = [
  { icon: HomeFilledIcon, label: 'Go Home', navigateTo: 'Home' },
  { icon: TaskIcon, label: 'Patrol Tasks', navigateTo: 'Tasks' },
  { icon: TasksIcon, label: 'Activity', navigateTo: 'Activity' },
  { icon: ActivityIcon, label: 'Boundary', navigateTo: 'Boundary' },
  { icon: CogIcon, label: 'Settings', navigateTo: 'Settings' },
];

export default function DrawerContent(props: any) {
  const { user } = useAuth();
  return (
    <View flex='1'>
      <DrawerContentScrollView {...props}>
        <Button.Container onPress={() => navigate('Settings')}>
          <View px='medium' pt='large'>
            <Row justify='between' align='center'>
              <Row align='start'>
                <Image
                  size='xl'
                  rounded='full'
                  source={require('../../assets/avatar.png')}
                />
                <Spacer.Horizontal size='small' />
                <View>
                  <Row align='center'>
                    <Text
                      type='InterSemiBold'
                      style={{ paddingRight: spacing[0.5] }}
                      numberOfLines={1}
                    >
                      {user?.name}
                    </Text>
                    <ChevronRightIcon size='small' />
                  </Row>
                  <Spacer.Vertical size='micro' />
                  <Text
                    style={{
                      paddingRight: spacing[4],
                      color: Colors.textColor,
                    }}
                    type='InterRegular'
                    numberOfLines={1}
                    size='small'
                  >
                    {user?.force}
                  </Text>
                </View>
              </Row>
            </Row>
          </View>
        </Button.Container>
        <View pb='medium' px='small'>
          <DrawerItems />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

function DrawerItems() {
  return drawerList.map((item, index) => (
    <TouchableOpacity
      onPress={() => {
        navigate(item.navigateTo);
      }}
      key={index}
    >
      <Row padding='medium' align='center'>
        {
          <>
            <item.icon
              size={iconSize.regular}
              color={lightTheme.icon.default}
            />
            <Spacer.Horizontal size='medium' />
          </>
        }
        <Text type='InterRegular' size='medium' align='center' color='default'>
          {item.label}
        </Text>
      </Row>
    </TouchableOpacity>
  ));
}
