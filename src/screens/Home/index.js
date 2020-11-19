import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderLine from '../../components/HeaderLine';
import MyAppText from '../../components/MyAppText';
import Spacer from '../../components/spacer';
import StatisticsCard from './components/StatisticsCard';
import UserInfoCard from './components/UserInfoCard';
import { Context as UserContext } from '../../context/UserContext';
import { Context as AuthContext } from '../../context/AuthContext';

const HomeScreen = () => {
  init();

  const { state, fetchUser, fetchStats } = useContext(UserContext);
  let statsData = {};

  const mockData = {
    name: 'Zdeněk Pašek',
    email: 'admin@gmail.com',
    state: 'Czech Republic',
    img:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
  };

  if (state.stats) {
    statsData = [
      {
        title: t('missions'),
        value: state.stats.totalMissions,
      },

      {
        title: t('flightTime'),
        value: `${state.stats.totalFlightTime} min`,
      },

      {
        title: 'UAVs',
        value: state.stats.totalUavs,
      },

      {
        title: t('distance'),
        value: 19999,
      },
    ];
  }

  return (
    <Container>
      <NavigationEvents
        onWillFocus={() => {
          fetchUser();
          fetchStats();
        }}
      />
      <Header title={t('personalInfo')} />
      <HeaderLine />
      <UserInfoCard
        name={state.user ? state.user.name : 'name'}
        email={state.user ? state.user.email : 'email'}
        state={mockData.state}
        img={mockData.img}
      />
      <Spacer />
      <Header title={t('statistics')} />
      <HeaderLine />
      <FlatList
        data={state.stats ? statsData : null}
        keyExtractor={(item) => item.title}
        scrollEnabled={false}
        numColumns={2}
        horizontal={false}
        renderItem={({ item }) => {
          return <StatisticsCard title={item.title} value={item.value} />;
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
