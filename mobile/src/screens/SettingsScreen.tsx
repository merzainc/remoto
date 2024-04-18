import useAuth from '@/auth/useAuth';
import { IconListItem, ListItem, RadioListItem } from '@/components/list';
import WithFeedback from '@/components/WithFeedback';
import Colors from '@/constants/Colors';
import {
  CheckIcon,
  iconSize,
  lightTheme,
  palette,
  spacing,
} from '@expo/styleguide-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import {
  Divider,
  Heading,
  Image,
  Row,
  Spacer,
  Text,
  View,
} from 'expo-dev-client-components';
import { useState } from 'react';
import { Alert, Linking, StyleSheet } from 'react-native';

export default function SettingScreen() {
  const { user, logOut } = useAuth();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isBackgroundOn, setIsBackgroundOn] = useState(true);

  const handleDistanceUnits = () => {
    Alert.alert('Distance unit');
  };
  const changeMapProvider = () => {
    Alert.alert('Map provider');
  };

  return (
    <View
      flex='1'
      style={{
        backgroundColor: Colors.bgBody,
      }}
    >
      <View
        bg='default'
        shadow='micro'
        style={{
          borderBottomColor: lightTheme.border.default,
          borderBottomWidth: 0.5,
        }}
      >
        <Row px='medium' py='small' align='center'>
          <Heading
            style={{
              marginRight: spacing[2],
              fontSize: 14,
              color: Colors.primary,
            }}
            type='InterMedium'
          >
            Account
          </Heading>
        </Row>
        <View px='medium' bg='default'>
          <View rounded='large' bg='default' mb='small'>
            <Row
              justify='between'
              align='center'
              border='default'
              rounded='medium'
              padding='1.5'
            >
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
                  <Text
                    type='InterBold'
                    style={{ paddingRight: spacing[4] }}
                    numberOfLines={1}
                  >
                    {user?.name}
                  </Text>
                  <Spacer.Vertical size='micro' />
                  <Text
                    style={{ paddingRight: spacing[4] }}
                    color='secondary'
                    type='InterRegular'
                    numberOfLines={1}
                    size='small'
                  >
                    {user?.force}
                  </Text>
                </View>
              </Row>
              <CheckIcon
                color={palette.light.green[500]}
                size={iconSize.large}
              />
            </Row>
          </View>
          <WithFeedback
            style={{ paddingVertical: 10 }}
            onPress={() => logOut()}
          >
            End Shift
          </WithFeedback>
          <Spacer.Vertical size='small' />
        </View>
      </View>
      <View py='small' px='medium'>
        <Text
          style={{ fontSize: 14, color: Colors.textColor }}
          type='InterRegular'
        >
          Please consider signing out once your shift ends to stop all tracking
          activities and preserve battery life.
        </Text>
      </View>

      <View bg='default' style={styles.container}>
        <Row px='medium' pt='small' align='center'>
          <Heading
            style={{
              marginRight: spacing[2],
              fontSize: 14,
              color: Colors.primary,
            }}
            type='InterMedium'
          >
            Settings
          </Heading>
        </Row>
        <View>
          <ListItem
            title='Map Preview Provider'
            style={{ color: Colors.primary }}
            value='Google'
            onPress={changeMapProvider}
          />
          <View px='medium'>
            <Divider style={{ height: 0.8 }} />
          </View>
          <RadioListItem
            title='Shift Reminders'
            checked={isSwitchOn}
            onToggleSwitch={() => setIsSwitchOn(!isSwitchOn)}
          />
          <View px='medium'>
            <Divider style={{ height: 0.8 }} />
          </View>
          <ListItem
            title='Distance Unit'
            value='Automatic'
            onPress={handleDistanceUnits}
          />
          <View px='medium'>
            <Divider style={{ height: 0.8 }} />
          </View>
          <RadioListItem
            title='Background Connection'
            checked={isBackgroundOn}
            onToggleSwitch={() => setIsBackgroundOn(!isBackgroundOn)}
          />
        </View>
      </View>
      <Spacer.Vertical size='xl' />
      <View bg='default' style={styles.container}>
        <Row px='medium' pt='small' align='center'>
          <Heading
            style={{
              marginRight: spacing[2],
              fontSize: 14,
              color: Colors.primary,
            }}
            type='InterMedium'
          >
            Help
          </Heading>
        </Row>
        <View>
          <IconListItem
            onPress={() => Linking.openURL('mailto:ternalify@gmail.com')}
            title='Ask a Question'
            icon={
              <Ionicons
                name='chatbubble-ellipses-outline'
                size={24}
                color={lightTheme.icon.default}
              />
            }
          />
          <View px='medium'>
            <Divider style={{ height: 0.8 }} />
          </View>
          <IconListItem
            title='Remoto FAQ'
            icon={
              <AntDesign
                name='questioncircleo'
                size={24}
                color={lightTheme.icon.default}
              />
            }
          />
          <View px='medium'>
            <Divider style={{ height: 0.8 }} />
          </View>
          <IconListItem
            onPress={() =>
              Linking.openURL('https://remoto-alpha.vercel.app/p/privacy')
            }
            title='Privacy Policy'
            icon={
              <Ionicons
                name='shield-checkmark-outline'
                size={24}
                color={lightTheme.icon.default}
              />
            }
          />
        </View>
      </View>
      <View py='small' px='medium'>
        <Text
          style={{ color: Colors.textColor, fontSize: 14 }}
          type='InterRegular'
        >
          Remoto for Android v1.0.20 (7792d0b) store bundled arm64-v8a.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.borderColor,
    borderTopWidth: 0.5,
    borderWidth: 0.5,
    shadowColor: '#000',
    shadowRadius: 10,
    shadowOpacity: 0.15,
    elevation: 0.6,
  },
});
