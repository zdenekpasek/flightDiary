import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-elements';

const Header = ({ title }) => {
  return (
    <View style={{}}>
      <TextInput editable={false} style={styles.title} value={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
  },
});

export default Header;
