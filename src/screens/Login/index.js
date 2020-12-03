import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import AuthForm from '../../components/AuthForm';
import MyAppText from '../../components/MyAppText';
import { Context as AuthContext } from '../../context/AuthContext';
import Container from '../../components/Container';

const LoginScreen = ({ navigation }) => {
  init();
  const { state, login } = useContext(AuthContext);

  return (
    <Container>
      <AuthForm
        title={t('loginTitle')}
        buttonText={<MyAppText>{t('login')}</MyAppText>}
        onSubmit={login}
        errorMessage={state.errorMsg}
      />

      <MyAppText
        customStyle={{ color: 'blue', marginLeft: 10 }}
        onPress={() => navigation.navigate('Signup')}
      >
        {t('noAccount')}
      </MyAppText>
    </Container>
  );
};

const styles = StyleSheet.create({});

LoginScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default LoginScreen;
