import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CountView = ({count}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 40,

        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        alignItems: 'center',
      }}>
      <View
        style={{
          width: 100,
          height: '100%',
          borderRadius: 5,
          backgroundColor: '#0078fb',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        }}>
        <Text style={{color: 'white'}}>{count} records</Text>
      </View>
    </View>
  );
};

export default CountView;

const styles = StyleSheet.create({});
