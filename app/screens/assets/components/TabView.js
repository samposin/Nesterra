import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import {Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');
import Active from './Active';
import Both from './Both';
import Inactive from './Inactive';

const Tab = createMaterialTopTabNavigator();

const TabView = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      backBehavior="none"
      initialRouteName={Active}
      removeClippedSubviews={false}
      animationEnabled={true}
      upperCaseLabel="false"
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'lowercase'},
        tabBarActiveTintColor: '#1b5a90',
        tabBarInactiveTintColor: '#757575',
        tabBarLabelStyle: {fontSize: 13, fontWeight: '700'},
        tabBarStyle: {backgroundColor: '#f5f5f5'},
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: width / 3},
        lazy: true,
        swipeEnabled: true,
        disableSwipe: false,
        tabBarIndicatorStyle: {
          width: width / 3,
          backgroundColor: '#1b5a90',
          height: 2.5,
        },
      }}>
      <Tab.Screen
        name="Active"
        component={Active}
        options={{tabBarLabel: 'Active', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Inactive"
        component={Inactive}
        options={{tabBarLabel: 'Inactive', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Both"
        component={Both}
        options={{tabBarLabel: 'Both', labelStyle: {textTransform: 'none'}}}
      />
    </Tab.Navigator>
  );
};
export default TabView;
