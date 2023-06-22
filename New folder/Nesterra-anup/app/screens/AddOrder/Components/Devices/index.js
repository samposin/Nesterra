import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CircleView,
  CircleView1,
  CircleView2,
  CircleViewCircle,
  ResetView,
} from '../CircleView';

const Devices = () => {
  return (
    <>
      <View style={styles.stepView}>
        <View style={styles.stepViewIner}>
          <CircleView title="1" />
          <CircleView1 />

          <CircleViewCircle title="2" />
          <CircleView1 />
          <CircleViewCircle title="3" />
          <CircleView1 />
          <CircleViewCircle title="4" />
        </View>
      </View>
      <CircleView2 />
      <ResetView />
    </>
  );
};

export default Devices;

const styles = StyleSheet.create({
  stepView: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    borderTopColor: '#a8a8a8',
    borderTopWidth: 1,
    marginTop: 10,
  },
  stepViewIner: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
});
