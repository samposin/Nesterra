import {StyleSheet, View, LogBox, ScrollView} from 'react-native';
import React from 'react';
LogBox.ignoreLogs(['Require cycle: node_modules']);

import {
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryChart,
  Background,
} from 'victory-native';
const data = [
  {quarter: 1, earnings: 100},
  {quarter: 2, earnings: 200},
  {quarter: 3, earnings: 300},
  {quarter: 4, earnings: 400},
  {quarter: 5, earnings: 500},
  {quarter: 6, earnings: 1},
  {quarter: 7, earnings: 3},
  {quarter: 8, earnings: 200},
  {quarter: 9, earnings: 100},
  {quarter: 10, earnings: 300},
  {quarter: 11, earnings: 2000},
  {quarter: 12, earnings: 2000},
  {quarter: 13, earnings: 2000},
  {quarter: 14, earnings: 1000},
  {quarter: 15, earnings: 2000},
  {quarter: 16, earnings: 2000},
  {quarter: 17, earnings: 2000},
  {quarter: 18, earnings: 2000},
  {quarter: 19, earnings: 2000},
  {quarter: 20, earnings: 2000},
  {quarter: 21, earnings: 2000},
  {quarter: 22, earnings: 2000},
  {quarter: 23, earnings: 2000},
  {quarter: 24, earnings: 2000},
  {quarter: 25, earnings: 2000},
  {quarter: 26, earnings: 2000},
  {quarter: 27, earnings: 2000},
  {quarter: 28, earnings: 2000},
  {quarter: 29, earnings: 2000},
  {quarter: 30, earnings: 2000},
  {quarter: 31, earnings: 2000},
  {quarter: 32, earnings: 2000},
  {quarter: 33, earnings: 2000},
  {quarter: 34, earnings: 2000},
  {quarter: 35, earnings: 2000},
  {quarter: 36, earnings: 2000},
  {quarter: 37, earnings: 2000},
  {quarter: 38, earnings: 2000},
  {quarter: 39, earnings: 2000},
  {quarter: 40, earnings: 2000},
  {quarter: 41, earnings: 2000},
  {quarter: 42, earnings: 2000},
  {quarter: 43, earnings: 2000},
  {quarter: 44, earnings: 2000},
  {quarter: 45, earnings: 2000},
  {quarter: 46, earnings: 2000},
  {quarter: 47, earnings: 2000},
  {quarter: 48, earnings: 2000},
  {quarter: 49, earnings: 2000},
  {quarter: 50, earnings: 2000},
];
const ChartBarView = () => {
  return (
    <>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 1200,

            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <VictoryChart width={350} height={1200}>
            <VictoryAxis
              // tickValues specifies both the number of ticks and where
              // they are placed on the axis
              // dependentAxis

              style={{
                axis: {stroke: 'transparent'},
                ticks: {stroke: 'transparent'},
                tickLabels: {
                  fontSize: 15,
                  padding: 5,
                  width: 0,
                  height: 0,
                },
              }}
              tickValues={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
              ]}
              // tickFormat={['Yes', 'No', 'Probably', 'Never']}
            />
            <VictoryBar
              barWidth={({index}) => 12}
              domain={{x: [0, 3]}}
              horizontal
              style={{
                data: {fill: '#006067'},
              }}
              labels={({datum}) => `${datum._y}`}
              data={data}
              x="quarter"
              y="earnings"
            />
          </VictoryChart>
        </View>
      </ScrollView>
      {/* <View
        style={{
          width: '100%',
          height: 260,
          backgroundColor: 'yellowgreen',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <VictoryBar
          horizontal
          data={data}
          animate={{
            duration: 2000,
            onLoad: {duration: 1000},
          }}
          barWidth={({index}) => 18}
          // style={{
          //   labels: {fontSize: ({text}) => (text.length > 10 ? 20 : 30)},
          //   parent: {border: '1px solid #000'},
          // }}
          domainPadding={{x: 30, y: 5}}
          style={{data: {fill: '#c43a31'}}}
          // data accessor for x values
          x="quarter"
          // data accessor for y values
          y="earnings"
          labels={({datum}) => `${datum._y}`}
        />
      </View> */}
      <View style={{height: 50}}></View>
    </>
  );
};

export default ChartBarView;

const styles = StyleSheet.create({});
