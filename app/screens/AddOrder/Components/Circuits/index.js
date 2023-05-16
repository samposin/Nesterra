import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CircleView,
  CircleView1,
  CircleView2,
  CircleViewCircle,
  ResetView,
} from '../CircleView';

import InputTypeView1 from '../InputTypeView/InputTypeView1';
import {serviceType} from '../../../../utils/addOrders';
import {Input} from 'react-native-paper';
import {InputViewWithIcon, InputViewWithOutIcon} from '../InputViewWithIcon';
import InputView from '../InputView';
import One from './Components/One';

const Circuits = () => {
  const [buttonType, setButtontype] = React.useState('one');
  const ranDerView = () => {
    switch (true) {
      case buttonType === 'one':
        return <One />;

      case buttonType === 'two':
        return <Devices />;
      case buttonType === 'three':
        return <Equinix />;
    }
  };
  const clickButton = text => {
    setButtontype(text);
  };
  const [text, setText] = React.useState('');
  return (
    <>
      <View style={{flex: 1}}>
        <View style={styles.stepView}>
          <View style={styles.stepViewIner}>
            <CircleView title="1" onPress={() => {}} />
            <CircleView1 />

            <CircleViewCircle title="2" />
            <CircleView1 />
            <CircleViewCircle title="3" />
            <CircleView1 />
            <CircleViewCircle title="4" />
          </View>
        </View>
      </View>
      {ranDerView()}
    </>
  );
};

export default Circuits;

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
  itemWraper: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  item: {
    width: '48%',
    height: 45,
  },
  item1: {
    width: '48%',
    height: 40,
  },
  DateView: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#727272',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  endbutton: {
    height: 50,
    width: '100%',
    backgroundColor: '#fbfaf8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    // position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
  },
});
