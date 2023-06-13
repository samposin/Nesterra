import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react';

const AddButton = ({position, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={styles.container}>
      <AntDesign name="plus" size={20} color="white" />
      <Text style={{color: 'white', marginLeft: 5}}>Add</Text>
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,

    position: 'absolute',

    bottom: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
