import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

const MissionListScreen = ({ navigation }) => {
  return (
    <View>
      <Text h3>MissionListScreen</Text>
      <Button
        onPress={() => navigation.navigate('MissionCreate')}
        title="Create Mission"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

MissionListScreen.navigationOptions = {
  title: 'Missions',
};

export default MissionListScreen;
