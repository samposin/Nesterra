import {StyleSheet, TextInput, Text, View} from 'react-native';
import React, {useState} from 'react';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
// import {SEARCH_BY_BRANCH_ID} from '../../../actions/action.coordinate.type';
import {SEARCH_BY_BRANCH_ID} from '../../../../../actions/action.coordinate.type';
import SearchBranchIcon from './SearchBranchIcon';

const BranchId = ({setModalVisible}) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [iconShow, setIconShow] = useState(false);
  const searchBranch = text => {
    setSearch(text);
    dispatch({
      type: SEARCH_BY_BRANCH_ID,
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
          placeholder="Search Branch Id"
          placeholderTextColor="black"
          onChangeText={text => searchBranch(text)}
        />
      </View>
      <SearchBranchIcon
        setModalVisible={setModalVisible}
        searchBranch={searchBranch}
        iconShow={iconShow}
        setIconShow={setIconShow}
      />
    </>
  );
};

export default BranchId;

const styles = StyleSheet.create({});
