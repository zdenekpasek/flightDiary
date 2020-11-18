import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import HeaderLine from '../../../components/HeaderLine';
import MissionListItem from '../components/MissionListItem';
import { data } from '../../../mock/missionData_mock';
import { Context as MissionContext } from '../../../context/MissionContext';
import { Context as UavContext } from '../../../context/UavContext';
import { Context as PdfContext } from '../../../context/PdfContext';

const MissionListScreen = ({ navigation }) => {
  init();
  const { state, fetchMissions } = useContext(MissionContext);
  const { createPdf } = useContext(PdfContext);

  return (
    <Container>
      <NavigationEvents onWillFocus={fetchMissions} />
      <View style={{ flexDirection: 'row' }}>
        <Header customStyle={{ flex: 1 }} title={t('missionList')} />
        <Button
          onPress={() => createPdf()}
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

      <FlatList
        data={state.missions}
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
    </Container>
  );
};

const styles = StyleSheet.create({});

MissionListScreen.navigationOptions = {
  headerShown: false,
  title: 'Missions',
};

export default MissionListScreen;
