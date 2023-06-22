import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {copyText, tostalert} from '../../../../components/helper';
import TextView from '../../../../components/TextView';

const DataColum = ({title, width}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum2,
        width: width,
        borderLeftColor: 'white',
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);

          tostalert(title);
        }}>
        <TextView
          title={title}
          color="black"
          size={12}
          marginLeft={0}
          bold="normal"
        />
      </TouchableOpacity>
    </View>
  );
};

export default DataColum;

const styles = StyleSheet.create({
  tableRowColum2: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
