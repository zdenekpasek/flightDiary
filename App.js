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
import UAVEditScreen from './src/screens/UAV/UAVEdit';
import MissionListScreen from './src/screens/Mission/MissionList';
import MissionDetailScreen from './src/screens/Mission/MissionDetail';
import MissionCreateScreen from './src/screens/Mission/MissionCreate';
import AuthScreen from './src/screens/AuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as UavProvider } from './src/context/UavContext';
import { Provider as UserProvider } from './src/context/UserContext';
import { Provider as MissionProvider } from './src/context/MissionContext';
import { Provider as WeatherProvider } from './src/context/WeatherContext';

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
  UAVEdit: UAVEditScreen,
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
          <UserProvider>
            <MissionProvider>
              <WeatherProvider>
                <App ref={(navigator) => setNavigator(navigator)} />
              </WeatherProvider>
            </MissionProvider>
          </UserProvider>
          <FlashMessage position="top" />
        </UavProvider>
      </AuthProvider>
    </Suspense>
  );
};
