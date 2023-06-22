import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextView = ({title, value, color}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        height: 25,
        // backgroundColor: 'pink',
      }}>
      <View
        style={{
          width: '40%',
          height: 30,
          //   backgroundColor: 'red',
          alignItems: 'flex-end',
        }}>
        <Text>{title}</Text>
      </View>
      <View
        style={{
          width: '60%',
          height: 30,
          //   backgroundColor: 'blue',
        }}>
        <Text style={{color: color, fontWeight: 'bold'}}>{value}</Text>
      </View>
    </View>
  );
};

export default TextView;

const styles = StyleSheet.create({});
