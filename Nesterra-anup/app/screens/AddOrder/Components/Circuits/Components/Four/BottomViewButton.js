import {StyleSheet, Text, Dimensions, View} from 'react-native';
import React from 'react';
const {height} = Dimensions.get('screen');
const BottomViewButton = () => {
  console.log(height);
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        // backgroundColor: 'yellowgreen',
        marginTop: 70,
        paddingVertical: 12,
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          // backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '30%',
            height: '100%',
            backgroundColor: '#ffffd1',
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#007aff', fontSize: 15, fontWeight: 'bold'}}>
            Safe Draft
          </Text>
        </View>
        <View
          style={{
            width: '30%',
            height: '100%',
            backgroundColor: '#d6f2da',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#007aff', fontSize: 15, fontWeight: 'bold'}}>
            Previous
          </Text>
        </View>

        <View
          style={{
            width: '30%',
            height: '100%',
            backgroundColor: '#d6f2da',
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#007aff', fontSize: 15, fontWeight: 'bold'}}>
            Submit
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BottomViewButton;

const styles = StyleSheet.create({});
