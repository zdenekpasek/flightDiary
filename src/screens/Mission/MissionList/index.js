import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import HeaderLine from '../../../components/HeaderLine';
import Spacer from '../../../components/spacer';
import MyAppText from '../../../components/MyAppText';

const MissionListScreen = ({ navigation }) => {
  init();
  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <Header customStyle={{ flex: 1 }} title={t('missionList')} />
        <Button
          onPress={() => navigation.navigate('MissionCreate')}
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

      <Spacer />
    </Container>
  );
};

const styles = StyleSheet.create({});

MissionListScreen.navigationOptions = {
  headerShown: false,
  title: 'Missions',
};

export default MissionListScreen;
