import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { t, init } from '../../../localization';
import Container from '../../components/Container';
import Header from '../../components/Header';
import HeaderLine from '../../components/HeaderLine';
import MyAppText from '../../components/MyAppText';
import Spacer from '../../components/spacer';
import StatisticsCard from './components/StatisticsCard';
import UserInfoCard from './components/UserInfoCard';

const HomeScreen = () => {
  init();
  const mockData = {
    name: 'Zdeněk Pašek',
    email: 'admin@gmail.com',
    state: 'Czech Republic',
    img:
      'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
  };

  const data = [
    {
      title: t('missions'),
      value: 10,
    },

    {
      title: t('flightTime'),
      value: 14,
    },

    {
      title: 'UAVs',
      value: 2,
    },

    {
      title: t('distance'),
      value: 19999,
    },
  ];

  return (
    <Container>
      <Header title={t('personalInfo')} />
      <HeaderLine />

      <UserInfoCard
        name={mockData.name}
        email={mockData.email}
        state={mockData.state}
        img={mockData.img}
      />
      <Spacer />
      <Header title={t('statistics')} />

      <FlatList
        data={data}
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
