import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import IconView from '../IconView/index';
import InPutView from '../InPutView';

import {useDispatch} from 'react-redux';
import {BRANCH_ID_SEARCH} from '../../../../../actions/actionType/ExploreSearch';

const BranchId = ({setRander, setFocusView, focusOn1, setFocusOn1}) => {
  console.log('dfadsf');
  const dispatch = useDispatch();
  const searchId = data => {
    if (data) {
      setFocusOn1(false);
      setRander(true);
      setFocusView('Branch');
      dispatch({
        type: BRANCH_ID_SEARCH,
        data: data,
      });
    } else {
      setFocusOn1(true);
      setRander(false);
    }
    // dispatch({
    //   type: SEARCH_BY_BRANCH_ID,
    //   data: data,

    // });
  };

  return (
    <>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{width: '80%', height: '100%'}}>
          <InPutView placeHolder="Search Branch ID" onSearch={searchId} />
        </View>
        <View style={{width: '20%', height: '100%'}}>
          {focusOn1 ? <IconView /> : null}
        </View>
      </View>
    </>
  );
};

export default memo(BranchId);

const styles = StyleSheet.create({});
