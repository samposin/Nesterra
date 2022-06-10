import React from 'react';
import {StyleSheet, View, LogBox} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
LogBox.ignoreLogs(['Require cycle: node_modules/victory']);

import Chart from '../../components/DataCharts';
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
import Details from './Details';

const Stats = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Details />
        <View style={{width: '100%', height: 300}}>
          <Chart
            data={indventory}
            total={indventoryTotal}
            color={indventoryColor}
          />
        </View>

        <View style={{width: '100%', height: 300}}>
          <Chart data={annualData} total={annualTotal} color={annualColor} />
        </View>
        <View style={{width: '100%', height: 300}}>
          <Chart data={circuitData} total={circuitTotal} color={circuitColor} />
        </View>
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
