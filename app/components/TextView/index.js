import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {color} from 'react-native-reanimated';

const TextView = ({title, color, size}) => {
  return <Text style={{color: color, fontSize: size}}>{title}</Text>;
};

export default TextView;

const styles = StyleSheet.create({});
