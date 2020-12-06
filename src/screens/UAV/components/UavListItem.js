import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { Avatar, ListItem } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import MyAppText from '../../../components/MyAppText';

const UavListItem = ({ item, onPress }) => {
  return (
    <ListItem
      onPress={onPress}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      containerStyle={{ borderRadius: 20, marginBottom: 15 }}
    >
      <Avatar
        rounded
        source={{
          uri:
            'https://images.unsplash.com/photo-1521405924368-64c5b84bec60?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1267&q=80',
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={styles.colorStyle}>
          <MyAppText fontWeight="bold">{item.uavName}</MyAppText>
        </ListItem.Title>
        <View style={{ flexDirection: 'row' }}>
          <ListItem.Subtitle style={styles.colorStyle}>
            <MyAppText fontWeight="light">{item.uav}</MyAppText>
          </ListItem.Subtitle>
        </View>
      </ListItem.Content>
      <ListItem.Chevron color="#374355" />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  colorStyle: {
    color: '#374355',
  },
});

export default UavListItem;
