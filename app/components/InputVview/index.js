import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const InputVview = () => {
  return (
    <TextInput
      label="Email *"
      mode="outlined"
      theme={{
        colors: {
          primary: 'black', // Outline color here
        },
      }}
      style={{
        height: 40,
        width: '100%',
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
      }}
    />
  );
};

export default InputVview;

const styles = StyleSheet.create({});
