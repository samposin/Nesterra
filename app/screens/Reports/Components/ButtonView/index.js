import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ButtonView = ({Title, select, value, onPress}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  return (
    <TouchableOpacity
      style={{
        ...styles.seclectButton,
        backgroundColor:
          appearanceType == 'dark'
            ? select === value
              ? '#007aff'
              : '#28282b'
            : select === value
            ? '#007aff'
            : 'transparent',
        // select === value ? '#007cff' : '#d6d6d8',
      }}
      onPress={() => {
        onPress();
        // setSeleted('assets');
      }}>
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color:
            appearanceType == 'dark'
              ? select === value
                ? 'white'
                : 'white'
              : select === value
              ? 'white'
              : 'black',
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
