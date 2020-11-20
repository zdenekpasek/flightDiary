import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { ConfirmDialog } from 'react-native-simple-dialogs';
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

  const { state, editMission, deleteMission } = useContext(MissionContext);
  const _id = navigation.getParam('_id');

  const mission = state.missions.find((m) => m._id === _id);
  return (
    <Container>
      <Header title={mission.missionName} customStyle={{ marginBottom: 5 }} />
      <MissionInfoCard mission={mission} />
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
  );
};

const styles = StyleSheet.create({});

export default MissionDetailScreen;
