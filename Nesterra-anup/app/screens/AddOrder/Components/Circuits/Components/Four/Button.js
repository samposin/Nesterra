import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Button = ({title, buttonType, onPress}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        ...styles.button1,
        backgroundColor:
          appearanceType == 'dark'
            ? title == buttonType
              ? '#007aff'
              : '#28282b'
            : title == buttonType
            ? 'white'
            : 'transparent',

        // title == buttonType ? '#3173db' : '#e1e1e1',
      }}>
      <Text
        style={{
          //title == buttonType ? 'white' : 'black',
          color:
            appearanceType == 'dark'
              ? title == buttonType
                ? 'white'
                : 'white'
              : title == buttonType
              ? 'black'
              : 'black',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button1: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
