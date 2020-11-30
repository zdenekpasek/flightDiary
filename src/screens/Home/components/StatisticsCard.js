import React from 'react';
import { Feather, Entypo, MaterialIcons } from '@expo/vector-icons';
import { View, StyleSheet, Image } from 'react-native';
import MyAppText from '../../../components/MyAppText';

const StatisticsCard = ({ title, value, icon }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <MyAppText fontWeight="bold" customStyle={styles.textStyle}>
          {value}
        </MyAppText>
        {icon === 'aircraft' ? (
          <Entypo
            style={styles.iconStyle}
            name="aircraft"
            size={30}
            color="#0082D5"
          />
        ) : null}
        {icon === 'clock' ? (
          <Feather style={styles.iconStyle} name="clock" size={30} />
        ) : null}

        {icon === 'insert-chart' ? (
          <MaterialIcons
            style={styles.iconStyle}
            name="insert-chart"
            size={30}
            color="black"
          />
        ) : null}
      </View>
      <MyAppText customStyle={styles.textStyle}>{title}</MyAppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    height: 90,
    borderRadius: 20,
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#C8D3DE',
  },
  textStyle: {
    marginBottom: 10,
  },
  iconStyle: {
    marginLeft: 10,
  },
});

export default StatisticsCard;
