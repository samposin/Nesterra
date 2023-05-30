import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TabView = () => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 70,
          //   backgroundColor: 'blue',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#007aff',
            borderRadius: 7,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 15, color: 'white', marginLeft: 10}}>
            Multiple Voice Lines/Devices
          </Text>
          <View
            style={{
              width: '30%',
              height: '70%',
              //   backgroundColor: 'red',
              borderRadius: 7,
              borderWidth: 1,
              borderColor: '#ffffff',
              marginRight: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 15, color: 'white'}}></Text>
            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>
              Add
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default TabView;

const styles = StyleSheet.create({});
