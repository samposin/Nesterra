import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import IconView from '../IconView/index';
import InPutView from '../InPutView';
import {SEARCH_BY_BRANCH_ID} from '../../../../../actions/action.coordinate.type';
import {useDispatch} from 'react-redux';

const AtmsId = () => {
  const dispatch = useDispatch();
  const searchId = data => {
    dispatch({
      type: SEARCH_BY_BRANCH_ID,
      data: data,
    });
  };
  return (
    <>
      <InPutView placeHolder="Search Atms Id" onSearch={searchId} />
      <IconView />
    </>
  );
};

export default AtmsId;

const styles = StyleSheet.create({});
