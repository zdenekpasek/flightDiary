import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import Container from '../../components/Container';
import Header from '../../components/Header';

const SettingsScreen = () => {
  init();
  return (
    <Container>
      <Header title="Settings" />

      <Text>{t('welcome')}</Text>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default SettingsScreen;
