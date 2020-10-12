import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp2dp,
  heightPercentageToDP as hp2dp,
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import MyAppText from '../../../components/MyAppText';

const CustomButton = ({ title, onPress, buttonGradient }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.touchableContainer}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={buttonGradient}
        style={styles.button}
      >
        <MyAppText
          fontWeight="regular"
          fontSize={21}
          customStyle={styles.buttonText}
        >
          {title}
        </MyAppText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // TODO: resolve shadow bug in web browser
  touchableContainer: {
    alignItems: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOpacity: 0.7,
    elevation: 6,
    shadowRadius: 10,
    shadowOffset: { width: 1, height: 13 },
  },
  button: {
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 20,
    width: wp2dp('50%'),
  },

  buttonText: {
    color: '#F2F2F2',
    textAlign: 'center',
  },
});

export default CustomButton;
