import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import Spacer from '../../../components/spacer';

const UAVListScreen = ({ navigation }) => {
  return (
    <Container>
      <Header title="UAV list" />
      <Spacer />
      <Button
        onPress={() => navigation.navigate('UAVCreate')}
        title="Create UAV"
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

UAVListScreen.navigationOptions = {
  headerShown: false,
};

export default UAVListScreen;
