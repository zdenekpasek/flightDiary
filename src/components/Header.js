import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { Text } from 'react-native-elements';
import MyAppText from './MyAppText';

const Header = ({ title, customStyle }) => {
  return (
    <View style={customStyle}>
      {/* <TextInput editable={false} style={styles.title} value={title} /> */}
      <MyAppText fontSize={28} fontWeight="bold">
        {title}
      </MyAppText>
      {/* <TextInput editable={false} style={styles.title} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 15,
    borderBottomWidth: 2,
    borderColor: 'rgba(52, 52, 52, 0.2)',
  },
});

export default Header;
