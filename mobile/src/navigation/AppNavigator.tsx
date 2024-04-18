import { ActivityBoxIcon } from '@/components/icons/Icons';
import Colors from '@/constants/Colors';
import ActivityScreen from '@/screens/ActivityScreen';
import HomeScreen from '@/screens/HomeScreen';
import SettingsScreen from '@/screens/SettingsScreen';
import TasksScreen from '@/screens/TasksScreen';
import { ArrowLeftIcon, lightTheme, palette } from '@expo/styleguide-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DrawerContent from './DrawerContent';
import { navigationRef } from './RootNavigation';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
  // const registerForPushNotifications = async () => {
  //   try {
  //     const permission = await Notifications.getPermissionsAsync;
  //     if (!permission) return;
  //     const token = await Notifications.getExpoPushTokenAsync();
  //     console.log(token);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // React.useEffect(() => {
  //   registerForPushNotifications();
  // }, []);

  return (
    <Drawer.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTintColor: Colors.white,
        headerStyle: {
          borderBottomColor: lightTheme.border.default,
          backgroundColor: Colors.primary,
        },
        headerTitleStyle: {
          fontWeight: Platform.OS === 'ios' ? '600' : '400',
          color: palette.light.white,
          fontSize: 18,
        },
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerTitle: 'Remoto',
          headerRight: () => {
            return (
              <TouchableOpacity
                style={{ paddingRight: 16 }}
                onPress={() => {
                  //@ts-ignore
                  navigationRef.navigate('Activity');
                }}
              >
                <ActivityBoxIcon color={palette.light.white} />
                {/* <Ionicons
                  name='flashlight-outline'
                  style={{
                    transform: [{ rotate: '-45deg' }],
                  }}
                  color={palette.light.white}
                  size={24}
                /> */}
              </TouchableOpacity>
            );
          },
        }}
      />
      <Drawer.Screen
        name='Tasks'
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ paddingLeft: 16 }}
                onPress={() => {
                  navigationRef.goBack();
                }}
              >
                <ArrowLeftIcon size={24} color={palette.light.white} />
              </TouchableOpacity>
            );
          },
        }}
        component={TasksScreen}
      />
      <Drawer.Screen
        name='Activity'
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ paddingLeft: 16 }}
                onPress={() => navigationRef.goBack()}
              >
                <ArrowLeftIcon size={24} color={palette.light.white} />
              </TouchableOpacity>
            );
          },
        }}
        component={ActivityScreen}
      />
      <Drawer.Screen
        name='Settings'
        options={{
          headerLeft: () => {
            return (
              <TouchableOpacity
                style={{ paddingLeft: 16 }}
                onPress={() => {
                  navigationRef.goBack();
                }}
              >
                <ArrowLeftIcon size={24} color={palette.light.white} />
              </TouchableOpacity>
            );
          },
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
