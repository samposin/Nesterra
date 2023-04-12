import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const CircleView = ({title}) => {
  return (
    <View style={styles.view1}>
      <View
        style={{
          width: 25,
          height: 25,
          borderRadius: 12.5,
          backgroundColor: '#3478f6',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
          {title}
        </Text>
      </View>
    </View>
  );
};

export const CircleView1 = ({}) => {
  return (
    <View style={styles.view2}>
      <View
        style={{
          width: '100%',
          height: 2,
          backgroundColor: '#aaaaaa',
        }}></View>
    </View>
  );
};

export const CircleView2 = ({}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#a8a8a8',
        paddingLeft: 20,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: 'black',
        }}>
        General
      </Text>
    </View>
  );
};
export const ResetView = ({}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        flexDirection: 'row',
        paddingHorizontal: 20,
      }}>
      <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
        <Text>New Orders</Text>
      </View>
      <View style={{width: '50%', height: '100%'}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  view1: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
