import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';
import { Context as MissionContext } from '../../../context/MissionContext';
import MissionInfoCard from './components/MissionInfoCard';

const MissionDetailScreen = ({ navigation }) => {
  const { state } = useContext(MissionContext);
  const _id = navigation.getParam('_id');

  const mission = state.missions.find((m) => m._id === _id);
  return (
    <Container>
      <Header title={mission.missionName} customStyle={{ marginBottom: 5 }} />
      <MissionInfoCard mission={mission} />
      <Spacer />
      <View style={{ flexDirection: 'column' }}>
        <Button
          title="Edit"
          onPress={() => navigation.navigate('MissionEdit', { _id: _id })}
        />
        <Spacer />
        <Button title="Delete" />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default MissionDetailScreen;
