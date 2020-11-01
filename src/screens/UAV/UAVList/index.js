import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, Button, ListItem, Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationEvents } from 'react-navigation';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import HeaderLine from '../../../components/HeaderLine';
import UavListItem from '../components/UavListItem';
import { data } from '../../../mock/uavData_mock';
import { Context as UavContext } from '../../../context/UavContext';

const UAVListScreen = ({ navigation }) => {
  init();
  const { state, fetchUavs } = useContext(UavContext);
  return (
    <Container>
      <NavigationEvents onWillFocus={fetchUavs} />
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
        data={state.uavs}
        keyExtractor={(item) => item._id}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <UavListItem
              item={item}
              onPress={() =>
                navigation.navigate('UAVDetail', { _id: item._id })
              }
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
