import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {SEARCH_BY_SITE_ID} from '../../../actions/action.coordinate.type';
import SearchIcon from './SearchIcon';

const CircuitSearch = ({setModalVisible}) => {
  const dispatch = useDispatch();
  const [search, setsearch] = useState('');
  const [iconShow, setIconShow] = useState(false);
  // console.log(iconShow);
  const circuitSearch = text => {
    setsearch(text);
    dispatch({
      type: SEARCH_BY_SITE_ID,
      data: text,
    });
  };
  return (
    <>
      <View
        style={{
          width: '15%',
          height: '100%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome name="search" size={24} color="black" />
      </View>
      <View
        style={{
          width: '70%',
          height: '100%',
        }}>
        <TextInput
          value={search}
          style={{color: 'black'}}
          placeholder="Search Site ID"
          placeholderTextColor="black"
          onChangeText={text => circuitSearch(text)}
        />
      </View>
      <SearchIcon
        setModalVisible={setModalVisible}
        circuitSearch={circuitSearch}
        iconShow={iconShow}
        setIconShow={setIconShow}
      />
    </>
  );
};

export default CircuitSearch;

const styles = StyleSheet.create({});
