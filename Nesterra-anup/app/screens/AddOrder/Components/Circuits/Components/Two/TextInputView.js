import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-paper';

const TextInputView = ({margin, label, paddingHorizontal}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 34,
        // backgroundColor: 'red',
        marginTop: margin,
        borderRadius: 10,
        paddingHorizontal: paddingHorizontal,
      }}>
      <TextInput
        label={label}
        mode="outlined"
        theme={{
          colors: {
            primary: 'black', // Outline color here
          },
        }}
        style={{
          height: 34,
          width: '100%',
          // alignSelf: 'center',
          // borderColor: 'red',
          // borderWidth: 1,
        }}
      />
    </View>
  );
};

export default TextInputView;

const styles = StyleSheet.create({});
