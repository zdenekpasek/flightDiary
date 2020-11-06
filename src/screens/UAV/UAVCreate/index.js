import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { t, init } from '../../../../localization';
import UavForm from '../components/UavForm';
import Container from '../../../components/Container';
import MyAppText from '../../../components/MyAppText';
import { Context as UavContext } from '../../../context/UavContext';

const UAVCreateScreen = () => {
  init();
  const { state, createUav, clearErrorMessage } = useContext(UavContext);

  // const initialValues = {
  //   uavName: '',
  //   okNumber: '',
  //   weight: '',
  //   uav: '',
  //   category: '',
  // };

  return (
    <ScrollView>
      <Container>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <UavForm
          // initialValues={initialValues}
          onSubmit={createUav}
          buttonText={<MyAppText>{t('addUav')}</MyAppText>}
          error={state.errorMessage}
        />
      </Container>
    </ScrollView>
  );
};

UAVCreateScreen.navigationOptions = {
  title: 'Add new UAV',
};

const styles = StyleSheet.create({});

export default UAVCreateScreen;
