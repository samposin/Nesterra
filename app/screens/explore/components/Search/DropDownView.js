import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('screen');

const w1 = width - 50;
const w2 = (w1 / 100) * 30;
const ButtonView = ({id, setSearchView, title}) => {
  // console.log(id);
  return (
    <TouchableOpacity
      onPress={() => {
        setSearchView(title);
      }}
      style={{
        width: '100%',
        height: 30,
        paddingLeft: 10,

        justifyContent: 'center',
      }}>
      <Text style={{color: 'black'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const DropDownView = ({setSearchView}) => {
  return (
    <View style={styles.rightVies1}>
      <ButtonView
        setSearchView={setSearchView}
        id={'Address'}
        title="Address"
      />
      <ButtonView setSearchView={setSearchView} id={'AtmsId'} title="ATM ID" />
      <ButtonView setSearchView={setSearchView} id={'SiteId'} title="Site ID" />
      <ButtonView
        setSearchView={setSearchView}
        id={'BranchId'}
        title="Branch ID"
      />
      <ButtonView
        setSearchView={setSearchView}
        id={'CircuitId'}
        title="Circuit ID"
      />

      <ButtonView
        setSearchView={setSearchView}
        id={'DeviceId'}
        title="Device ID"
      />
    </View>
  );
};

export default DropDownView;

const styles = StyleSheet.create({
  rightVies1: {
    marginTop: 133,

    alignSelf: 'flex-end',
    right: 25,
    zIndex: 100,
    position: 'absolute',
    backgroundColor: 'white',
    width: w2,
    paddingVertical: 10,
    borderColor: '#898989',

    borderWidth: 1,
  },
});
