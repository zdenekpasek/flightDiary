import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { t, init } from '../../../../localization';
import AddUavForm from '../components/AddUavForm';
import Container from '../../../components/Container';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';

const UAVCreateScreen = () => {
  init();
  return (
    <Container>
      <Spacer />
      <AddUavForm buttonText={<MyAppText>{t('addUav')}</MyAppText>} />
    </Container>
  );
};

UAVCreateScreen.navigationOptions = {
  title: 'Add new UAV',
};

const styles = StyleSheet.create({});

export default UAVCreateScreen;
