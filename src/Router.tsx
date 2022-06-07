import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import React from 'react';
import Processes from './pages/Processes';
import Profile from './pages/Profile';
import Home from './pages/Home';

const {Navigator, Screen} = createBottomTabNavigator();

const BottomTabBar = ({navigation, state}: any) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title="Início" />
    <BottomNavigationTab title="Processos" />
    <BottomNavigationTab title="Perfil" />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Home" component={Home} />
    <Screen name="Processes" component={Processes} />
    <Screen name="Profile" component={Profile} />
  </Navigator>
);

export const MainRouter = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
