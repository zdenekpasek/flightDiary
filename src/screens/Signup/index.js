import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import AuthForm from '../../components/AuthForm';
import MyAppText from '../../components/MyAppText';
import { Context as AuthContext } from '../../context/AuthContext';
import { t, init } from '../../../localization';
import Container from '../../components/Container';

const SignupScreen = ({ navigation }) => {
  init();
  const { signup, errorMsg } = useContext(AuthContext);
  return (
    <Container>
      <AuthForm
        title="Hello, Sign Up!"
        buttonText={<MyAppText>{t('signup')}</MyAppText>}
        isSignup={true}
        onSubmit={signup}
      />

      <Text
        style={{ color: 'blue' }}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Log in here.
      </Text>
    </Container>
  );
};

const styles = StyleSheet.create({});

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SignupScreen;
