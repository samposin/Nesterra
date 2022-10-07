import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {Heading, VStack} from 'native-base';
import CheckBoxComponet from '../../../../components/checkBox';
const {height, width} = Dimensions.get('screen');
const data = [
  {id: 1, txt: 'Active', isChecked: false},
  {id: 2, txt: 'Inactive', isChecked: false},
];
const Status = () => {
  const handleChange = () => {
    //
  };
  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: height,

          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <View style={styles.header}>
          <View
            style={{
              width: '20%',
              height: '100%',

              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Heading size="sm">Filters</Heading>
          </View>
          <View
            style={{
              width: '80%',
              height: '100%',
            }}></View>
        </View>
        <View style={styles.mainContainer}>
          <View
            style={{
              width: '30%',
              height: '100%',
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: '#ffffff',
            }}>
            {data.map((item, i) => {
              return (
                <CheckBoxComponet
                  key={i}
                  handleChange={handleChange}
                  value={item.isChecked}
                  item={item}
                />
              );
            })}
          </View>
        </View>
      </View>
    </>
  );
};

export default Status;

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  mainContainer: {
    height: height - 70,

    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
});
