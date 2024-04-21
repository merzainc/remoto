import { NavigationContainer } from '@react-navigation/native';
import { View } from 'expo-dev-client-components';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import AuthContext, { User } from './auth/context';
import authStorage from './auth/storage';
import StatusBar from './components/StatusBar';
import ThemedStatusBar from './components/ThemedStatusBar';
import { AuthNavigator } from './navigation';
import AppNavigator from './navigation/AppNavigator';
import { navigationRef } from './navigation/RootNavigation';
import logger from './utility/logger';

SplashScreen.preventAutoHideAsync();

export default function HomeApp() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    async function prepare() {
      try {
        const user = await authStorage.restoreUser();
        if (user) setUser(user);
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Inter-Black': require('../assets/Inter/Inter-Black.otf'),
          'Inter-BlackItalic': require('../assets/Inter/Inter-BlackItalic.otf'),
          'Inter-Bold': require('../assets/Inter/Inter-Bold.otf'),
          'Inter-BoldItalic': require('../assets/Inter/Inter-BoldItalic.otf'),
          'Inter-ExtraBold': require('../assets/Inter/Inter-ExtraBold.otf'),
          'Inter-ExtraBoldItalic': require('../assets/Inter/Inter-ExtraBoldItalic.otf'),
          'Inter-ExtraLight': require('../assets/Inter/Inter-ExtraLight.otf'),
          'Inter-ExtraLightItalic': require('../assets/Inter/Inter-ExtraLightItalic.otf'),
          'Inter-Regular': require('../assets/Inter/Inter-Regular.otf'),
          'Inter-Italic': require('../assets/Inter/Inter-Italic.otf'),
          'Inter-Light': require('../assets/Inter/Inter-Light.otf'),
          'Inter-LightItalic': require('../assets/Inter/Inter-LightItalic.otf'),
          'Inter-Medium': require('../assets/Inter/Inter-Medium.otf'),
          'Inter-MediumItalic': require('../assets/Inter/Inter-MediumItalic.otf'),
          'Inter-SemiBold': require('../assets/Inter/Inter-SemiBold.otf'),
          'Inter-SemiBoldItalic': require('../assets/Inter/Inter-SemiBoldItalic.otf'),
          'Inter-Thin': require('../assets/Inter/Inter-Thin.otf'),
          'Inter-ThinItalic': require('../assets/Inter/Inter-ThinItalic.otf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
      logger.logMessage('SplashScreen is hidden');
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <View
        style={{ height: '100%', width: '100%' }}
        onLayout={onLayoutRootView}
      >
        <AuthContext.Provider value={{ user, setUser }}>
          <NavigationContainer ref={navigationRef}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        </AuthContext.Provider>
      </View>
      {user ? <ThemedStatusBar /> : <StatusBar content={false} bg='#fff' />}
    </>
  );
}
