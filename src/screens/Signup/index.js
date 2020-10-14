import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import AuthForm from '../../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <AuthForm title="Hello, Sign Up!" buttonText="Sign Up" isSignup={true} />

      <Text
        style={{ color: 'blue' }}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Log in here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SignupScreen;
