import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../../components/Header';
import Container from '../../../components/Container';
import { Context as UavContext } from '../../../context/UavContext';
import HeaderLine from '../../../components/HeaderLine';
import { t, init } from '../../../../localization';
import Spacer from '../../../components/spacer';
import UavForm from '../components/UavForm';
import MyAppText from '../../../components/MyAppText';

const UAVEditScreen = ({ navigation }) => {
  init();
  const { state, editUav, clearErrorMessage } = useContext(UavContext);
  const _id = navigation.getParam('_id');

  const uav = state.uavs.find((u) => u._id === _id);

  const initialValues = {
    _id: uav._id,
    uavName: uav.uavName,
    okNumber: uav.okNumber.toString(),
    weight: uav.weight,
    uav: uav.uav,
    category: uav.category,
  };

  return (
    <ScrollView>
      <Container>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <UavForm
          initialValues={initialValues}
          onSubmit={editUav}
          buttonText={<MyAppText>{t('editUav')}</MyAppText>}
          error={state.errorMessage}
        />
      </Container>
    </ScrollView>
  );
};

UAVEditScreen.navigationOptions = {
  title: 'Edit UAV',
};

const styles = StyleSheet.create({});

export default UAVEditScreen;
