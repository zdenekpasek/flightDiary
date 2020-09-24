import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import MainScreen from './src/screens/MainScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import UAVListScreen from './src/screens/UAV/UAVListScreen';
import UAVDetailScreen from './src/screens/UAV/UAVDetailScreen';
import UAVCreateScreen from './src/screens/UAV/UAVCreateScreen';
import MissionListScreen from './src/screens/Mission/MissionListScreen';
import MissionDetailScreen from './src/screens/Mission/MissionDetailScreen';
import MissionCreateScreen from './src/screens/Mission/MissionCreateScreen';

const missionFlow = createStackNavigator({
  MissionList: MissionListScreen,
  MissionDetail: MissionDetailScreen,
  MissionCreate: MissionCreateScreen,
});

missionFlow.navigationOptions = {
  title: 'Misson',
};

const UAVFlow = createStackNavigator({
  UAVList: UAVListScreen,
  UAVDetail: UAVDetailScreen,
  UAVCreate: UAVCreateScreen,
});

UAVFlow.navigationOptions = {
  title: 'UAV',
};

const switchNavigator = createSwitchNavigator({
  Main: MainScreen,
  loginFlow: createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    missionFlow,
    UAVFlow,
    Settings: SettingsScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return <App />;
};
