import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import AuthForm from '../../components/AuthForm';

const LoginScreen = ({ navigation }) => {
  return (
    <View>
      <AuthForm title="Welcome back, Log In!" buttonText="Log In" />

      <Button
        onPress={() => navigation.navigate('mainFlow')}
        title="Main flow"
      />
      <Text
        style={{ color: 'blue' }}
        onPress={() => navigation.navigate('Signup')}
      >
        Dont have an account? Signup in here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

LoginScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default LoginScreen;
