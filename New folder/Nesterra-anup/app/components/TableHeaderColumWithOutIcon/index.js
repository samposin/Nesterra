import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const TableHeaderFirstColum = ({title, type, width, onPress, leftBorder}) => {
  return (
    <View
      style={{
        width: width,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderLeftWidth: leftBorder,
        borderLeftColor: 'white',
        alignItems: 'center',
      }}>
      <Text style={{...styles.boxText1, color: 'white'}}>{title}</Text>
    </View>
  );
};

export default TableHeaderFirstColum;

const styles = StyleSheet.create({});
