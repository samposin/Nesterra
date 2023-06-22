import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react';
import TextView from '../TextView';
TextView;
const AddButton = ({position, onPress}) => {
  return (
    <View style={styles.container}>
      {/* */}
      <View style={styles.singleButton}>
        <TextView
          title="My Orders"
          color="white"
          size={12}
          bold="normal"
          marginLeft={0}
        />
      </View>
      <View style={styles.singleButton}>
        <TextView
          title={`15000 My Orders`}
          color="white"
          size={12}
          bold="normal"
          marginLeft={0}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          onPress();
        }}
        style={{...styles.singleButton, backgroundColor: '#7fc781'}}>
        <AntDesign name="plus" size={20} color="white" />
        <Text style={{color: 'white', marginLeft: 5}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 35,
    // backgroundColor: 'red',
    position: 'absolute',
    paddingHorizontal: 15,

    bottom: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  singleButton: {
    width: '28%',
    height: '100%',
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
});
