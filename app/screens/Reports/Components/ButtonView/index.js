import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const ButtonView = ({Title, select, value, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.seclectButton,
        backgroundColor: select === value ? '#007cff' : '#d6d6d8',
      }}
      onPress={() => {
        onPress();
        // setSeleted('assets');
      }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: select === value ? 'white' : 'black',
        }}>
        {Title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonView;

const styles = StyleSheet.create({
  seclectButton: {
    width: '33%',
    height: '100%',
    // backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
