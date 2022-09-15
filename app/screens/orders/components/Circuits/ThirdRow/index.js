import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';

import {useDispatch, connect} from 'react-redux';
import FilterButton from '../../../../../components/FilterButton';
import {
  ORDER_FILTER_BY_BETWEEN_DATE,
  ORDER_GET_ONLY_VENDOR,
} from '../../../../../actions/actionType/action.OrdersForTab';
import DatePickerView from './../../../../../components/DatePickerView/index';
import moment from 'moment';

const ThirdRow = ({
  setDiplayName,

  setSwitchView,
  diplayName,
  cirCuitRef,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isDatePickerVisible1, setDatePickerVisibility1] =
    React.useState(false);
  const [stdata, setStdat] = React.useState(0);
  // console.log(typeof stdata);
  const dispatch = useDispatch();
  const vendor = () => {
    dispatch({
      type: ORDER_GET_ONLY_VENDOR,
    });
    setDiplayName('Vendor');
    cirCuitRef.current.snapToIndex(1);
    setSwitchView(false);
  };
  const status = () => {
    setDiplayName('Status');
    cirCuitRef.current.snapToIndex(1);
    setSwitchView(false);
  };
  const startdatePick = () => {
    setDatePickerVisibility(true);
    cirCuitRef.current.close();
    setSwitchView(false);
  };
  const getStartData = date => {
    console.log(date);
    const d = moment(date, 'MMDDYYYY').valueOf();
    setStdat(date);
    // console.log(typeof stdata, 'ddd');
    // // console.log(date, 'start');
    // // console.log(d, 'd');
    setDatePickerVisibility(false);
  };
  const getEndtData = date => {
    console.log(date);
    dispatch({
      type: ORDER_FILTER_BY_BETWEEN_DATE,
      startDate: stdata,
      endDate: date,
    });
    console.log(date, 'end');
    setDatePickerVisibility1(false);
    setSwitchView(true);
  };
  const enddatePick = () => {
    setDatePickerVisibility1(true);
    cirCuitRef.current.close();
    setSwitchView(false);
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          height: 60,
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <FilterButton
            title="Vendor"
            onPress={vendor}
            diplayName={diplayName}
          />
          <FilterButton
            title="Project"
            onPress={vendor}
            diplayName={diplayName}
          />
          <FilterButton
            title="Status"
            onPress={status}
            diplayName={diplayName}
          />

          <FilterButton
            title="Start Date"
            onPress={startdatePick}
            diplayName={diplayName}
          />
          <FilterButton
            title="End Date"
            onPress={enddatePick}
            diplayName={diplayName}
          />
        </ScrollView>
      </View>
      <DatePickerView
        getDate={getStartData}
        isDatePickerVisible={isDatePickerVisible}
        setDatePickerVisibility={setDatePickerVisibility}
      />
      <DatePickerView
        getDate={getEndtData}
        isDatePickerVisible={isDatePickerVisible1}
        setDatePickerVisibility={setDatePickerVisibility1}
      />
    </>
  );
};

export default connect(null, {})(ThirdRow);

const styles = StyleSheet.create({});
