import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import { NavigationEvents, SafeAreaView } from 'react-navigation';
import Card from './components/card';
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
        icon: 'insert-chart',
      },

      {
        title: 'UAVs',
        value: state.stats.totalUavs,
        icon: 'aircraft',
      },
      {
        title: t('flightTime'),
        value: `${state.stats.totalFlightTime} min`,
        icon: 'clock',
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

      {state.stats ? (
        <FlatList
          data={state.stats ? statsData : null}
          keyExtractor={(item) => item.title}
          scrollEnabled={false}
          numColumns={2}
          horizontal={false}
          renderItem={({ item }) => {
            return (
              <StatisticsCard
                title={item.title}
                value={item.value}
                icon={item.icon}
              />
              // <Card item={item} />
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

export default HomeScreen;
