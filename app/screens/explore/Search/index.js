import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import DropDownView from './DropDownView';
import BranchSearch from './BranchSearch';
import CircuitSearch from './CircuitSearch';

const SerachCircuitIdBranchId = ({setModalVisible}) => {
  const [dropDownShow, seTDropDownShow] = useState(false);
  const [searchView, setSearchView] = useState('Branch');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftView}>
          {searchView == 'Branch' ? (
            <BranchSearch setModalVisible={setModalVisible} />
          ) : (
            <CircuitSearch setModalVisible={setModalVisible} />
          )}
        </View>
        <TouchableOpacity
          onPress={() => {
            seTDropDownShow(!dropDownShow);
          }}
          style={{...styles.rightVies, position: 'relative'}}>
          <View
            style={{
              width: 2,
              height: '70%',
              backgroundColor: 'black',
              position: 'absolute',
              top: 8,
              left: 0,
            }}></View>
          <Text style={{color: 'black', fontWeight: 'bold'}}>Address</Text>
          <AntDesign
            name="caretdown"
            size={20}
            style={{marginLeft: 2}}
            color={'black'}
          />
        </TouchableOpacity>
      </View>
      {dropDownShow ? (
        <DropDownView
          seTDropDownShow={seTDropDownShow}
          setSearchView={setSearchView}
        />
      ) : null}
    </>
  );
};

export default SerachCircuitIdBranchId;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    width: Dimensions.get('screen').width - 50,
    alignSelf: 'center',
    zIndex: 0,
    marginTop: 80,
    height: 50,
    borderWidth: 2,
    // zIndex: -1,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 29,
  },
  container1: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    zIndex: 0,
    // borderRadius: 20,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 2,
    //   height: 6,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,
    // elevation: 29,
  },
  leftView: {
    width: '70%',
    height: '100%',
    flexDirection: 'row',
  },
  rightVies: {
    width: '30%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
});
