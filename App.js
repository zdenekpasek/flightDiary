import React, { Suspense } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FlashMessage from 'react-native-flash-message';
import MainScreen from './src/screens/Main';
import HomeScreen from './src/screens/Home';
import LoginScreen from './src/screens/Login';
import SignupScreen from './src/screens/Signup';
import SettingsScreen from './src/screens/Settings';
import UAVListScreen from './src/screens/UAV/UAVList';
import UAVDetailScreen from './src/screens/UAV/UAVDetail';
import UAVCreateScreen from './src/screens/UAV/UAVCreate';
import MissionListScreen from './src/screens/Mission/MissionList';
import MissionDetailScreen from './src/screens/Mission/MissionDetail';
import MissionCreateScreen from './src/screens/Mission/MissionCreate';
import AuthScreen from './src/screens/AuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as UavProvider } from './src/context/UavContext';
import { setNavigator } from './src/navRef';

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
  LocalAuth: AuthScreen,
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
  return (
    <Suspense fallback="loading...">
      <AuthProvider>
        <UavProvider>
          <App ref={(navigator) => setNavigator(navigator)} />
          <FlashMessage position="top" />
        </UavProvider>
      </AuthProvider>
    </Suspense>
  );
};
