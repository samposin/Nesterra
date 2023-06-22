import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Button = ({displyCompomnet, title, onPress}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{
          width: 80,
          height: 30,
          borderRadius: 7,
          marginRight: 10,
          backgroundColor:
            appearanceType == 'dark'
              ? displyCompomnet == title
                ? '#007aff'
                : '#28282b'
              : displyCompomnet == title
              ? '#007aff'
              : 'transparent',
          borderWidth: 1,
          borderColor: displyCompomnet == title ? '#007aff' : 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color:
              appearanceType == 'dark'
                ? displyCompomnet == title
                  ? 'white'
                  : 'white'
                : displyCompomnet == title
                ? 'white'
                : 'black',
            fontSize: 16,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  Button: {
    padding: 10,
  },
});
