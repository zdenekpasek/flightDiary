import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { ScrollView } from 'react-native-gesture-handler';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';
import { Context as MissionContext } from '../../../context/MissionContext';
import MissionInfoCard from './components/MissionInfoCard';
import { t, init } from '../../../../localization';

const MissionDetailScreen = ({ navigation }) => {
  init();
  const [dialogVisible, setDialogVisible] = useState(false);

  const { state, editMission, deleteMission, fetchMissionById } = useContext(
    MissionContext
  );
  const _id = navigation.getParam('_id');
  const edited = navigation.getParam('edited');

  // const mission = state.missions.data.find((m) => m._id === _id);

  useEffect(() => {
    fetchMissionById({ _id });
  }, [edited]);

  if (state.missionById) {
    return (
      <ScrollView>
        <Container>
          <Header
            title={state.missionById.mission.missionName}
            customStyle={{ marginBottom: 5 }}
          />
          <MissionInfoCard mission={state.missionById.mission} />
          <Spacer />
          <View style={{ flexDirection: 'row' }}>
            <ConfirmDialog
              title="Mission"
              message={t('deleteUavQuestion')}
              visible={dialogVisible}
              onTouchOutside={() => setDialogVisible(false)}
              positiveButton={{
                title: t('yes'),
                onPress: () => {
                  deleteMission({ _id });
                  setDialogVisible(false);
                },
              }}
              negativeButton={{
                title: t('no'),
                onPress: () => setDialogVisible(false),
              }}
            />
            <View style={{ flex: 1 }}>
              <Button
                title={t('delete')}
                onPress={() => setDialogVisible(true)}
                buttonStyle={{
                  borderRadius: 10,
                }}
                linearGradientProps={{
                  colors: ['#AE2B2B', 'red'],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
              />
            </View>

            <Spacer />
            <View style={{ flex: 1 }}>
              <Button
                title={t('edit')}
                onPress={() => navigation.navigate('MissionEdit', { _id: _id })}
                buttonStyle={{
                  borderRadius: 10,
                }}
                linearGradientProps={{
                  colors: ['#2A84EC', '#1C63B3'],
                  start: { x: 0, y: 0.5 },
                  end: { x: 1, y: 0.5 },
                }}
              />
            </View>
          </View>
        </Container>
      </ScrollView>
    );
  }
  return (
    <View style={[styles.activityContainer, styles.horizontal]}>
      <ActivityIndicator size="large" color="#0082D5" />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default MissionDetailScreen;
