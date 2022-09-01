import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Button = ({tittle, setDiplayName, cirCuitRef}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        setDiplayName(tittle);
        cirCuitRef.current.snapToIndex(1);
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
      }}>
      <Text style={{fontWeight: '600', color: 'black'}}>{tittle}</Text>
      <FontAwesome5
        name="eject"
        size={15}
        style={{transform: [{rotate: '180deg'}], marginLeft: 2, marginTop: 3}}
        color={'black'}
      />
    </TouchableOpacity>
  );
};
const ThirdRow = ({setDiplayName, cirCuitRef}) => {
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
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />
      <Button
        tittle="Type"
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />
      <Button
        tittle="Sub Type"
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />

      <Button
        tittle="Circuit ID"
        setDiplayName={setDiplayName}
        cirCuitRef={cirCuitRef}
      />
    </View>
  );
};

export default ThirdRow;

const styles = StyleSheet.create({});
