import React from 'react';
import TouchableScale from 'react-native-touchable-scale';
import { Avatar, ListItem } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import MyAppText from '../../../components/MyAppText';

// TODO: Generalize this component
const MissionListItem = ({ item, onPress }) => {
  return (
    <ListItem
      onPress={onPress}
      Component={TouchableScale}
      friction={90}
      tension={100}
      activeScale={0.95}
      containerStyle={{ borderRadius: 20, marginBottom: 15 }}
    >
      <ListItem.Content>
        <ListItem.Title style={styles.colorStyle}>
          <MyAppText fontWeight="bold">{item.name}</MyAppText>
        </ListItem.Title>

        <View style={{ flexDirection: 'row' }}>
          <ListItem.Subtitle style={styles.colorStyle}>
            <MyAppText fontWeight="light">{item.date}</MyAppText>
          </ListItem.Subtitle>

          <ListItem.Subtitle style={[styles.colorStyle, styles.timeStyle]}>
            <MyAppText fontWeight="light">{item.time}</MyAppText>
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
    marginLeft: 15,
  },
  timeStyle: {
    marginLeft: 150,
  },
});

export default MissionListItem;
