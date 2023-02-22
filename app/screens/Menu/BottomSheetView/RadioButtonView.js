import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';

const RadioButtonView = ({title, colors, onPress, userType}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View style={styles.RadioView}>
        <RadioButton
          color="#3d69ee"
          status={userType === title ? 'checked' : 'unchecked'}
        />
        <Text style={{color: colors}}>{title}</Text>
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
