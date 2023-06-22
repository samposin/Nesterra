import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.closeView}
      onPress={() => {
        onPress();
      }}>
      <Entypo name="cross" size={20} color="white" />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
