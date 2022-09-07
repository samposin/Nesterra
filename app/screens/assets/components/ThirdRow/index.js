import {StyleSheet, Text, Keyboard, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, connect} from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import {
  ALL_CIRCUIT_ONLY_TYPE,
  ALL_CIRCUIT_ONLY_VENDOR,
  ALL_CIRCUIT_ONLY_SUBTYPE,
  ALL_CIRCUIT_ONLY_CIRCUITID,
  ALL_CIRCUIT_SORT_BY_STATUS,
} from './../../../../actions/actionType/AllCircuit/index';
import {getAllCircuitID} from '../../../../actions/AllCircuitID';
import {getAllCircuitDetails} from '../../../../actions/AllCircuit/allCorcuitDetails';

const Button = ({
  tittle,
  opPress,
  setDiplayName,
  setSwitchView,
  diplayName,
  cirCuitRef,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setDiplayName(tittle);
        cirCuitRef.current.snapToIndex(1);
        opPress();
        setSwitchView(false);
      }}
      style={{
        width: 90,
        height: 40,
        marginRight: 10,
        borderRadius: 10,
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: diplayName == tittle ? '#007aff' : 'black',
      }}>
      <Text
        style={{
          fontWeight: '600',
          color: diplayName == tittle ? '#007aff' : 'black',
        }}>
        {tittle}
      </Text>
      <FontAwesome5
        name="eject"
        size={15}
        style={{transform: [{rotate: '180deg'}], marginLeft: 2, marginTop: 3}}
        color={diplayName == tittle ? '#007aff' : 'black'}
      />
    </TouchableOpacity>
  );
};
const ThirdRow = ({
  setDiplayName,
  getAllCircuitID,
  setSwitchView,
  diplayName,
  cirCuitRef,
}) => {
  const dispatch = useDispatch();
  const [lodding1, setLodding1] = React.useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const vendorfil = () => {
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_VENDOR,
    });
  };
  const typefil = () => {
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_TYPE,
    });
  };
  const subtypefil = () => {
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_SUBTYPE,
    });
  };
  const circuitFil = () => {
    // alert('madan');
    dispatch({
      type: ALL_CIRCUIT_ONLY_CIRCUITID,
    });
  };
  const getCircuitId = () => {
    // alert('ddadsfsd');
    getAllCircuitID(setLodding1);
  };
  const getStatus = () => {
    dispatch({
      type: ALL_CIRCUIT_SORT_BY_STATUS,
    });
  };

  //=============Date Picker
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    // console.log(moment(date).format('MM-DD-YY'));
    dispatch({
      type: ORDER_FILTER_BY_DATE,
      data: moment(date).format('MM-DD-YY'),
    });

    hideDatePicker();
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    Keyboard.dismiss();
  };
  // =======Date Picker
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 60,
          paddingLeft: 10,
          flexDirection: 'row',
        }}>
        <Button
          tittle="Vendor"
          setSwitchView={setSwitchView}
          opPress={vendorfil}
          diplayName={diplayName}
          setDiplayName={setDiplayName}
          cirCuitRef={cirCuitRef}
        />
        <Button
          tittle="Project"
          opPress={typefil}
          setSwitchView={setSwitchView}
          diplayName={diplayName}
          setDiplayName={setDiplayName}
          cirCuitRef={cirCuitRef}
        />
        <Button
          setSwitchView={setSwitchView}
          tittle="Status"
          opPress={getStatus}
          diplayName={diplayName}
          setDiplayName={setDiplayName}
          cirCuitRef={cirCuitRef}
        />
        <TouchableOpacity
          onPress={() => {
            setDiplayName('Date');
            showDatePicker();
          }}
          style={{
            width: 90,
            height: 40,
            marginRight: 10,
            borderRadius: 10,
            borderWidth: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            borderColor: diplayName == 'Date' ? '#007aff' : 'black',
          }}>
          <Text
            style={{
              fontWeight: '600',
              color: diplayName == 'Date' ? '#007aff' : 'black',
            }}>
            Date
          </Text>
          <FontAwesome5
            name="eject"
            size={15}
            style={{
              transform: [{rotate: '180deg'}],
              marginLeft: 2,
              marginTop: 3,
            }}
            color={diplayName == 'Date' ? '#007aff' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default connect(null, {getAllCircuitID})(ThirdRow);

const styles = StyleSheet.create({});
