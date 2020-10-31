import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { Avatar, ListItem } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import MyAppText from '../../../components/MyAppText';

// TODO: Generalize this component
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
      <Avatar rounded source={{ uri: item.imgUri }} />
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
