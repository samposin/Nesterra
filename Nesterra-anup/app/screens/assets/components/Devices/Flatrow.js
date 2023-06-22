import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {copyText, tostalert} from '../../../../components/helper';

const Flatrow = ({title, width}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        borderLeftColor: 'white',
        borderLeftWidth: 2,
        width: width,
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);
          tostalert(title);
        }}>
        <Text style={styles.boxText1}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Flatrow;

const styles = StyleSheet.create({
  tableRowColum1: {
    height: '100%',

    justifyContent: 'center',
  },
});
