import React, { useContext, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import HeaderLine from '../../../components/HeaderLine';
import MissionListItem from '../components/MissionListItem';
import { data } from '../../../mock/missionData_mock';
import { Context as MissionContext } from '../../../context/MissionContext';
import { Context as UavContext } from '../../../context/UavContext';
import { Context as PdfContext } from '../../../context/PdfContext';
import MyAppText from '../../../components/MyAppText';

const MissionListScreen = ({ navigation }) => {
  init();
  const { state, fetchMissions } = useContext(MissionContext);
  const [dialogVisible, setDialogVisible] = useState(false);

  const { createPdf } = useContext(PdfContext);

  return (
    <Container>
      <NavigationEvents onWillFocus={fetchMissions} />
      <View style={{ flexDirection: 'row' }}>
        <ConfirmDialog
          title="PDF"
          message={t('createPdfQuestion')}
          visible={dialogVisible}
          onTouchOutside={() => setDialogVisible(false)}
          positiveButton={{
            title: t('yes'),
            onPress: () => {
              createPdf();
              setDialogVisible(false);
            },
          }}
          negativeButton={{
            title: t('no'),
            onPress: () => setDialogVisible(false),
          }}
        />
        <Header customStyle={{ flex: 1 }} title={t('missionList')} />
        <Button
          onPress={() => setDialogVisible(true)}
          type="clear"
          icon={<FontAwesome name="share-square" size={30} color="#374355" />}
        />

        <Button
          onPress={() => navigation.navigate('MissionCreate')}
          type="clear"
          icon={<FontAwesome name="plus" size={30} color="#374355" />}
        />
      </View>

      <HeaderLine />

      {state.missions && state.missions.total === 0 ? (
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
            {t('noMissions')}
          </MyAppText>
        </View>
      ) : null}

      {console.log(state.missions)}
      {state.missions ? (
        <FlatList
          data={state.missions.docs}
          keyExtractor={(item) => item._id}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <MissionListItem
                item={item}
                onPress={() =>
                  navigation.navigate('MissionDetail', { _id: item._id })
                }
              />
            );
          }}
        />
      ) : (
        <View style={[styles.activityContainer, styles.horizontal]}>
          <ActivityIndicator size="large" color="#0082D5" />
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

MissionListScreen.navigationOptions = {
  headerShown: false,
  title: 'Missions',
};

export default MissionListScreen;
