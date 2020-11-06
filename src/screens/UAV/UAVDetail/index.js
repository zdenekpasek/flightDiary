import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Header from '../../../components/Header';
import Container from '../../../components/Container';
import { Context as UavContext } from '../../../context/UavContext';
import HeaderLine from '../../../components/HeaderLine';
import DroneInfoCard from './components/DroneInfoCard';
import Spacer from '../../../components/spacer';

const UAVDetailScreen = ({ navigation }) => {
  const { state } = useContext(UavContext);
  const _id = navigation.getParam('_id');

  const uav = state.uavs.find((u) => u._id === _id);

  return (
    <Container>
      <Header title={uav.uavName} />
      <DroneInfoCard
        uav={uav}
        img="https://images.unsplash.com/photo-1514043454212-14c181f46583?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"
      />
      <Spacer />
      <View style={{ flexDirection: 'column' }}>
        <Button
          title="Edit"
          onPress={() => navigation.navigate('UAVEdit', { _id: _id })}
        />
        <Spacer />
        <Button title="Delete" />
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default UAVDetailScreen;
