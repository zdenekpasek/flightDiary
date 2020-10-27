import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import HeaderLine from '../../../components/HeaderLine';
import MyAppText from '../../../components/MyAppText';
import Spacer from '../../../components/spacer';

const UAVListScreen = ({ navigation }) => {
  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <Header customStyle={{ flex: 1 }} title="UAV list" />
        <Button
          onPress={() => navigation.navigate('UAVCreate')}
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

UAVListScreen.navigationOptions = {
  headerShown: false,
};

export default UAVListScreen;
