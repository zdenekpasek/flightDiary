import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

const UAVListScreen = ({ navigation }) => {
  return (
    <View>
      <Text h3>UAVListScreen</Text>
      <Button
        onPress={() => navigation.navigate('UAVCreate')}
        title="Create UAV"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default UAVListScreen;
