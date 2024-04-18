import useAuth from '@/auth/useAuth';
import { BriefCaseIcon, CogIcon, HomeIcon } from '@/components/icons';
import { ActivityBoxIcon } from '@/components/icons/Icons';
import Colors from '@/constants/Colors';
import { spacing } from '@expo/styleguide-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
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
import { navigate } from './RootNavigation';

const drawerList = [
  { icon: HomeIcon, label: 'Home', navigateTo: 'Home' },
  { icon: BriefCaseIcon, label: 'Patrol Tasks', navigateTo: 'Tasks' },
  { icon: ActivityBoxIcon, label: 'Activity', navigateTo: 'Activity' },
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
                  source={{
                    uri: 'https://lh3.googleusercontent.com/a/ACg8ocLIZIJU1N_f6fxFMM8ECAZ1vd9H_dMgIuN7D43NMBRYbH8=s96-c',
                  }}
                />
                <Spacer.Horizontal size='small' />
                <View>
                  <Row align='center'>
                    <Text
                      type='InterBold'
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
        <View>
          <DrawerItems />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

function DrawerItems() {
  const navigation = useNavigation();
  return drawerList.map((item, index) => (
    <DrawerItem
      pressColor={Colors.bgHover}
      labelStyle={{
        fontFamily: 'Inter-Regular',
        color: Colors.black,
        fontSize: 14.5,
        marginLeft: -8,
      }}
      key={index}
      icon={() => <item.icon color={Colors.textColor} />}
      label={item.label}
      //@ts-ignore
      onPress={() => navigation.navigate(item.navigateTo)}
    />
  ));
}
