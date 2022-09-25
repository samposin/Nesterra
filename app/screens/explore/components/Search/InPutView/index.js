import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';

const InPutView = ({}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  return (
    <>
      <View
        style={{
          width: '15%',
          height: '100%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome name="search" size={20} color="#898989" />
      </View>
      <View
        style={{
          width: '70%',
          height: '100%',
        }}>
        <TextInput
          value={search}
          style={{color: 'black'}}
          placeholder="Search Site  Id"
          placeholderTextColor="#5c5b5b"
          onChangeText={text => setSearch(text)}
        />
      </View>
    </>
  );
};

export default InPutView;

const styles = StyleSheet.create({});