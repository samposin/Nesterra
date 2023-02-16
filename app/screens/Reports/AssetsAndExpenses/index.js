// import {StyleSheet, Text, View, ScrollView} from 'react-native';
// import React from 'react';
// import Header from './../../stats/Header';
// import Bullet from './Components/Bullet';
// import AnnualCircuit from './../../../components/DataCharts/AnnualCircuit';
// import Circuit from './../../explore/components/RanderView/Components/Circuit/index';
// import {
//   VictoryBar,
//   VictoryTheme,
//   VictoryAxis,
//   VictoryChart,
//   Background,
//   VictoryGroup,
//   VictoryLine,
//   VictoryLabel,
//   VictoryPie,
// } from 'victory-native';
// import Svg, {Polyline} from 'react-native-svg';
// import ActiveSiteCount from './Components/ActiveSiteCount/index';
// ActiveSiteCount;
// const AssetsAndExpenses = () => {
//   return (
//     <>
//       <View style={styles.unheder}></View>
//       <ScrollView>
//         <View style={styles.heder}>
//           <View style={styles.heder1}>
//             <Text
//               style={{
//                 fontSize: 25,
//                 color: 'black',
//                 marginTop: 30,
//                 marginLeft: 20,
//               }}>
//               Active Site Count
//             </Text>
//             <View style={styles.heder2}>
//               <View style={{...styles.heder3}}>
//                 <ActiveSiteCount />
//               </View>
//               <View style={styles.heder4}>
//                 <View style={styles.heder5}>
//                   <Bullet color="blue" />
//                   <Text style={{marginLeft: 10}}>ATM (2607)</Text>
//                 </View>
//                 <View style={styles.heder6}>
//                   <Bullet color="green" />

//                   <Text style={{marginLeft: 10}}>Branch (1121)</Text>
//                 </View>
//                 <View style={styles.heder7}>
//                   <Bullet color="red" />
//                   <Text style={{marginLeft: 10}}>Office ()</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.heder}>
//           <View style={styles.heder1}>
//             <Text
//               style={{
//                 fontSize: 25,
//                 color: 'black',
//                 marginTop: 30,
//                 marginLeft: 20,
//               }}>
//               Annual Circuit Spend
//             </Text>
//             <View style={styles.heder2}>
//               <View style={styles.heder3}></View>
//               <View style={styles.heder4}>
//                 <View style={styles.heder5}>
//                   <Bullet color="blue" />
//                   <Text style={{marginLeft: 10}}>Data (25.1M)</Text>
//                 </View>
//                 <View style={styles.heder6}>
//                   <Bullet color="green" />

//                   <Text style={{marginLeft: 10}}>Service (10.7M)</Text>
//                 </View>
//                 <View style={styles.heder7}>
//                   <Bullet color="red" />
//                   <Text style={{marginLeft: 10}}>Voice (12.7M)</Text>
//                 </View>
//                 <View style={styles.heder8}>
//                   <Bullet color="yellow" />
//                   <Text style={{marginLeft: 10}}>Wireless (2.2M)</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.heder}>
//           <View style={styles.heder1}>
//             <Text
//               style={{
//                 fontSize: 25,
//                 color: 'black',
//                 marginTop: 30,
//                 marginLeft: 20,
//               }}>
//               Circuit Count
//             </Text>
//             <View style={styles.heder2}>
//               <View style={styles.heder3}></View>
//               <View style={styles.heder4}>
//                 <View style={styles.heder5}>
//                   <Bullet color="blue" />
//                   <Text style={{marginLeft: 10}}>ATM (2607)</Text>
//                 </View>
//                 <View style={styles.heder6}>
//                   <Bullet color="green" />

