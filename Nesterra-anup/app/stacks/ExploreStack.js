import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React, {useEffect} from 'react';
import SearchAddress from '../components/searchAddress';
import Explore from '../screens/explore';
import StartPoint from '../screens/explore/StartPoint';
import DestinationPoint from '../screens/explore/DestinationPoint';
import Filtter from '../screens/filtter';
import Profile from '../screens/profile';
import SettingProfile from '../screens/explore/SettingProfile';
import Legal from './../screens/Legal/index';
import HelpDesk from './../screens/HelpDesk/index';

import {useDispatch} from 'react-redux';
import {
  SITE_ID,
  DEVICE_ID,
  ADDRESS_ID,
} from './../actions/actionType/ExploreSearch/index';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: SITE_ID,
    });
    dispatch({
      type: DEVICE_ID,
    });
    dispatch({
      type: ADDRESS_ID,
    });
    // setTimeout(() => {

    // }, 1000);
    // setTimeout(() => {

    // }, 1500);
    // setTimeout(() => {

    // }, 1700);
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Filtter" component={Filtter} />
      <Stack.Screen name="SearchAddress" component={SearchAddress} />
      <Stack.Screen name="StartPoint" component={StartPoint} />
      <Stack.Screen name="DestinationPoint" component={DestinationPoint} />
      <Stack.Screen name="SettingProfile" component={SettingProfile} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
