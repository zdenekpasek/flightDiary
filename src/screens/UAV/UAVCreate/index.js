import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { t, init } from '../../../../localization';
import AddUavForm from '../components/AddUavForm';
import Container from '../../../components/Container';
import MyAppText from '../../../components/MyAppText';
import { Context as UavContext } from '../../../context/UavContext';
import { ScrollView } from 'react-native-gesture-handler';

const UAVCreateScreen = () => {
  init();
  const { state, createUav, clearErrorMessage } = useContext(UavContext);

  return (
    <ScrollView>
      <Container>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AddUavForm
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
