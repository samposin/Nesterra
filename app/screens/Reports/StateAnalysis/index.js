import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryChart,
  Background,
  VictoryGroup,
  VictoryLine,
  VictoryLabel,
} from 'victory-native';

import {useSelector, connect} from 'react-redux';
export const data = [
  {id: 0, name: 'Score', isActive: false, value: 'Score'},
  {id: 1, name: 'Splits', isActive: false, value: 'Splits'},
  {id: 2, name: 'Rights', isActive: false, value: 'Rights'},
];
const dataOne = [
  {quarter: 1, earnings: 100},
  {quarter: 2, earnings: 200},
  {quarter: 3, earnings: 300},
  {quarter: 4, earnings: 400},
  {quarter: 5, earnings: 500},
  {quarter: 6, earnings: 500},
];
const StateAnalysis = () => {
  const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);

  console.log(SiteAnlysis);

  return (
    <>
      {/* ========================== */}
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          marginLeft: 10,
          marginTop: 10,
        }}>
        Site (By State)
      </Text>
      {/* ========================== */}
      <VictoryChart width={300} height={300}>
        <VictoryAxis
          style={{
            axis: {stroke: 'transparent'},

            tickLabels: {
              fontSize: 15,

              width: 0,
              height: 0,
            },
          }}
          tickValues={[1, 2, 3, 4, 5, 6]}
          tickFormat={['one', 'two', 'three', 'four', 'five', 'six']}
        />
        {/* <VictoryGroup
          horizontal
          offset={18}
          style={{data: {width: 16}}}
          colorScale={['#12626C', '#0F9764']}> */}
        <VictoryBar
          style={{
            data: {fill: '#017f01', width: 25},
          }}
          animate={{duration: 100}}
          horizontal
          data={dataOne}
          x="quarter"
          y="earnings"
          labels={({datum}) => `${datum._y}`}
          labelComponent={
            <VictoryLabel textAnchor="end" dx={-10} style={[{fill: 'white'}]} />
          }
        />
        {/* <VictoryBar
            data={volume2}
            x="x"
            y="y"
            labels={({datum}) => `${datum._y}`}
          /> */}
        {/* </VictoryGroup> */}
      </VictoryChart>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          marginLeft: 10,
          marginTop: 10,
        }}>
        Monthly Spend (By State)
      </Text>
      {/* ========================== */}
      <VictoryChart width={300} height={300}>
        <VictoryAxis
          style={{
            axis: {stroke: 'transparent'},

            tickLabels: {
              fontSize: 15,

              width: 0,
              height: 0,
            },
          }}
          tickValues={[1, 2, 3, 4, 5, 6]}
          tickFormat={['one', 'two', 'three', 'four', 'five', 'six']}
        />
        {/* <VictoryGroup
          horizontal
          offset={18}
          style={{data: {width: 16}}}
          colorScale={['#12626C', '#0F9764']}> */}
        <VictoryBar
          style={{
            data: {fill: '#017f01', width: 25},
          }}
          animate={{duration: 100}}
          horizontal
          data={dataOne}
          x="quarter"
          y="earnings"
          labels={({datum}) => `${datum._y}`}
          labelComponent={
            <VictoryLabel textAnchor="end" dx={-10} style={[{fill: 'white'}]} />
          }
        />
        {/* <VictoryBar
            data={volume2}
            x="x"
            y="y"
            labels={({datum}) => `${datum._y}`}
          /> */}
        {/* </VictoryGroup> */}
      </VictoryChart>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '700',
          marginLeft: 10,
          marginTop: 10,
        }}>
        Circiits (By State)
      </Text>
      {/* ========================== */}
      <VictoryChart width={300} height={300}>
        <VictoryAxis
          style={{
            axis: {stroke: 'transparent'},

            tickLabels: {
              fontSize: 15,

              width: 0,
              height: 0,
            },
          }}
          tickValues={[1, 2, 3, 4, 5, 6]}
          tickFormat={['one', 'two', 'three', 'four', 'five', 'six']}
        />
        {/* <VictoryGroup
          horizontal
          offset={18}
          style={{data: {width: 16}}}
          colorScale={['#12626C', '#0F9764']}> */}
        <VictoryBar
          style={{
            data: {fill: '#017f01', width: 25},
          }}
          animate={{duration: 100}}
          horizontal
          data={dataOne}
          x="quarter"
          y="earnings"
          labels={({datum}) => `${datum._y}`}
          labelComponent={
            <VictoryLabel textAnchor="end" dx={-10} style={[{fill: 'white'}]} />
          }
        />
        {/* <VictoryBar
            data={volume2}
            x="x"
            y="y"
            labels={({datum}) => `${datum._y}`}
          /> */}
        {/* </VictoryGroup> */}
      </VictoryChart>
    </>
  );
};

export default StateAnalysis;

const styles = StyleSheet.create({});
