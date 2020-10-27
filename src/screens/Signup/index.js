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
  const { state, signup } = useContext(AuthContext);
  return (
    <Container>
      <AuthForm
        title={t('signupTitle')}
        buttonText={<MyAppText>{t('signup')}</MyAppText>}
        isSignup={true}
        onSubmit={signup}
      />

      <Text>{state.errorMsg}</Text>

      <MyAppText
        customStyle={{ color: 'blue', marginLeft: 10 }}
        onPress={() => navigation.navigate('Login')}
      >
        {t('alreadyAccount')}
      </MyAppText>
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
