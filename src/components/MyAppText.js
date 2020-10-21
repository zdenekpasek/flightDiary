import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const MyAppText = ({
  children,
  fontWeight,
  fontSize,
  customStyle,
  onPress,
}) => {
  const [loaded] = useFonts({
    Montserrat_light: require('../../assets/fonts/Montserrat-Light.ttf'),
    Montserrat_regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
    Montserrat_medium: require('../../assets/fonts/Montserrat-Medium.ttf'),
    Montserrat_semibold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    Montserrat_bold: require('../../assets/fonts/Montserrat-Bold.ttf'),
    Montserrat_extrabold: require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Text
      style={[styles(fontWeight, fontSize).text, customStyle]}
      onPress={onPress}
    >
      {children}
    </Text>
  );
};

const styles = (fontWeight, fontSize) =>
  StyleSheet.create({
    text: {
      fontFamily: !fontWeight
        ? 'Montserrat_regular'
        : `Montserrat_${fontWeight}`,
      fontSize,
    },
  });

export default MyAppText;
