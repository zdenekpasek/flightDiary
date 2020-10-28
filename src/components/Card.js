import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import MyAppText from './MyAppText';

const Card = ({
  title,
  info,
  height,
  icon,
  onPress,
  customStyle,
  containerStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles(height).container, containerStyle]}>
        <View style={[{ flexDirection: 'row' }, customStyle]}>
          <MyAppText fontWeight="bold" customStyle={styles().textStyle}>
            {title}
          </MyAppText>
          <MyAppText fontWeight="light" customStyle={styles().textStyle}>
            {info}
          </MyAppText>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <Feather name={icon} size={30} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = (height) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
      height,
      borderRadius: 20,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#C8D3DE',
      padding: 20,
    },
    textStyle: {
      marginLeft: 20,
      flex: 1,
    },
  });

export default Card;
