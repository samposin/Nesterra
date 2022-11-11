import {StyleSheet, Text, Keyboard, View} from 'react-native';
import React from 'react';
import IconView from '../IconView/index';
import InPutView from '../InPutView';

import {useDispatch} from 'react-redux';
import {ATM_ID_SEARCH} from '../../../../../actions/actionType/ExploreSearch';

const AtmsId = ({setRander, setFocusView, setFocusOn1, focusOn1}) => {
  const dispatch = useDispatch();
  const searchId = data => {
    if (data) {
      setFocusOn1(false);
      dispatch({
        type: ATM_ID_SEARCH,
        data: data,
      });
      setRander(true);
      setFocusView('ATM');
    } else {
      setFocusOn1(true);
      setRander(false);
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{width: '80%', height: '100%'}}>
          <InPutView placeHolder="Search Atms Id" onSearch={searchId} />
        </View>
        <View style={{width: '20%', height: '100%'}}>
          {focusOn1 ? <IconView /> : null}
        </View>
      </View>
    </>
  );
};

export default AtmsId;

const styles = StyleSheet.create({});