//                   <Text style={{marginLeft: 10}}>Branch (1121)</Text>
//                 </View>
//                 <View style={styles.heder7}>
//                   <Bullet color="red" />
//                   <Text style={{marginLeft: 10}}>Office ()</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>
//         <View style={{width: '100%', height: 400}}>
//           <VictoryPie
//             width={200}
//             height={200}
//             data={[
//               {x: 1, y: 120},
//               {x: 2, y: 150},
//               {x: 3, y: 75},
//             ]}
//             innerRadius={30}
//             labelRadius={50}
//             style={{labels: {fontSize: 20, fill: 'white'}}}
//           />
//           <VictoryLabel
//             textAnchor="middle"
//             style={{fontSize: 20}}
//             x={200}
//             y={200}
//             text="Pie!"
//           />
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// export default AssetsAndExpenses;

// const styles = StyleSheet.create({
//   unheder: {width: '100%', height: 50},

//   heder: {
//     width: '100%',
//     height: 400,
//     backgroundColor: '#deeaea',
//     borderRadius: 15,
//     marginTop: 30,
//   },

//   heder1: {width: '100%', height: 300},

//   heder2: {
//     width: '100%',
//     height: 200,
//     // backgroundColor: 'green',
//     flexDirection: 'row',
//   },

//   heder3: {
//     width: '60%',
//     height: '100%',
//     backgroundColor: 'white',
//     flexDirection: 'row',
//     marginLeft: 10,
//   },
//   heder4: {
//     width: '40%',
//     height: '100%',
//     // backgroundColor: 'white',
//     // flexDirection: 'row',
//   },
//   heder5: {
//     width: '80%',
//     height: '10%',
//     // backgroundColor: 'white',
//     flexDirection: 'row',
//     // justifyContent: 'space-around',
//     marginLeft: 10,
//   },
//   heder6: {
//     width: '80%',
//     height: '10%',
//     // backgroundColor: 'white',
//     flexDirection: 'row',
//     marginLeft: 10,
//   },
//   heder7: {
//     width: '80%',
//     height: '10%',
//     // backgroundColor: 'white',
//     flexDirection: 'row',
//     // justifyContent: 'space-around',
//     marginLeft: 10,
//   },
//   heder8: {
//     width: '80%',
//     height: '10%',
//     // backgroundColor: 'white',
//     flexDirection: 'row',
//     // justifyContent: 'space-around',
//     marginLeft: 10,
//   },
// });
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Polyline, g} from 'react-native-svg';
import {
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryChart,
  Background,
  VictoryGroup,
  VictoryLine,
  VictoryLabel,
  VictoryPie,
  VictoryTooltip,
} from 'victory-native';
const CustomLabel = ({props}) => {
  console.log(props);

  return (
    <Svg>
      <VictoryLabel {...props} />
      <VictoryTooltip
        {...props}
        x={150}
        y={150}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        flyoutWidth={100}
        flyoutHeight={100}
        flyoutStyle={{fill: 'black'}}
      />
    </Svg>
  );
};
const AssetsAndExpenses = () => {
  const [indexItem, setindexItem] = React.useState(1);
  console.log(indexItem, 'indexItem');
  return (
    <View
      style={{
        width: '100%',
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <VictoryPie
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPressIn: e => {
                console.log('first', e.index);
                return [
                  {
                    target: 'data',
                    mutation: ({props}) => {
                      console.log(props, 'props');
                    },
                  },
                  {
                    target: 'labels',
                    mutation: ({text}) => {
                      setindexItem(text);
                      return text === 'clicked' ? null : {text: 'clicked'};
                    },
                  },
                ];
              },
            },
            onPressOut: () => {
              return [
                {
                  target: 'data',
                  mutation: dataProps => {
                    console.log('item selected is', dataProps);
                    // setindexItem(null);
                    return null;
                  },
                },
              ];
            },
          },
        ]}
        style={{labels: {fill: 'white'}}}
        innerRadius={50}
        labelRadius={70}
        labels={({datum}) => `${datum.y}`}
        data={[
          {x: 1, y: 5},
          {x: 2, y: 4},
          {x: 3, y: 2},
          {x: 4, y: 3},
          {x: 5, y: 1},
        ]}
      />
    </View>
  );
};

export default AssetsAndExpenses;

const styles = StyleSheet.create({});
