import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationEvents } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { showMessage } from 'react-native-flash-message';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';
import MissionForm from '../components/MissionForm';
import { Context as MissionContext } from '../../../context/MissionContext';
import { Context as UavContext } from '../../../context/UavContext';

const MissionCreateScreen = () => {
  init();

  const {
    createMission,
    state: { errorMessage },
    clearErrorMessage,
  } = useContext(MissionContext);

  const { state, fetchUavs } = useContext(UavContext);

  return (
    <ScrollView>
      <Container>
        <NavigationEvents onWillFocus={fetchUavs} />

        {errorMessage && errorMessage !== undefined ? (
          <MyAppText
            customStyle={{
              color: 'red',
              alignSelf: 'center',
              paddingBottom: 10,
            }}
          >
            {errorMessage}
          </MyAppText>
        ) : null}

        {state.uavs && !state.uavs.length ? (
          <View>
            <MyAppText
              customStyle={{
                alignSelf: 'center',
                textAlign: 'center',
                justifyContent: 'center',
                color: '#0082D5',
              }}
              fontWeight="bold"
            >
              {t('noUavInMission')}
            </MyAppText>

            <Entypo
              style={{ alignSelf: 'center' }}
              name="aircraft"
              size={30}
              color="#0082D5"
            />
          </View>
        ) : (
          <MissionForm
            buttonText={<MyAppText>{t('addMission')}</MyAppText>}
            onSubmit={createMission}
            uavs={state ? state.uavs : 'uavs'}
            missionEdit={false}
          />
        )}
      </Container>
    </ScrollView>
  );
};

MissionCreateScreen.navigationOptions = {
  title: 'Add new Mission',
};

const styles = StyleSheet.create({});

export default MissionCreateScreen;
