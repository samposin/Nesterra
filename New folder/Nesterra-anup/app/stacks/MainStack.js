// In App.js in a new project

import React from 'react';
import {View, Text} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNaV from './Tab';

import HelpDesk from '../screens/HelpDesk';

import Legal from './../screens/Legal';
import Settings from '../screens/Settings';

import Contact from './../screens/Contact';
import Profile from './../screens/profile/index';
import Saved from '../screens/saved';
import Stats from './../screens/stats/index1';
import AppearanceScreen from './../screens/Appearance/index';

import AddOrder from './../screens/AddOrder/index';
import About from './../screens/About/index';
import MapTypeAndFilter from './../screens/MapTypeAndFilter/index';
import StreetViewScreen from './../screens/StreetViewScreen';
import {useSelector} from 'react-redux';
const Stack = createNativeStackNavigator();

function MainStack() {
  const {appearanceType} = useSelector(state => state.appearanceType);
  return (
    <NavigationContainer
      theme={appearanceType === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNaV" component={TabNaV} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="HelpDesk" component={HelpDesk} />
        <Stack.Screen name="Legal" component={Legal} />
        <Stack.Screen name="Stats" component={Stats} />

        <Stack.Screen name="AddOrder" component={AddOrder} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Saved" component={Saved} />
        <Stack.Screen name="Appearance" component={AppearanceScreen} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="MapTypeAndFilter" component={MapTypeAndFilter} />
        <Stack.Screen name="StreetViewScreen" component={StreetViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
