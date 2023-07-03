import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {copyText, tostalert} from '../../../../components/helper';
import TextView from '../../../../components/TextView';

const Flatrow = ({title, width}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        borderLeftColor: 'white',

        width: width,
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);
          tostalert(title);
        }}>
        <TextView
          title={title}
          color="black"
          bold={'normal'}
          marginLeft={2}
          size={15}
        />
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
