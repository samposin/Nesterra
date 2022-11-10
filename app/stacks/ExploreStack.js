import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React,{useEffect} from 'react';
import SearchAddress from '../components/searchAddress';
import Explore from '../screens/explore';
import StartPoint from '../screens/explore/StartPoint';
import DestinationPoint from '../screens/explore/DestinationPoint';
import Filtter from '../screens/filtter';
import Profile from '../screens/profile';
import SettingProfile from '../screens/explore/SettingProfile';
import MapTypeAndFilter from '../screens/MapTypeAndFilter';
import { useDispatch } from 'react-redux';
import { SITE_ID } from './../actions/actionType/ExploreSearch/index';

const Stack = createNativeStackNavigator();

const ExploreStack = () => {
  const dispatch=useDispatch()
  useEffect(() => {

    dispatch({
      type:SITE_ID
    })
  }, [])
  
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
      <Stack.Screen name="MapTypeAndFilter" component={MapTypeAndFilter} />
    </Stack.Navigator>
  );
};

export default ExploreStack;
