import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import moment from 'moment';
import { t } from '../../../../../localization';
import MyAppText from '../../../../components/MyAppText';
import HeaderLine from '../../../../components/HeaderLine';
import Spacer from '../../../../components/spacer';
import { Feather, FontAwesome } from '@expo/vector-icons';

const MissionInfoCard = ({ mission }) => {
  return (
    <View>
      <MyAppText>{t('basicInfo')}</MyAppText>

      <View style={{ marginLeft: 15, marginTop: 10 }}>
        <MyAppText>
          <MyAppText fontWeight="bold">Pilot: </MyAppText>
          {mission.pilot}
        </MyAppText>
        <MyAppText customStyle={styles.textStyle}>
          <MyAppText fontWeight="bold">UAV: </MyAppText>
          {mission.uav}
        </MyAppText>
        <MyAppText customStyle={styles.textStyle}>
          <MyAppText fontWeight="bold">GPS: </MyAppText>
          {mission.gps}
        </MyAppText>
      </View>

      <HeaderLine />

      <MyAppText>{t('dateAndTime')}</MyAppText>

      <View style={{ marginLeft: 15, marginTop: 10 }}>
        <MyAppText customStyle={styles.textStyle}>
          <MyAppText fontWeight="bold">{t('missionStart')} </MyAppText>
          {moment(mission.missionStart).format('lll')}
        </MyAppText>

        <MyAppText customStyle={styles.textStyle}>
          <MyAppText fontWeight="bold">{t('missionEnd')} </MyAppText>
          {moment(mission.missionEnd).format('lll')}
        </MyAppText>

        <MyAppText customStyle={styles.textStyle}>
          <MyAppText fontWeight="bold">{t('flightTimeMission')} </MyAppText>
          {`${mission.flightTime} min`}
        </MyAppText>
      </View>

      <HeaderLine />
      <MyAppText>{t('weather')}</MyAppText>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: 10,
        }}
      >
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <FontAwesome name="cloud" size={40} color="#0082D5" />
          <MyAppText
            fontWeight="medium"
            fontSize={17}
            customStyle={{
              alignSelf: 'center',
              marginLeft: 10,
              marginRight: 50,
            }}
          >
            {`${mission.tmp} °C`}
          </MyAppText>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Feather name="wind" size={40} color="#374355" />
          <MyAppText
            fontWeight="medium"
            fontSize={17}
            customStyle={{ alignSelf: 'center', marginLeft: 10 }}
          >
            {`${mission.tmp} m/s`}
          </MyAppText>
        </View>
      </View>
      <HeaderLine />
      <MyAppText>{t('others')}</MyAppText>

      <View style={{ marginLeft: 15, marginTop: 10 }}>
        <MyAppText customStyle={styles.textStyle}>
          <MyAppText fontWeight="bold">{t('usedBatteries')} </MyAppText>
          {mission.usedBatteries}
        </MyAppText>
        <MyAppText customStyle={styles.textStyle}>
          <MyAppText fontWeight="bold">{t('description')} </MyAppText>
          {mission.desc}
        </MyAppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },

  textStyle: {
    marginTop: 5,
  },
});

export default MissionInfoCard;
