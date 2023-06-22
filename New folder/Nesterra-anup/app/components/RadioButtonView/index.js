import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RadioButtonView = ({title, colors, onPress, type}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.RadioView}>
        <RadioButton
          color="#3d69ee"
          status={type === title ? 'checked' : 'unchecked'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default RadioButtonView;

const styles = StyleSheet.create({
  RadioView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
