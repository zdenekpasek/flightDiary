import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';
import AddMissionForm from '../components/AddMissionForm';

const MissionCreateScreen = () => {
  init();
  return (
    <Container>
      <Spacer />
      <AddMissionForm buttonText={<MyAppText>{t('addMission')}</MyAppText>} />
    </Container>
  );
};

MissionCreateScreen.navigationOptions = {
  title: 'Add new Mission',
};

const styles = StyleSheet.create({});

export default MissionCreateScreen;
