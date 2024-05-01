import useAuth from '@/auth/useAuth';
import { Button } from '@/components/Button';
import { ListItem } from '@/components/list';
import { SectionHeader } from '@/components/SectionHeader';
import {
  CheckIcon,
  iconSize,
  lightTheme,
  palette,
  spacing,
} from '@expo/styleguide-native';
import {
  Divider,
  Image,
  Row,
  Spacer,
  Text,
  View,
} from 'expo-dev-client-components';
import * as Device from 'expo-device';
import { Alert } from 'react-native';

export default function SettingScreen() {
  const { user, logOut } = useAuth();

  const handleDistanceUnits = () => {
    Alert.alert('Distance unit');
  };
  const changeMapProvider = () => {
    Alert.alert('Map provider');
  };

  return (
    <View
      flex='1'
      px='medium'
      style={{
        backgroundColor: lightTheme.background.secondary,
      }}
    >
      <View>
        <SectionHeader header='Account' />
        <View pb='small'>
          <Row
            justify='between'
            align='center'
            border='default'
            rounded='medium'
            padding='1.5'
            bg='default'
          >
            <Row align='start'>
              <Image
                size='xl'
                rounded='full'
                source={require('../../assets/avatar.png')}
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
            <CheckIcon color={palette.light.green[500]} size={iconSize.large} />
          </Row>
        </View>
        <Button
          label='End Shift'
          style={{ alignItems: 'center' }}
          onPress={() => logOut()}
        />
      </View>
      <Spacer.Vertical size='medium' />
      <View>
        <SectionHeader header='Settings' />
        <View bg='default' border='default' overflow='hidden' rounded='large'>
          <ListItem
            title='Map Preview Provider'
            value='Google'
            onPress={changeMapProvider}
          />
          <Divider style={{ height: 1 }} />
          <ListItem
            title='Distance Unit'
            value='Kilometer'
            onPress={() => handleDistanceUnits()}
          />
          <Divider style={{ height: 1 }} />
          <ListItem title='Background Connection' value='On' />
        </View>
        <View py='small' px='medium'>
          <Text style={{ fontSize: 14 }} color='secondary' type='InterRegular'>
            Background connection is required and can't be turned off.
          </Text>
        </View>
      </View>
      <View>
        <SectionHeader header='App Info' />
        <View bg='default' border='default' overflow='hidden' rounded='large'>
          <ConstantItem
            title='Device ID'
            value={Device.modelName ? Device.modelName : 'MN-H2718X'}
          />
          <Divider style={{ height: 1 }} />
          <ConstantItem title='Build Number' value='dcb59d' />
          <Divider style={{ height: 1 }} />
          <ConstantItem title='App Version' value='v1.1.21' />
          <Divider style={{ height: 1 }} />
          <ConstantItem title='Supported SDK' value='50.0.0' />
        </View>
        <View py='small' px='medium'>
          <Text style={{ fontSize: 14 }} color='secondary' type='InterRegular'>
            Remoto for Android v1.1.21 (dcb59d) store bundled{' '}
            {Device.supportedCpuArchitectures
              ? Device.supportedCpuArchitectures[0]
              : 'arm64-v8a'}
          </Text>
        </View>
      </View>
    </View>
  );
}

function ConstantItem({ title, value }: { title: string; value: string }) {
  return (
    <Row justify='between' align='center' padding='medium'>
      <Text type='InterRegular'>{title}</Text>
      <Text type='InterRegular'>{value}</Text>
    </Row>
  );
}
