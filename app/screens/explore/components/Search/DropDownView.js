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
const ButtonView = ({id, setSearchView, seTDropDownShow, title}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setSearchView(id);
        seTDropDownShow(false);
      }}
      style={{
        width: '100%',
        height: 30,
        paddingLeft: 10,

        justifyContent: 'center',
      }}>
      <Text style={{color: 'black', fontWeight: '500'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const DropDownView = ({setSearchView, seTDropDownShow}) => {
  return (
    <View style={styles.rightVies1}>
      <ButtonView
        setSearchView={setSearchView}
        seTDropDownShow={seTDropDownShow}
        id={'SiteId'}
        title="Site ID"
      />
      <ButtonView
        setSearchView={setSearchView}
        seTDropDownShow={seTDropDownShow}
        id={'BranchId'}
        title="Branch ID"
      />
      <ButtonView
        setSearchView={setSearchView}
        seTDropDownShow={seTDropDownShow}
        id={'CircuitId'}
        title="Circuit ID"
      />

      <ButtonView
        setSearchView={setSearchView}
        seTDropDownShow={seTDropDownShow}
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
