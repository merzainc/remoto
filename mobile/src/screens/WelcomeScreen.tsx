//@ts-nocheck
import WithFeedback from '@/components/WithFeedback';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Button } from '../components/Button';
import { StyledText } from '../components/StyledText';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        blurRadius={10}
        style={styles.background}
        source={require('../../assets/background.jpg')}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
          <StyledText style={styles.tagline}>
            Monitor Security Activities From Anywhere
          </StyledText>
        </View>
        <View style={styles.buttonsContainer}>
          <Button
            theme='secondary'
            onPress={() => navigation.navigate('Login')}
            label='Start Shift'
            style={{ alignItems: 'center', paddingVertical: 15, marginTop: 15 }}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsContainer: {
    padding: 20,
    width: '100%',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
    fontFamily: 'Inter-SemiBold',
  },
});
