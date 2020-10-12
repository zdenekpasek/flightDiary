import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import MyAppText from '../../components/MyAppText';
import Spacer from '../../components/spacer';
import Button from './components/button';

const MainScreen = ({ navigation }) => {
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
          Flight Diary
        </MyAppText>

        <MyAppText
          fontWeight="regular"
          fontSize={20}
          customStyle={[styles.titleStyle, { marginBottom: 40 }]}
        >
          Track your flights
        </MyAppText>
      </ImageBackground>
      <Spacer />
      <View>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
          buttonGradient={['#2A84EC', '#2981E7', '#1C63B3']}
        />
        <Spacer />
        <Button
          title="Signup"
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
