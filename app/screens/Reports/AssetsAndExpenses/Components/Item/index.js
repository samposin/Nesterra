import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const Item = ({item1, color1}) => {
  return (
    <TouchableOpacity
      style={{
        width: '17%',
        height: '100%',
        justifyContent: 'center',
        paddingLeft: moderateScale(5),
        borderStartColor: 'red',

        borderStartWidth: 0.5,
      }}>
      <Text style={{color: 'black', fontSize: moderateScale(12)}}>{item1}</Text>
    </TouchableOpacity>
  );
};

export default Item;

const styles = StyleSheet.create({});
