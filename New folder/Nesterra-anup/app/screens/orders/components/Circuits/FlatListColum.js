import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {copyText} from '../../../../components/helper';
import {useSelector} from 'react-redux';
import TextView from '../../../../components/TextView';

const FlatListColum = ({item, title, width}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);

  const selectedComponent = item => {
    switch (true) {
      case item === 'In Progress':
        return '#ffffbf';
      case item === 'Initiated':
        return '#ffc8ce';
      case item === 'Cancelled':
        return '#ffc8ce';
      case item === 'Completed':
        return '#c6efcd';
    }
  };
  return (
    <View
      style={{
        ...styles.tableRowColum1,
        width: width,
        justifyContent: 'center',
        borderLeftColor: 'white',
        borderLeftWidth: 1,
        backgroundColor: selectedComponent(item?.Status),
      }}>
      <TouchableOpacity
        onLongPress={() => {
          copyText(title);
          tostalert(title);
        }}>
        <Text style={{color: appearanceType == 'dark' ? 'black' : 'black'}}>
          {' '}
          {title}
        </Text>
        {/* <TextView
          title={title}
          color="black"
          size={15}
          bold={'normal'}
          marginLeft={0}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default FlatListColum;

const styles = StyleSheet.create({});
