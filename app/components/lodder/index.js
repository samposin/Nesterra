import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ProgressDialog} from 'react-native-simple-dialogs';

const Lodder = ({lodding}) => {
  // console.log(lodding, 'lodding');
  return (
    <>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ProgressDialog
          visible={lodding}
          message="Please, wait..."
          titleStyle={{color: 'red', textAlign: 'center'}}
          messageStyle={{color: 'green', textAlign: 'center'}}
          contentStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          dialogStyle={{
            borderRadius: 10,
            width: '70%',
            height: 70,
            justifyContent: 'center',
            alignSelf: 'center',
          }}
          activityIndicatorColor="blue"
          activityIndicatorSize="large"
          overlayStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
        />
      </View>
    </>
  );
};

export default Lodder;

const styles = StyleSheet.create({});
