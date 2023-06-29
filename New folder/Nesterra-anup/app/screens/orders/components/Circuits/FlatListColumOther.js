import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const FlatListColumOther = ({item, width, title}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        width: width,
        justifyContent: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 1,
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

export default FlatListColumOther;

const styles = StyleSheet.create({});
