import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import Card from '../../components/Card';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderLine from '../../components/HeaderLine';
import { Context as AuthContext } from '../../context/AuthContext';

const SettingsScreen = () => {
  init();
  const { signout } = useContext(AuthContext);
  return (
    <Container>
      <Header title="Settings" />
      <HeaderLine />

      <Card title={t('logout')} height={70} onPress={signout} icon="log-out" />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
