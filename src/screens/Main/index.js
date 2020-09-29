import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text h3>MainScreen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
