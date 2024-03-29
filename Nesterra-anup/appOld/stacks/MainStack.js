import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, useColorScheme} from 'react-native';

import React from 'react';
import CircuitInventory from '../screens/CircuitInventory/index.js';
import CircuitsDetails from '../screens/CircuitsDetails/index.js';
import DevicesDetails from '../screens/DevicesDetails/index.js';

import DevicesInventory from '../screens/DevicesInventory/index.js';
import Login from '../screens/Login/index.js';
import OtpReceive from '../screens/OtpReceive';
import OrderDetails from '../screens/OrderDetails.js';
import Profile from '../screens/profile';

import TabNaV from './Tab';
import AllDevice from '../screens/AllDevice/index.js';
import AllDevicesDetails from '../screens/AllDevice/AllDevicesDetails.js';
import Circuits from '../screens/circuits/index.js';
import BackGroundCorsoul from '../screens/BackGroundCorsoul/index.js';
import Stats from '../screens/stats';
import VoiceToText from '../screens/Voice';

<<<<<<< HEAD:Nesterra-anup/appOld/stacks/MainStack.js
const Stack = createNativeStackNavigator();

const MainStack = () => {
=======
import {useDispatch, useSelector} from 'react-redux';
import {ATM_ID, BRANCH_ID} from '../actions/actionType/ExploreSearch/index.js';
import MapTypeAndFilter from '../screens/MapTypeAndFilter';
import Mtest from '../screens/Mtest/index.js';
import Menu from './../screens/Menu/index';
import Legal from './../screens/Legal/index';

import AppearanceScreen from './../screens/Appearance/index';
import HelpDesk from '../screens/HelpDesk/index.js';
import Saved from './../screens/saved/index';
import AddOrder from './../screens/AddOrder/index';
import Settings from '../screens/Settings/index.js';
import About from '../screens/About/index.js';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  const getBranchId = () => {
    dispatch({
      type: BRANCH_ID,
    });
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: ATM_ID,
    });
    getBranchId();
    // setTimeout(() => {

    // }, 1000);
    // setTimeout(() => {

    // }, 1200);
  }, []);
  const scheme = useColorScheme();
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/stacks/MainStack.js
  return (
    <NavigationContainer
      theme={appearanceType === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="TabNaV" component={TabNaV} />

        <Stack.Screen name="Stats" component={Stats} />
        <Stack.Screen name="OtpReceive" component={OtpReceive} />
        <Stack.Screen name="AllDevice" component={AllDevice} />
        <Stack.Screen name="Circuits" component={Circuits} />
        <Stack.Screen name="AllDevicesDetails" component={AllDevicesDetails} />
        {/* <Stack.Screen name="Login" component={Login} /> */}
        <Stack.Screen name="OrderDetails" component={OrderDetails} />
        {/* <Stack.Screen name="CircuitInventory" component={CircuitInventory} />
        <Stack.Screen name="DevicesInventory" component={DevicesInventory} /> */}
        <Stack.Screen name="DevicesDetails" component={DevicesDetails} />
        <Stack.Screen name="CircuitsDetails" component={CircuitsDetails} />
        <Stack.Screen name="BackGroundCorsoul" component={BackGroundCorsoul} />
        <Stack.Screen name="VoiceToText" component={VoiceToText} />
<<<<<<< HEAD:Nesterra-anup/appOld/stacks/MainStack.js
=======
        <Stack.Screen name="MapTypeAndFilter" component={MapTypeAndFilter} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="MenuSetting" component={MenuSetting} />
        <Stack.Screen name="StreetViewScreen" component={StreetViewScreen} />
        {/* <Stack.Screen name="Menu" component={Menu} /> */}
        <Stack.Screen name="Appearance" component={AppearanceScreen} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="About" component={About} />

        <Stack.Screen name="HelpDesk" component={HelpDesk} />
        <Stack.Screen name="Legal" component={Legal} />
        <Stack.Screen name="Saved" component={Saved} />
        <Stack.Screen name="AddOrder" component={AddOrder} />
        <Stack.Screen name="Profile" component={Profile} />
>>>>>>> 7605d47dd02e5e1a0e2e15aa3e171353bb2b0f18:app/stacks/MainStack.js
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
