import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import {
  ALL_CIRCUIT_ONLY_TYPE,
  ALL_CIRCUIT_ONLY_VENDOR,
  ALL_CIRCUIT_ONLY_SUBTYPE,
  ALL_CIRCUIT_ONLY_CIRCUITID,
} from './../../../../actions/actionType/AllCircuit/index';

const Button = ({tittle, opPress, setDiplayName, diplayName, cirCuitRef}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setDiplayName(tittle);
        cirCuitRef.current.snapToIndex(1);
        opPress();
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
const ThirdRow = ({setDiplayName, diplayName, cirCuitRef}) => {
  const dispatch = useDispatch();
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
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        paddingLeft: 10,
        flexDirection: 'row',
      }}>
      <Button
        tittle="Vendor"
        opPress={vendorfil}
        diplayName={diplayName}
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />
      <Button
        tittle="Type"
        opPress={typefil}
        diplayName={diplayName}
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />
      <Button
        tittle="Sub Type"
        opPress={subtypefil}
        diplayName={diplayName}
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />

      <Button
        opPress={circuitFil}
        tittle="Circuit ID"
        diplayName={diplayName}
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />
    </View>
  );
};

export default ThirdRow;

const styles = StyleSheet.create({});
