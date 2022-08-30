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
const DropDownView = ({setSearchView, seTDropDownShow}) => {
  return (
    <View style={styles.rightVies1}>
      <TouchableOpacity
        onPress={() => {
          setSearchView('Circuit');
          seTDropDownShow(false);
        }}
        style={{
          width: '100%',
          height: 30,
          paddingLeft: 10,

          justifyContent: 'center',
        }}>
        <Text style={{color: 'black', fontWeight: '900'}}>Site ID</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSearchView('Branch');
          seTDropDownShow(false);
        }}
        style={{
          width: '100%',
          height: 30,
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        <Text style={{color: 'black', fontWeight: '900'}}>Branch ID</Text>
      </TouchableOpacity>
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

    borderWidth: 2,
  },
});
