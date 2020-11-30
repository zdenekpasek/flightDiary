import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { t } from '../../../../localization';
import MyAppText from '../../../components/MyAppText';

const UserInfoCard = ({ name, email, state, img }) => {
  return (
    <View>
      <MyAppText
        fontWeight="bold"
        fontSize={16}
        customStyle={{ marginBottom: 5 }}
      >
        {name}
      </MyAppText>
      <View style={{ flexDirection: 'row' }}>
        <Image
          source={require('../../../../assets/img/avatar.png')}
          style={styles.imgStyle}
        />
        <View style={{ marginLeft: 35 }}>
          <MyAppText>
            <MyAppText fontWeight="bold">Email: </MyAppText>
            {email}
          </MyAppText>
          <MyAppText customStyle={{ marginTop: 5 }}>
            <MyAppText fontWeight="bold">{t('state')}: </MyAppText>
            {state}
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
  imgStyle: {
    width: 100,
    height: 100,
    borderRadius: 200 / 2,
  },
});

export default UserInfoCard;
