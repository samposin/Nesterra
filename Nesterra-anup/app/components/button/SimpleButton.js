import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const SimpleButton = ({title}) => {
  return (
    <View
      style={{
        width: 70,
        height: 25,
        backgroundColor: '#d1e7ff',
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{color: '#007aff'}}> {title}</Text>
    </View>
  );
};

export default SimpleButton;

const styles = StyleSheet.create({});
