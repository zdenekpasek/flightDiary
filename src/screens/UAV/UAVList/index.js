import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, Button, ListItem, Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import HeaderLine from '../../../components/HeaderLine';
import UavListItem from '../components/UavListItem';
import { data } from '../../../mock/uavData_mock';

const UAVListScreen = ({ navigation }) => {
  init();

  return (
    <Container>
      <View style={{ flexDirection: 'row' }}>
        <Header customStyle={{ flex: 1 }} title={t('uavList')} />
        <Button
          onPress={() => navigation.navigate('UAVCreate')}
          type="clear"
          icon={<FontAwesome name="plus" size={30} color="#374355" />}
        />
      </View>
      <HeaderLine />

      <FlatList
        data={data}
        keyExtractor={(item) => item.name}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <UavListItem
              item={item}
              onPress={() => navigation.navigate('UAVDetail')}
            />
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({});

UAVListScreen.navigationOptions = {
  headerShown: false,
};

export default UAVListScreen;
