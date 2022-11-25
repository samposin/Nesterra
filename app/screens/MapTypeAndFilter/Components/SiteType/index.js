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

import {connect, useSelector} from 'react-redux';
import {getlist, is_selected, select_all} from '../../../../actions/selectList';
import SelectAll from '../../../filtter/SelectAll';
import CheckBoxComponet from '../../../../components/checkBox';
import {useNavigation} from '@react-navigation/native';

const data = [
  {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
  {id: 1, txt: 'Office', name: 'Office', isChecked: false},
  {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
  {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
  {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
  {id: 5, txt: 'Other', name: 'Other', isChecked: false},
];
const SiteType = ({getlist, is_selected, select_all}) => {
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
              width: '100%',
              height: '100%',

              justifyContent: 'center',
            }}>
            <Heading size="sm" style={{color: 'black', marginLeft: 20}}>
              Filters
            </Heading>
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
            <Text style={{color: 'black', marginLeft: 8}}>Setected (0)</Text>
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

export default connect(null, {getlist, is_selected, select_all})(SiteType);

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
