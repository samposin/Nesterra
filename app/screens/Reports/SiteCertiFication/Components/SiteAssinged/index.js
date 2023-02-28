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
  {quarter: 1, earnings: 5008},
  {quarter: 2, earnings: 4726},
  {quarter: 3, earnings: 2231},
  {quarter: 4, earnings: 1321},
  {quarter: 5, earnings: 608},
];
const SiteAssinged = () => {
  const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);
  const {SiteCirtificaionOne} = useSelector(state => state.SiteAnlysis);
  const {SiteCirtificaionTwo} = useSelector(state => state.SiteAnlysis);
  const {SiteCirtificaionFour} = useSelector(state => state.SiteAnlysis);

  // console.log(SiteCirtificaionOne, 'pp');
  // console.log(SiteAnlysis);

  return (
    <>
      {/* ========================== */}
      <Text style={styles.titleText}>Site Assigned</Text>

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
            data: {fill: '#017f01', width: 25},
          }}
          animate={{duration: 100}}
          horizontal
          data={SiteCirtificaionOne}
          x="state"
          y="circuits"
          labels={({datum}) => `${datum._y}`}
          labelComponent={
            <VictoryLabel textAnchor="end" dx={-10} style={[{fill: 'white'}]} />
          }
        />
      </VictoryChart>
    </>
  );
};

export default SiteAssinged;

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
  },
});
