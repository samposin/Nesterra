import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import InPutView from '../InPutView';
import IconView from '../IconView/index';

const DeviceId = ({setRander}) => {
  const searchId = data => {
    // console.log('first', data);
  };
  const changeRander = () => {
    setRander(true);
  };
  return (
    <>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{width: '80%', height: '100%'}}>
          <InPutView
            placeHolder="Search Device Id"
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

export default DeviceId;

const styles = StyleSheet.create({});
