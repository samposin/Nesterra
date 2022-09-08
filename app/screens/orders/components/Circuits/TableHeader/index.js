import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Tableheader = () => {
  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(true);
  const [dateType, setDateType] = useState(true);
  const [invType, setInvType] = useState(true);
  const [orderType, setOrderType] = useState(true);
  return (
    <View>
      <Text>Tableheader</Text>
    </View>
  );
};

export default Tableheader;

const styles = StyleSheet.create({
  tableRow: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    height: '100%',
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '20%',
    marginHorizontal: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
});
