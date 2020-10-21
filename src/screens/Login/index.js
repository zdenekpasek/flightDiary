import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import AuthForm from '../../components/AuthForm';
import MyAppText from '../../components/MyAppText';
import { Context as AuthContext } from '../../context/AuthContext';

const LoginScreen = ({ navigation }) => {
  init();
  const { state, login } = useContext(AuthContext);

  console.log(state.errorMsg);

  return (
    <View>
      <AuthForm
        title={t('loginTitle')}
        buttonText={<MyAppText>{t('login')}</MyAppText>}
        onSubmit={login}
      />

      <Text>{state.errorMsg}</Text>

      <MyAppText
        customStyle={{ color: 'blue' }}
        onPress={() => navigation.navigate('Signup')}
      >
        {t('noAccount')}
      </MyAppText>
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
