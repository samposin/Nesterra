import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

import MainCountView from './Components/MainCountView';
import {color} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import ActiveSiteCount from './Components/ActiveSiteCount';
import AnnualCircuitSpend from './Components/AnnualCircuitSpend';
import CirCuitCount from './Components/CircuitCount';
const Overview = () => {
  const {circuitCountPie} = useSelector(state => state.SiteAnlysis);
  // console.log(circuitCountPie);
  return (
    <ScrollView>
      <ActiveSiteCount HeaderText="Active Site Count" />
      <AnnualCircuitSpend HeaderText="Annual Circuit Spend" />
      <CirCuitCount HeaderText="Circuit Count " />
    </ScrollView>
  );
};

export default Overview;

const styles = StyleSheet.create({});
