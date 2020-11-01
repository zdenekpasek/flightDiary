import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { t } from '../../../../../localization';
import MyAppText from '../../../../components/MyAppText';

const DroneInfoCard = ({ uav, img }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={{
            uri: img,
          }}
          style={styles.imgStyle}
        />
        <View style={{ marginLeft: 35 }}>
          <MyAppText>
            <MyAppText fontWeight="bold">UAV: </MyAppText>
            {uav.uav}
          </MyAppText>
          <MyAppText customStyle={styles.textStyle}>
            <MyAppText fontWeight="bold">OK: </MyAppText>
            {uav.okNumber}
          </MyAppText>
          <MyAppText customStyle={styles.textStyle}>
            <MyAppText fontWeight="bold">{t('weight')}: </MyAppText>
            {uav.weight}
          </MyAppText>

          <MyAppText customStyle={styles.textStyle}>
            <MyAppText fontWeight="bold">{t('category')}: </MyAppText>
            {uav.category}
          </MyAppText>
        </View>
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
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
  },
});

export default DroneInfoCard;
