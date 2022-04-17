import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import SearchAddress from '../components/searchAddress';
import Explore from '../screens/explore';
import SearchStart from '../screens/explore/SearchStart';
import Destination from '../screens/explore/Destination';
import Filtter from '../screens/filtter';
import Profile from '../screens/profile';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Filtter" component={Filtter} />
      <Stack.Screen name="SearchAddress" component={SearchAddress} />
      <Stack.Screen name="SearchStart" component={SearchStart} />
      <Stack.Screen name="Destination" component={Destination} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
