import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';
import MissionForm from '../components/MissionForm';
import { Context as MissionContext } from '../../../context/MissionContext';

const MissionCreateScreen = () => {
  init();

  const { state, createMission, clearErrorMessage } = useContext(
    MissionContext
  );

  return (
    <ScrollView>
      <Container>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <MissionForm
          buttonText={<MyAppText>{t('addMission')}</MyAppText>}
          onSubmit={createMission}
          error={state.errorMessage}
        />
      </Container>
    </ScrollView>
  );
};

MissionCreateScreen.navigationOptions = {
  title: 'Add new Mission',
};

const styles = StyleSheet.create({});

export default MissionCreateScreen;
