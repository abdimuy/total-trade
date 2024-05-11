import React, {useEffect} from 'react';
import {PermissionsAndroid, ScrollView, Text, View} from 'react-native';
import homeStyles from './home.styles';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {BACKGROUND_COLOR_PRIMARY} from '../../contants/colors';
import FocusAwareStatusBar from '../../components/common/FocusAwareStatusBar/FocusAwareStatusBar';
import Geolocation from '@react-native-community/geolocation';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION,
        {
          title: 'Permiso de ubicación en segundo plano',
          message:
            'La aplicación necesita acceso a tu ubicación en segundo plano para poder seguir funcionando',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
    }
  } catch (err) {
    console.warn(err);
  }
};

const Home = () => {
  useEffect(() => {
    requestCameraPermission().then(() => {
      Geolocation.getCurrentPosition(info => console.log(info));
    });
  }, []);

  return (
    <ScrollView style={homeStyles.container}>
      <FocusAwareStatusBar
        barStyle="light-content"
        backgroundColor="#003CBF"
        animated
      />
      <View style={homeStyles.stats}>
        <Text style={homeStyles.statsSubtitle}>Hola,</Text>
        <Text style={homeStyles.statsTitle}>Aldrich Cortero</Text>
      </View>

      <View style={homeStyles.detailsContainer}>
        <View style={homeStyles.details}>
          <View style={homeStyles.detailsColumn}>
            <View style={homeStyles.detailsColumnItem}>
              <Text style={homeStyles.detailsSubtitle}>
                Total cobrado (Hoy)
              </Text>
              <Text style={homeStyles.detailsTitle}>${2000}</Text>
            </View>
            <View style={homeStyles.detailsColumnItem}>
              <Text style={homeStyles.detailsSubtitle}>
                Total cobrado (semanal)
              </Text>
              <Text style={homeStyles.detailsTitle}>${2000}</Text>
            </View>
            <View style={homeStyles.detailsColumnItem}>
              <Text style={homeStyles.detailsSubtitle}>
                Nuevas cuentas esta semana
              </Text>
              <Text style={homeStyles.detailsTitle}>8</Text>
            </View>
          </View>
          <View style={homeStyles.detailsRow}>
            <View style={homeStyles.detailsRowCardPrimary}>
              <Text style={homeStyles.detailsRowCardSubtitle}>Porcentaje</Text>
              <AnimatedCircularProgress
                size={80}
                width={8}
                fill={40}
                rotation={180}
                tintColor={BACKGROUND_COLOR_PRIMARY}
                duration={2000}>
                {() => <Text style={homeStyles.detailsProgress}>40%</Text>}
              </AnimatedCircularProgress>
            </View>
            <View style={homeStyles.detailsRowCardSecondary}>
              <Text style={homeStyles.detailsRowCardSubtitle}>
                Cntas. cobradas
              </Text>
              <Text style={homeStyles.detailsRowCardTitle}>
                189
                <Text style={homeStyles.detailsRowCardText}>/253</Text>
              </Text>
            </View>
          </View>
        </View>

        <View style={homeStyles.details}>
          <Text style={homeStyles.detailsTitleSecondary}>Ultimos pagos</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
