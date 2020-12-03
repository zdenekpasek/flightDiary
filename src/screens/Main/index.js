import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import MyAppText from '../../components/MyAppText';
import Spacer from '../../components/spacer';
import Button from './components/button';

const MainScreen = ({ navigation }) => {
  init();
  return (
    <>
      <ImageBackground
        style={styles.imageStyle}
        source={require('../../../assets/img/drone_main.jpg')}
        resizeMode="cover"
      >
        <MyAppText
          fontWeight="extrabold"
          fontSize={34}
          customStyle={styles.titleStyle}
        >
          {t('flightDiary')}
        </MyAppText>

        <MyAppText
          fontWeight="regular"
          fontSize={20}
          customStyle={[styles.titleStyle, { marginBottom: 40 }]}
        >
          {t('trackFlights')}
        </MyAppText>
      </ImageBackground>
      <Spacer />
      <View>
        <Button
          title={t('login')}
          onPress={() => navigation.navigate('Login')}
          buttonGradient={['#2A84EC', '#2981E7', '#1C63B3']}
        />
        <Spacer />
        <Button
          title={t('signup')}
          onPress={() => navigation.navigate('Signup')}
          buttonGradient={['#2A84EC', '#2981E7', '#1C63B3']}
        />
      </View>
      <Spacer />
    </>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    height: undefined,
    width: undefined,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleStyle: {
    color: '#F2F2F2',
  },
  buttonStyle: {
    backgroundColor: 'black',
  },
});

export default MainScreen;
