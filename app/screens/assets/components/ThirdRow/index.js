import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Button = () => {
  return (
    <View
      style={{
        width: 95,
        height: 40,
        marginRight: 10,
        borderRadius: 10,
        backgroundColor: 'yellowgreen',
      }}></View>
  );
};
const ThirdRow = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        paddingLeft: 10,
        flexDirection: 'row',
      }}>
      <Button />
      <Button />
      <Button />
      <Button />
    </View>
  );
};

export default ThirdRow;

const styles = StyleSheet.create({});
