import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import Container from '../../../components/Container';
import { Context as MissionContext } from '../../../context/MissionContext';
import { Context as UavContext } from '../../../context/UavContext';
import HeaderLine from '../../../components/HeaderLine';
import { t, init } from '../../../../localization';
import Spacer from '../../../components/spacer';
import MissionForm from '../components/MissionForm';
import MyAppText from '../../../components/MyAppText';

const MissionEditScreen = ({ navigation }) => {
  init();
  const { state, editMission, clearErrorMessage } = useContext(MissionContext);
  const uavContex = useContext(UavContext);

  const _id = navigation.getParam('_id');

  const mission = state.missions.docs.find((m) => m._id === _id);

  const initialValues = {
    _id: mission._id,
    missionName: mission.missionName,
    pilot: mission.pilot,
    uav: mission.uav,
    gps: mission.gps,
    missionStart: mission.missionStart,
    missionEnd: mission.missionEnd,
    usedBatteries: mission.usedBatteries,
    tmp: mission.tmp,
    wind: mission.tmp,
    desc: mission.desc,
  };

  return (
    <ScrollView>
      <Container>
        <NavigationEvents onWillFocus={uavContex.fetchUavs} />
        <MissionForm
          initialValues={initialValues}
          onSubmit={editMission}
          buttonText={<MyAppText>{t('editMission')}</MyAppText>}
          uavs={uavContex.state ? uavContex.state.uavs : null}
          missionEdit={true}
        />
      </Container>
    </ScrollView>
  );
};

MissionEditScreen.navigationOptions = {
  title: 'Edit Mission',
};

const styles = StyleSheet.create({});

export default MissionEditScreen;
