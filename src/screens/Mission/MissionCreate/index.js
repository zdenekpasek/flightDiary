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
import { Context as UavContext } from '../../../context/UavContext';

const MissionCreateScreen = () => {
  init();

  const { createMission, clearErrorMessage } = useContext(MissionContext);

  const { state, fetchUavs } = useContext(UavContext);

  return (
    <ScrollView>
      <Container>
        <NavigationEvents onWillFocus={fetchUavs} />
        <MissionForm
          buttonText={<MyAppText>{t('addMission')}</MyAppText>}
          onSubmit={createMission}
          uavs={state ? state.uavs : 'uavs'}
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
