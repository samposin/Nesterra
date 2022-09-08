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
// import {GetAllCarrierNumber} from './../../../../actions/CarrierNumber/index';
// import {getAllTangorNumber} from './../../../../actions/TangorNumber/index';

const Button = ({
  tittle,
  // onPress,
  // setDiplayName,
  // setSwitchView,
  // diplayName,
  // cirCuitRef,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        // setDiplayName(tittle);
        // cirCuitRef.current.snapToIndex(1);
        // onPress();
        // setSwitchView(false);
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
        // borderColor: diplayName == tittle ? '#007aff' : 'black',
      }}>
      <Text
        style={{
          fontWeight: '600',
          // color: diplayName == tittle ? '#007aff' : 'black',
        }}>
        {tittle}
      </Text>
      <FontAwesome5
        name="eject"
        size={15}
        style={{transform: [{rotate: '180deg'}], marginLeft: 2, marginTop: 3}}
        // color={diplayName == tittle ? '#007aff' : 'black'}
      />
    </TouchableOpacity>
  );
};
const ThirdRow = (
  {
    // setDiplayName,
    // GetAllCarrierNumber,
    // setSwitchView,
    // diplayName,
    // cirCuitRef,
    // getAllTangorNumber,
  },
) => {
  const dispatch = useDispatch();
  const [loding, setLoding] = React.useState(false);
  // const getCarrirer = () => {
  //   // setLoding(true)
  //   GetAllCarrierNumber(setLoding);
  // };
  // const getTangoe = () => {
  //   getAllTangorNumber();
  // };

  return (
    <View
      style={{
        width: '100%',
        height: 60,
        paddingLeft: 10,
        flexDirection: 'row',
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Button
          tittle="Vendor"
          // onPress={() => {}}

          // setSwitchView={setSwitchView}
          // diplayName={diplayName}
          // setDiplayName={setDiplayName}
          // cirCuitRef={cirCuitRef}
        />
        <Button
          tittle="Project"
          // onPress={() => {}}
          // setSwitchView={setSwitchView}
          // diplayName={diplayName}
          // setDiplayName={setDiplayName}
          // cirCuitRef={cirCuitRef}
        />
        <Button
          tittle="Status"
          // onPress={getTangoe}
          // setSwitchView={setSwitchView}
          // diplayName={diplayName}
          // setDiplayName={setDiplayName}
          // cirCuitRef={cirCuitRef}
        />

        <Button
          tittle="Date"
          // onPress={getCarrirer}
          // setSwitchView={setSwitchView}
          // diplayName={diplayName}
          // setDiplayName={setDiplayName}
          // cirCuitRef={cirCuitRef}
        />
      </ScrollView>
    </View>
  );
};

export default connect(null, {})(ThirdRow);

const styles = StyleSheet.create({});
