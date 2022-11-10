import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InPutView from '../InPutView';
import IconView from '../IconView';

const CircuitID = ({setRander}) => {
  const searchId = data => {
    console.log('first', data);
  };
  const changeRander = () => {
    setRander(true);
  };
  return (
    <>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{width: '80%', height: '100%'}}>
          <InPutView
            placeHolder="Search Circuit  Id"
            onSearch={searchId}
            onFocus={changeRander}
          />
        </View>
        <View style={{width: '20%', height: '100%'}}>
          <IconView />
        </View>
      </View>
    </>
  );
};

export default CircuitID;

const styles = StyleSheet.create({});
