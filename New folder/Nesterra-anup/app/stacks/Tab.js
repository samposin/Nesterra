// import React, {useEffect} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import TabButton from '../components/tabButton/TabButton';

import tabButtonImage from '../components/imageLink/tabButtonImage';
import Orders from '../screens/orders';

// import Mtest from '../screens/Mtest';
// import Mtest2 from '../screens/Mtest/Mtest2.js';
// import Login from '../screens/Login';
// import Notification from '../screens/Notification';
// import OtpReceive from '../screens/OtpReceive';
// import Saved from '../screens/saved';
import Assets from '../screens/assets';
// // import Stats from '../screens/stats';
// import Search from '../screens/search';
// import ExploreStack from './ExploreStack';
// import Extra from '../screens/NEW';
// import VoiceScreen from '../screens/VoiceScreen';
// import Chart from './../components/DataCharts/index';
import Menu from '../screens/Menu';
// import {CIRCUIT_ID, SITE_ID} from './../actions/actionType/ExploreSearch/index';
// import {useDispatch, useSelector} from 'react-redux';
import Reports from './../screens/Reports/index';

// const Tab = createBottomTabNavigator();
// const TabNaV = ({navigation}) => {
//   const {appearanceType} = useSelector(state => state.appearanceType);
//   // console.log(appearanceType, 'appearanceType');
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch({
//       type: CIRCUIT_ID,
//     });
//     dispatch({
//       type: SITE_ID,
//     });
//     // setTimeout(() => {

//     // }, 1000);
//     // setTimeout(() => {

//     // }, 1500);
//   }, []);

//   return (
//     <Tab.Navigator
//       screenOptions={{
//         lazy: true,
//         headerShown: false,
//         // tabBarActiveTintColor: 'red',
//         tabBarInactiveTintColor: 'gray',
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           position: 'absolute',
//           backgroundColor: appearanceType == 'dark' ? '#28282b' : 'white',

//           // borderRadius: 50,
//           bottom: 0,
//           left: 0,
//           right: 0,
//           // marginHorizontal: 16,
//           height: 50,
//           paddingVertical: 5,
//         },
//       }}>
//       <Tab.Screen
//         name="ExploreStack"
//         component={ExploreStack}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="Sites"
//                 imagePath={tabButtonImage.imgExlore}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Assets"
//         component={Assets}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="Assets"
//                 imagePath={tabButtonImage.imgAssets}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//         dtg
//       />
//       <Tab.Screen
//         name="Orders"
//         component={Orders}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="Orders"
//                 imagePath={tabButtonImage.imgOrder}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Reports"
//         component={Reports}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="Reports"
//                 imagePath={tabButtonImage.report}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Menu"
//         component={Menu}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="Menu"
//                 imagePath={tabButtonImage.menu}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />

//       {/* <Tab.Screen
//         name="Login"
//         component={Login}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="Login"
//                 imagePath={tabButtonImage.imgStats}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="OtpReceive"
//         component={OtpReceive}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="OtpReceive"
//                 imagePath={tabButtonImage.imgSearch}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />
//       <Tab.Screen
//         name="Notification"
//         component={Notification}
//         options={{
//           tabBarIcon: ({focused}) => {
//             return (
//               <TabButton
//                 name="Notification"
//                 imagePath={tabButtonImage.imgSearch}
//                 focused={focused}
//               />
//             );
//           },
//         }}
//       />
//       */}
//     </Tab.Navigator>
//   );
// };
// export default TabNaV;

import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
explore;
const Tab = createBottomTabNavigator();
import TabButton from '../components/tabButton/TabButton';
import explore from '../screens/explore';
function TabNaV({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        // tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          // backgroundColor: appearanceType == 'dark' ? '#28282b' : 'white',

          // borderRadius: 50,
          bottom: 0,
          left: 0,
          right: 0,
          // marginHorizontal: 16,
          height: 50,
          paddingVertical: 5,
        },
      }}>
      <Tab.Screen
        name="explore"
        component={explore}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Sites"
                imagePath={tabButtonImage.imgExlore}
                focused={focused}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Assets"
        component={Assets}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Assets"
                imagePath={tabButtonImage.imgAssets}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Orders"
                imagePath={tabButtonImage.imgOrder}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Reports"
                imagePath={tabButtonImage.report}
                focused={focused}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <TabButton
                name="Menu"
                imagePath={tabButtonImage.menu}
                focused={focused}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default TabNaV;
