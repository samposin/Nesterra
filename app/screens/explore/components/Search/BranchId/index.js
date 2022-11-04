import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconView from '../IconView/index';
import InPutView from '../InPutView';
import {SEARCH_BY_BRANCH_ID} from '../../../../../actions/action.coordinate.type';
import {useDispatch} from 'react-redux';

const BranchId = ({searchBranch, setRander}) => {
  const dispatch = useDispatch();
  const searchId = data => {
    searchBranch(data);
    // dispatch({
    //   type: SEARCH_BY_BRANCH_ID,
    //   data: data,
    // });
  };
  const changeRander = () => {
    setRander(true);
  };
  return (
    <>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{width: '80%', height: '100%'}}>
          <InPutView
            placeHolder="Search Branch  Id"
            onSearch={searchId}
            onFocus={changeRander}
          />
        </View>
        <View style={{width: '20%', height: '100%'}}>
          <IconView />
        </View>
      </View>
    </>
  );
};

export default BranchId;

const styles = StyleSheet.create({});
