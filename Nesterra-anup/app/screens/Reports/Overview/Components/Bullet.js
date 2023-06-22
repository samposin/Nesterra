import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Bullet = ({color}) => {
  return (
    <View
      style={{
        width: 15,
        height: 15,
        backgroundColor: color,
      }}></View>
  );
};

export default Bullet;

const styles = StyleSheet.create({});
