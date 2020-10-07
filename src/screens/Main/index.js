import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Spacer from '../../components/spacer';

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text h3>MainScreen</Text>
      <Spacer />
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Spacer />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
