import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text h3>SignupScreen</Text>
      <Text
        style={{ color: 'blue' }}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account? Log in here.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

export default SignupScreen;
