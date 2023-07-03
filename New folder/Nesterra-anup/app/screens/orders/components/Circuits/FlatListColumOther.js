import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TextView from '../../../../components/TextView';

const FlatListColumOther = ({item, width, title, borderLeftWidth}) => {
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        width: width,
        justifyContent: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: borderLeftWidth,
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);
          tostalert(title);
        }}>
        {/* <Text style={styles.boxText1}>{title}</Text> */}
        <TextView
          title={title}
          color="black"
          size={15}
          bold={'normal'}
          marginLeft={0}
        />
      </TouchableOpacity>
    </View>
  );
};

export default FlatListColumOther;

const styles = StyleSheet.create({});
