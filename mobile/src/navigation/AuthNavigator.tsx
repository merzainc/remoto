import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '@/screens/LoginScreen';
import WelcomeScreen from '@/screens/WelcomeScreen';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
        options={{ headerShown: false }}
        name='Welcome'
        component={WelcomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name='Login'
        component={LoginScreen}
      />
    </Stack.Navigator>
  );
}
