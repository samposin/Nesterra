import React from 'react';
import {StyleSheet, View, Text, LogBox} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
LogBox.ignoreLogs(['Require cycle: node_modules/victory']);

import Chart from '../../components/DataCharts';
import AnnualCircuit from '../../components/DataCharts/AnnualCircuit';
import CircuitChart from '../../components/DataCharts/CircuitChart';

import {
  annualColor,
  annualData,
  annualTotal,
  circuitColor,
  circuitData,
  circuitTotal,
  indventory,
  indventoryColor,
  indventoryTotal,
} from '../../utils/ChartData';
import ChartBarView from './ChartBarView';

import Details from './Details';
import Details2 from './Details2';
import Details3 from './Details3';

const Stats = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{width: '100%', height: 200}}>
          <View
            style={{
              width: '100%',
              height: 70,
              backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 30,
                padding: 5,
                backgroundColor: 'yellow',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Main Page</Text>
            </View>
          </View>
        </View>
        <Details />
        <View style={{width: '100%', height: 280}}>
          <Chart
            data={indventory}
            total={indventoryTotal}
            color={indventoryColor}
          />
        </View>
        <Details2 />

        <View style={{width: '100%', height: 280}}>
          <AnnualCircuit
            data={annualData}
            total={annualTotal}
            color={annualColor}
          />
        </View>
        <Details3 />
        <View style={{width: '100%', height: 250}}>
          <CircuitChart
            data={circuitData}
            total={circuitTotal}
            color={circuitColor}
          />
        </View>
        <ChartBarView />
      </ScrollView>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f5fcff',
  },
});
