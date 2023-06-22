import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
SelectAll;
import {Heading} from 'native-base';

const {height, width} = Dimensions.get('screen');

import {warinng} from '../../../../components/helper';
import {
  FILTER_BY_INACTIVE,
  FILTER_BY_ACTIVE,
  FILTER_BY_ALL,
} from './../../../../actions/action.coordinate.type';
import {connect, useSelector, useDispatch} from 'react-redux';
import {getlist, is_selected, select_all} from '../../../../actions/selectList';
import SelectAll from '../../../filtter/SelectAll';
import CheckBoxComponet from '../../../../components/checkBox';
import {useNavigation} from '@react-navigation/native';

const data = [
  {id: 0, txt: '3rd Party', name: '3rd Party', isChecked: false},
  {id: 1, txt: 'citizen Bank', name: 'citizen Bank', isChecked: false},
  {id: 2, txt: 'Equinox', name: 'Equinox', isChecked: false},
  {id: 3, txt: 'FANC', name: 'FANC', isChecked: false},
];
const Genealogy = ({getlist, is_selected, select_all}) => {
  const navigation = useNavigation();
  const list = useSelector(state => state);
  // console.log(JSON.stringify(list.checkList), 'filter site type');
  // console.log(list);
  const [checked1, setChecked] = React.useState(false);

  const setState = () => {
    setChecked(true);
  };
  const handleChangeAll = () => {
    select_all(data);
  };
  const handleChange = id => {
    is_selected(id);
  };

  React.useEffect(() => {
    getlist(data);
  }, []);
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
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Explore');
              }}
              style={{
                width: '45%',
                height: 45,
                backgroundColor: '#007aff',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                // apply();
                navigation.navigate('Explore');
              }}
              style={{
                width: '45%',
                height: 45,
                backgroundColor: '#e0dfe5',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#007aff', fontSize: 18}}>Apply</Text>
            </TouchableOpacity>
          </View>
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
            <SelectAll
              setState={setState}
              handleChangeAll={handleChangeAll}
              checked={list.selectList.checked}
            />
            {list.selectList.list &&
              list.selectList.list.map((item, i) => {
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

export default connect(null, {getlist, is_selected, select_all})(Genealogy);

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
  checkbox: {
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
