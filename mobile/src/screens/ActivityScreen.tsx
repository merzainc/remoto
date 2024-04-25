import { reformatDate, speed, timeBetween } from '@/common/common';
import { StyledText } from '@/components/StyledText';
import Colors from '@/constants/Colors';
import mapStyles from '@/constants/MapStyles';
import Point, { Activity } from '@/constants/Model';
import { lightTheme } from '@expo/styleguide-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'expo-dev-client-components';
import * as SQLite from 'expo-sqlite';
import React from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { Polyline } from 'react-native-maps';

let activs: Activity[] = [];
let handleActivs: any[] = [];

export default function ActivityScreen() {
  const db = SQLite.openDatabase('remoto');
  const [refresh, setRefresh] = React.useState(false as boolean);
  const [activities, setActivities] = React.useState([] as any[]);
  const navigation = useNavigation();

  React.useEffect(() => {
    db.transaction((tx: any) => {
      tx.executeSql(
        'SELECT * FROM activities ORDER BY id desc',
        [],
        (txObj: any, resultSet: any) => {
          activs = resultSet.rows._array;

          const fetchPointsForActivities = async () => {
            for (const a of activs) {
              const points = await new Promise((resolve, reject) => {
                db.transaction((tx: any) => {
                  tx.executeSql(
                    'SELECT * FROM points WHERE activity_id=? ORDER BY num ASC',
                    [a.id],
                    (txObj: any, resultSet: any) => {
                      resolve(resultSet.rows._array);
                    },
                    (txObj: any, error: any) => {
                      reject(error);
                    }
                  );
                });
              });

              handleActivs.push({
                id: a.id,
                start: a.start,
                end: a.end,
                distance: a.distance,
                points: points as Point[],
              });
              console.log(a.id, a.start, a.end, a.distance, points);
            }

            setActivities(handleActivs);
            activs = [];
            handleActivs = [];
          };

          fetchPointsForActivities().then((r) => r);
        },
        (txObj: any, error: any) => console.error([error, txObj])
      );
    });
  }, [refresh]);

  console.log(activities);

  if (!activities)
    return (
      <View flex='1' style={{ justifyContent: 'center', alignItems: 'center' }}>
        <StyledText>No activities recorded</StyledText>
      </View>
    );

  return (
    <ScrollView
      style={{ backgroundColor: lightTheme.background.screen }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.root}>
        <Image
          style={styles.story}
          source={require('./../../assets/activity.png')}
        />
        <Text style={styles.header}>Completed Patrols</Text>
        <Text style={{ color: lightTheme.text.default, fontSize: 14 }}>
          Here you can see all your patrol activities!
        </Text>
      </View>

      {activities.map(
        (
          a: {
            id: number;
            start: string;
            end: string;
            distance: number;
            points: Point[];
          },
          i: number
        ) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.window}
              activeOpacity={1}
              onPress={() => {}}
            >
              <View style={styles.window_section}>
                <View>
                  <Text style={styles.headText}>#{i + 1}</Text>
                  <Text>{a.start}</Text>
                </View>

                {/* <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.remove_button}
                  onPress={() => remove(a.id)}
                >
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    size={25}
                    style={{ color: '#AAA', marginRight: '2%' }}
                  />
                </TouchableOpacity> */}
              </View>

              <MapView
                customMapStyle={mapStyles}
                style={styles.map}
                zoomEnabled={false}
                zoomControlEnabled={false}
                zoomTapEnabled={false}
                scrollEnabled={false}
                rotateEnabled={false}
                initialRegion={{
                  latitude:
                    (Math.max(...a.points.map((p: Point) => p.latitude)) +
                      Math.min(...a.points.map((p: Point) => p.latitude))) /
                    2,
                  longitude:
                    (Math.max(...a.points.map((p: Point) => p.longitude)) +
                      Math.min(...a.points.map((p: Point) => p.longitude))) /
                    2,
                  latitudeDelta:
                    (Math.max(...a.points.map((p: Point) => p.latitude)) -
                      Math.min(...a.points.map((p: Point) => p.latitude))) *
                    1.4,
                  longitudeDelta:
                    (Math.max(...a.points.map((p: Point) => p.longitude)) -
                      Math.min(...a.points.map((p: Point) => p.longitude))) *
                    1.4,
                }}
              >
                <Polyline
                  key={i}
                  coordinates={a.points.map((p: Point) => ({
                    latitude: p.latitude,
                    longitude: p.longitude,
                  }))}
                  strokeWidth={2}
                  strokeColor={Colors.primary}
                  strokeColors={[Colors.primary]}
                />
              </MapView>

              <View style={[styles.window_section, { flexDirection: 'row' }]}>
                <View style={styles.column}>
                  <FontAwesome5
                    name='road'
                    size={20}
                    style={{ color: lightTheme.icon.default }}
                  />
                  {a.distance < 1000 && (
                    <Text style={styles.column_text}>
                      {a.distance.toFixed(2)} m
                    </Text>
                  )}

                  {a.distance >= 1000 && (
                    <Text style={styles.column_text}>
                      {(a.distance / 1000).toFixed(2)} km
                    </Text>
                  )}
                </View>

                <View style={styles.column}>
                  <MaterialCommunityIcons
                    name='clock-time-three'
                    size={20}
                    style={{ color: lightTheme.icon.default }}
                  />
                  <Text style={styles.column_text}>
                    {timeBetween(
                      Date.parse(reformatDate(a.end)) -
                        Date.parse(reformatDate(a.start))
                    )}
                  </Text>
                </View>

                <View style={styles.column}>
                  <FontAwesome5
                    name='tachometer-alt'
                    size={20}
                    style={{ color: lightTheme.icon.default }}
                  />
                  <Text style={styles.column_text}>
                    {speed(a).toFixed(2)} km/h
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '3%',
    elevation: 1,
    padding: '3%',
  },
  story: {
    width: 250,
    height: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  header: {
    color: Colors.primary,
    fontWeight: '700',
    fontSize: 16,
    marginBottom: '3%',
  },
  window: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: '3%',
    backgroundColor: lightTheme.background.default,
    borderColor: lightTheme.border.default,
    borderWidth: 0.8,
  },
  window_section: {
    width: '100%',
    height: '20%',
    padding: '2%',
    flexDirection: 'row',
  },
  map: {
    width: '100%',
    height: '60%',
  },
  headText: {
    fontWeight: '700',
    color: Colors.textColor,
    fontSize: 24,
    paddingTop: 8,
  },
  column: {
    width: '33.3%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column_text: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: '3%',
  },
  remove_button: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 'auto',
  },
});
