import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Spacer from '../../../components/spacer';

const MissionListScreen = ({ navigation }) => {
  return (
    <Container>
      <Header title="Mission list" />
      <Spacer />
      <Button
        onPress={() => navigation.navigate('MissionCreate')}
        title="Create Mission"
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

MissionListScreen.navigationOptions = {
  headerShown: false,
  title: 'Missions',
};

export default MissionListScreen;
