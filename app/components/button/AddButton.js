import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react';

const AddButton = ({position, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: 65,
        height: 28,
        backgroundColor: '#33c759',
        borderRadius: 15,
        position: 'absolute',
        right: 10,
        bottom: position,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <AntDesign name="plus" size={20} color="white" />
      <Text style={{color: 'white', marginLeft: 5}}>Add</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
