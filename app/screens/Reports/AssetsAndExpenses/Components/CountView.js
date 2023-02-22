import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CountView = ({color, title}) => {
  return (
    <View style={styles.header1}>
      <View style={{width: 10, height: 10, backgroundColor: color}}></View>
      <Text style={styles.header1Text}>{title}</Text>
    </View>
  );
};

export default CountView;

const styles = StyleSheet.create({
  header1: {
    width: '100%',
    height: 20,
    // backgroundColor: 'red',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  header1Text: {
    marginLeft: 10,
    alignItems: 'center',
    fontSize: 12,
    color: 'black',
    //color: 'black',
  },
});
