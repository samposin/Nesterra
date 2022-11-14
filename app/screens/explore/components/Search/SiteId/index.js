import {StyleSheet, Text, Keyboard, View} from 'react-native';
import React from 'react';
import IconView from '../IconView/index';
import InPutView from '../InPutView';

import {useDispatch} from 'react-redux';
import {SITE_ID_SEARCH} from '../../../../../actions/actionType/ExploreSearch';

const SiteId = ({setRander, setFocusView, setFocusOn1, focusOn1}) => {
  const dispatch = useDispatch();
  const searchId = data => {
    if (data) {
      setFocusOn1(false);
      dispatch({
        type: SITE_ID_SEARCH,
        data: data,
      });
      setRander(true);
      setFocusView('Site');
    } else {
      setFocusOn1(true);
      setRander(false);
      Keyboard.dismiss();
    }
    // if (data) {
    //   dispatch({
    //     type: SITE_ID_SEARCH,
    //     data: data,
    //   });
    //   setRander(true);
    //   setFocusView('Site');
    // } else {
    //   setRander(false);
    //   Keyboard.dismiss();
    // }
  };

  return (
    <>
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View style={{width: '80%', height: '100%'}}>
          <InPutView placeHolder="Search Site ID" onSearch={searchId} />
        </View>
        <View style={{width: '20%', height: '100%'}}>
          {focusOn1 ? <IconView /> : null}
        </View>
      </View>
    </>
  );
};

export default SiteId;

const styles = StyleSheet.create({});
