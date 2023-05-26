import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const TextInputView = ({margin}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 40,
        // backgroundColor: 'red',
        paddingHorizontal: 27,
        marginTop: margin,
      }}>
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
          // borderColor: 'red',
          // borderWidth: 1,
        }}
      />
    </View>
  );
};

export default TextInputView;

const styles = StyleSheet.create({});
