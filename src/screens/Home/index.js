import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import Container from '../../components/Container';
import Header from '../../components/Header';
import MyAppText from '../../components/MyAppText';

const HomeScreen = () => {
  return (
    <Container>
      <Header title="Home" />
      <Text>This is default font</Text>
      <MyAppText fontSize={22} fontWeight="bold">
        <Text>This is custom font</Text>
      </MyAppText>
    </Container>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
