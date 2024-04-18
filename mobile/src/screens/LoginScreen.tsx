import { lightTheme } from '@expo/styleguide-native';
import { Heading, TextInput, View } from 'expo-dev-client-components';
import React, { useState } from 'react';
import { Image, Linking, StyleSheet } from 'react-native';
import authApi from '../api/auth';
import Screen from '../components/Screen';
import { StyledText } from '../components/StyledText';

import WithFeedback from '@/components/WithFeedback';
import Colors from '@/constants/Colors';
import useAuth from '../auth/useAuth';
import { Button } from '@/components/Button';

export default function LoginScreen() {
  const [guard, setGuard] = useState({ force: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { logIn } = useAuth();
  return (
    <Screen>
      <View padding='medium' bg='default' flex='1'>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <Heading align='center'>Sign in to your account</Heading>
        )}
        <View py='xl' bg='default' style={{ flexDirection: 'column', gap: 20 }}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.borderColor,
            }}
            cursorColor={Colors.primary}
            placeholder='Remoto ID'
            rounded='medium'
            px='4'
            py='2'
            value={guard.force}
            onChangeText={(text) => {
              setError('');
              setGuard({ ...guard, force: text });
            }}
          />
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.borderColor,
            }}
            secureTextEntry
            cursorColor={Colors.primary}
            placeholder='Password'
            rounded='medium'
            px='4'
            py='2'
            value={guard.password}
            onChangeText={(text) => {
              setError('');
              setGuard({ ...guard, password: text });
            }}
          />
        </View>
        <WithFeedback
          disabled={isLoading}
          isLoading={isLoading}
          style={{ paddingVertical: 10 }}
          onPress={async () => {
            setIsLoading(true);
            if (guard.force === '' || guard.password === '') {
              setError('Please fill in all fields to proceed with action.');
              setIsLoading(false);
              return;
            }
            const result = await authApi.login(guard);
            if (!result.ok) {
              //@ts-ignore
              setError(result.data.message);
              setIsLoading(false);
              return;
            }
            //@ts-ignore
            logIn(result.data.guard);
            setIsLoading(false);
          }}
        >
          Sign In
        </WithFeedback>
        <Button
          label='Forgot Password'
          style={{ alignItems: 'center', marginVertical: 12 }}
          onPress={() =>
            Linking.openURL('https://remoto-alpha.vercel.app/password/reset')
          }
          theme='secondary'
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
});

function ErrorMessage({ error }: { error: string }) {
  return (
    <StyledText
      style={{
        color: lightTheme.text.error,
        fontFamily: 'Inter-Medium',
        textAlign: 'center',
        paddingVertical: 4,
      }}
    >
      {error}
    </StyledText>
  );
}
