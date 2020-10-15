import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import AuthForm from '../../components/AuthForm';
import { Context as AuthContext } from '../../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup, errorMsg } = useContext(AuthContext);
  return (
    <View>
      <AuthForm
        title="Hello, Sign Up!"
        buttonText="Sign Up"
        isSignup={true}
        onSubmit={signup}
      />

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
