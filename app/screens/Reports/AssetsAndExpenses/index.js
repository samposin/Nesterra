import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import MainCountView from './Components/MainCountView';
import {color} from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import ActiveSiteCount from './Components/ActiveSiteCount';

const AssetsAndExpenses = () => {
  const {circuitCountPie} = useSelector(state => state.SiteAnlysis);
  console.log(circuitCountPie);
  return (
    <>
      <ActiveSiteCount HeaderText="Active Site Count" />
    </>
  );
};

export default AssetsAndExpenses;

const styles = StyleSheet.create({});
