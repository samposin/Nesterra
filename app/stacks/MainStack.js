import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import CircuitInventory from '../screens/CircuitInventory/index.js';
import CircuitsDetails from '../screens/CircuitsDetails/index.js';
import DevicesDetails from '../screens/DevicesDetails/index.js';

import DevicesInventory from '../screens/DevicesInventory/index.js';
import OrderDetails from '../screens/OrderDetails.js';
import Profile from '../screens/profile';

import TabNaV from './Tab';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNaV" component={TabNaV} />
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        {/* <Stack.Screen name="CircuitInventory" component={CircuitInventory} />
        <Stack.Screen name="DevicesInventory" component={DevicesInventory} /> */}
        <Stack.Screen name="DevicesDetails" component={DevicesDetails} />
        <Stack.Screen name="CircuitsDetails" component={CircuitsDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
