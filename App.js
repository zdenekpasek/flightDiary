import React, { Suspense } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {
  Feather,
  Entypo,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
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
import MissionEditScreen from './src/screens/Mission/MissionEdit';
import AuthScreen from './src/screens/AuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as UavProvider } from './src/context/UavContext';
import { Provider as UserProvider } from './src/context/UserContext';
import { Provider as MissionProvider } from './src/context/MissionContext';
import { Provider as WeatherProvider } from './src/context/WeatherContext';
import { Provider as PdfProvider } from './src/context/PdfContext';

import { setNavigator } from './src/navRef';

const missionFlow = createStackNavigator({
  MissionList: MissionListScreen,
  MissionDetail: MissionDetailScreen,
  MissionCreate: MissionCreateScreen,
  MissionEdit: MissionEditScreen,
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
  mainFlow: createBottomTabNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarLabel: 'Home',
          tabBarIcon: ({ tintColor }) => (
            <Entypo name="home" color={tintColor} size={25} />
          ),
        },
      },

      missionFlow: {
        screen: missionFlow,
        navigationOptions: {
          tabBarLabel: 'Mission',
          tabBarIcon: ({ tintColor }) => (
            <MaterialIcons name="assignment" color={tintColor} size={25} />
          ),
        },
      },

      UAVFlow: {
        screen: UAVFlow,
        navigationOptions: {
          tabBarLabel: 'UAV',
          tabBarIcon: ({ tintColor }) => (
            <Ionicons name="md-airplane" color={tintColor} size={25} />
          ),
        },
      },

      Settings: {
        screen: SettingsScreen,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: ({ tintColor }) => (
            <MaterialCommunityIcons
              name="settings"
              color={tintColor}
              size={25}
            />
          ),
        },
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: 'white',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: '#374355',
        },
      },
    }
  ),
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
                <PdfProvider>
                  <App ref={(navigator) => setNavigator(navigator)} />
                </PdfProvider>
              </WeatherProvider>
            </MissionProvider>
          </UserProvider>
          <FlashMessage position="top" />
        </UavProvider>
      </AuthProvider>
    </Suspense>
  );
};
