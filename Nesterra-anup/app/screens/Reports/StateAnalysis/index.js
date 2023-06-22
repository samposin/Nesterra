import {StyleSheet, Text, View, ScrollView} from 'react-native';
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
import SimpleButton from '../../../components/button/SimpleButton';
import Entypo from 'react-native-vector-icons/Entypo';

export const data = [
  {id: 0, name: 'Score', isActive: false, value: 'Score'},
  {id: 1, name: 'Splits', isActive: false, value: 'Splits'},
  {id: 2, name: 'Rights', isActive: false, value: 'Rights'},
];
const dataOne = [
  {quarter: 1, earnings: 5008},
  {quarter: 2, earnings: 4726},
  {quarter: 3, earnings: 2231},
  {quarter: 4, earnings: 1321},
  {quarter: 5, earnings: 608},
];
const StateAnalysis = () => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);
  const {SiteCirtificaionOne} = useSelector(state => state.SiteAnlysis);
  const {SiteCirtificaionTwo} = useSelector(state => state.SiteAnlysis);
  const {SiteCirtificaionFour} = useSelector(state => state.SiteAnlysis);

  // console.log(SiteCirtificaionOne, 'pp');
  // console.log(SiteAnlysis);

  return (
    <ScrollView>
      {/* ========================== */}
      <View
        style={{
          width: '100%',
          height: 40,
          // backgroundColor: 'pink',
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 10,
          alignItems: 'center',
        }}>
        <Text></Text>
        <View
          style={{
            // width: '20%',
            // height: 33,
            // backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <SimpleButton title="City List" />
          {/* <SimpleButton title="City List" /> */}
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          // backgroundColor: 'green',
          alignItems: 'center',
        }}>
        <Text
          style={{
            ...styles.titleText,
            color: appearanceType == 'dark' ? 'white' : 'black',
          }}>
          Sites (By State)
        </Text>
        <View
          style={{
            width: '25%',
            height: ' 100%',
            backgroundColor: '#d1e7ff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 7,
            marginRight: 7,
          }}>
          <Text style={{marginLeft: 5, color: '#007aff'}}>See Sites</Text>
          <View
            style={{
              width: '25%',
              height: ' 100%',
              // backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Entypo name="location-pin" size={20} color="#007aff" />
          </View>
        </View>
      </View>

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
          // tickValues={SiteCirtificaionOne.map((item, i) => i + 1)}
          tickFormat={SiteCirtificaionOne.map(item => item.state)}
        />

        <VictoryBar
          style={{
            tickLabels: {color: 'red'},
            axisLabel: {fontSize: 5, padding: 30},
            data: {fill: '#017f01', width: 25, tickLabels: {fill: 'red'}},
          }}
          animate={{duration: 100}}
          horizontal
          data={SiteCirtificaionOne}
          x="state"
          y="circuits"
          labels={({datum}) => `${datum._y}`}
          labelComponent={
            <VictoryLabel
              textAnchor="end"
              dx={-10}
              style={[{fill: 'white', color: 'red'}]}
            />
          }
        />
      </VictoryChart>
      <Text
        style={{
          ...styles.titleText,
          color: appearanceType == 'dark' ? 'white' : 'black',
        }}>
        Annual Spend (By State)
      </Text>

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
          // tickValues={SiteCirtificaionOne.map((item, i) => i + 1)}
          tickFormat={SiteCirtificaionTwo.map(item => item.state)}
        />

        <VictoryBar
          style={{
            data: {fill: '#017f01', width: 25},
          }}
          animate={{duration: 100}}
          horizontal
          data={SiteCirtificaionTwo}
          x="state"
          y="monthly_spend"
          labels={({datum}) =>
            `$${parseFloat(Number(datum._y / 1000000).toFixed(1))}`
          }
          labelComponent={
            <VictoryLabel textAnchor="end" dx={-10} style={[{fill: 'white'}]} />
          }
        />
      </VictoryChart>
      <Text
        style={{
          ...styles.titleText,
          color: appearanceType == 'dark' ? 'white' : 'black',
        }}>
        Circuits (By State)
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
    </ScrollView>
  );
};

export default StateAnalysis;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    color: 'black',
    // justifyContent:'center'
  },
});
