import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, ListItem, Avatar } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import TouchableScale from 'react-native-touchable-scale';
import { t, init } from '../../../../localization';
import Container from '../../../components/Container';
import Header from '../../../components/Header';
import HeaderLine from '../../../components/HeaderLine';
import MyAppText from '../../../components/MyAppText';

const UAVListScreen = ({ navigation }) => {
  init();

  const data = [
    {
      name: 'Destroyer',
      uav: 'DJI Mavic Air',
      imgUri:
        'https://images.unsplash.com/photo-1514043454212-14c181f46583?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80',
    },
    {
      name: 'Death Star',
      uav: 'DJI Phantom 4',
      imgUri:
        'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    },
    {
      name: 'Millenium Falcon',
      uav: 'DJI Spark',
      imgUri:
        'https://images.unsplash.com/photo-1495811853829-7f743aca3770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2153&q=80',
    },
  ];

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
            <ListItem
              Component={TouchableScale}
              friction={90}
              tension={100}
              activeScale={0.95}
              containerStyle={{ borderRadius: 20, marginBottom: 15 }}
            >
              <Avatar rounded source={{ uri: item.imgUri }} />
              <ListItem.Content>
                <ListItem.Title style={styles.colorStyle}>
                  <MyAppText fontWeight="bold">{item.name}</MyAppText>
                </ListItem.Title>
                <View style={{ flexDirection: 'row' }}>
                  <ListItem.Subtitle style={styles.colorStyle}>
                    <MyAppText fontWeight="light">{item.uav}</MyAppText>
                  </ListItem.Subtitle>
                  <ListItem.Subtitle>
                    <MyAppText fontWeight="light">36min</MyAppText>
                  </ListItem.Subtitle>
                </View>
              </ListItem.Content>
              <ListItem.Chevron color="#374355" />
            </ListItem>
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  colorStyle: {
    color: '#374355',
  },
});

UAVListScreen.navigationOptions = {
  headerShown: false,
};

export default UAVListScreen;
