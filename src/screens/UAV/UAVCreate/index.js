import React, { useContext } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { t, init } from '../../../../localization';
import AddUavForm from '../components/AddUavForm';
import Container from '../../../components/Container';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';
import { Context as UavContext } from '../../../context/UavContext';

const UAVCreateScreen = () => {
  init();
  const { state, createUav, clearErrorMessage } = useContext(UavContext);

  console.log(state.errorMessage);

  return (
    <Container>
      <Spacer />
      <AddUavForm
        onSubmit={createUav}
        buttonText={<MyAppText>{t('addUav')}</MyAppText>}
        error={state.errorMessage}
      />
    </Container>
  );
};

UAVCreateScreen.navigationOptions = {
  title: 'Add new UAV',
};

const styles = StyleSheet.create({});

export default UAVCreateScreen;
