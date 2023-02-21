import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import MainCountView from './Components/MainCountView';
import {color} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

const AssetsAndExpenses = () => {
  const {circuitCountPie} = useSelector(state => state.SiteAnlysis);
  return (
    <>
      <MainCountView HeaderText="Active Site Count" />
      <MainCountView HeaderText="Circuit Count" colours="#fef7dd" />
      <MainCountView HeaderText="Annul Circuit Spend " />
    </>
  );
};

export default AssetsAndExpenses;

const styles = StyleSheet.create({});
