import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import Container from '../../components/Container';
import Header from '../../components/Header';
import { Context as AuthContext } from '../../context/AuthContext';

const SettingsScreen = () => {
  init();
  const { signout } = useContext(AuthContext);
  return (
    <Container>
      <Header title="Settings" />

      <Text>{t('welcome')}</Text>

      <Button title="Sign out" onPress={signout} />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
