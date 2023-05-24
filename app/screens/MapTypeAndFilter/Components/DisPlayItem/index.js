import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const DisPlayItem = ({title, setetedView, onPress, count}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={{
        width: '100%',
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          color: setetedView === title ? '#1c7dce' : '#757575',
          fontWeight: 'bold',
        }}>
        {title}
      </Text>

      <View
        style={{
          width: 18,
          height: 18,
          backgroundColor: 'red',
          borderRadius: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: 'white'}}>{count}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default DisPlayItem;

const styles = StyleSheet.create({});
