import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const EndData = ({status, loc, cer, eng}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 30,
          backgroundColor: '#f2f2f7',
          flexDirection: 'row',
          justifyContent: 'space-around',
          borderBottomColor: '#bdbdc3',
          borderBottomWidth: 0.5,
        }}>
        <View
          style={{
            width: '24%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={{color: 'black', marginLeft: 10, fontSize: 13}}>
            {status}
          </Text>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={{color: 'black', marginLeft: 3, fontSize: 12}}>
            {loc}
          </Text>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={{color: 'black', marginLeft: 3, fontSize: 12}}>
            {eng}
          </Text>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Text style={{color: 'black', marginLeft: 3, fontSize: 12}}>
            {cer}
          </Text>
        </View>
      </View>
    </>
  );
};

export default EndData;

const styles = StyleSheet.create({});
