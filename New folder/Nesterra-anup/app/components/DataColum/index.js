import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import TextView from '../TextView';

const DataColum = ({title, width}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum2,
        width: width,
        borderLeftColor: 'white',
      }}>
      <View>
        <TextView
          title={title}
          color="black"
          size={12}
          marginLeft={0}
          bold="normal"
        />
      </View>
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
