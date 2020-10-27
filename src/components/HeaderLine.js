import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const HeaderLine = () => {
  return (
    <View>
      <TextInput editable={false} style={styles.title} />
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

export default HeaderLine;
