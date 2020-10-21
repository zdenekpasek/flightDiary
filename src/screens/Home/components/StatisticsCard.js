import React from 'react';
import { View, StyleSheet } from 'react-native';
import MyAppText from '../../../components/MyAppText';

const StatisticsCard = ({ title, value }) => {
  return (
    <View style={styles.container}>
      <MyAppText fontWeight="bold" customStyle={styles.textStyle}>
        {value}
      </MyAppText>
      <MyAppText customStyle={styles.textStyle}>{title}</MyAppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginLeft: 10,
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
});

export default StatisticsCard;
