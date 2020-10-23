import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../../localization';
import AddForm from '../../../components/AddForm';
import Container from '../../../components/Container';

const UAVCreateScreen = () => {
  init();
  return (
    <Container>
      <ScrollView>
        <AddForm isAddUAV={true} />
      </ScrollView>
    </Container>
  );
};

UAVCreateScreen.navigationOptions = {
  title: 'Add new UAV',
};

const styles = StyleSheet.create({});

export default UAVCreateScreen;
