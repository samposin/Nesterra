import {
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch, connect} from 'react-redux';

import {ORDER_GET_ONLY_VENDOR} from '../../../../../actions/actionType/action.OrdersForTab';

const Button = ({tittle, onPress, diplayName}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}
      style={{
        width: 100,
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

  setSwitchView,
  diplayName,
  cirCuitRef,
}) => {
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

  return (
    <View
      style={{
        width: '100%',
        height: 60,
        paddingLeft: 10,
        flexDirection: 'row',
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button tittle="Vendor" onPress={vendor} diplayName={diplayName} />
        <Button tittle="Project" onPress={vendor} diplayName={diplayName} />
        <Button tittle="Status" onPress={status} diplayName={diplayName} />

        <Button tittle="Date" onPress={vendor} diplayName={diplayName} />
      </ScrollView>
    </View>
  );
};

export default connect(null, {})(ThirdRow);

const styles = StyleSheet.create({});
