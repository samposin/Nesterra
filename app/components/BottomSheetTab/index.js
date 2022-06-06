import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import Circuits from '../../screens/circuits';
import Hours from './Hours';
import Other from './Others';
import Info from './Info';
import Pics from './Pics';

const Tab = createMaterialTopTabNavigator();

const BottomSheetTab = () => {
  return (
    <Tab.Navigator
      tabBarPosition="top"
      backBehavior="none"
      initialRouteName={Circuits}
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
        tabBarItemStyle: {width: 90},
        lazy: true,
        swipeEnabled: true,
        disableSwipe: false,
        tabBarIndicatorStyle: {
          width: 70,
          marginLeft: 10,
          backgroundColor: '#1b5a90',
          height: 2.5,
        },
      }}>
      <Tab.Screen
        name="Info"
        component={Info}
        options={{tabBarLabel: 'Info', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Pics"
        component={Pics}
        options={{tabBarLabel: 'Pics', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Hours"
        component={Hours}
        options={{tabBarLabel: 'Hours', labelStyle: {textTransform: 'none'}}}
      />
      <Tab.Screen
        name="Circuits"
        component={Circuits}
        options={{tabBarLabel: 'Circuits', labelStyle: {textTransform: 'none'}}}
      />

      <Tab.Screen
        name="Other"
        component={Other}
        options={{tabBarLabel: 'Other'}}
      />
    </Tab.Navigator>
  );
};
export default BottomSheetTab;
