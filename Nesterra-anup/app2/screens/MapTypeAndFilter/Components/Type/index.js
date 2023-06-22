import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from 'react-native';
import React from 'react';

import CheckBoxView from './../CheckBoxView/index';
import {useNavigation} from '@react-navigation/native';
const {height, width} = Dimensions.get('screen');
import {warinng} from '../../../../components/helper';

import {useDispatch} from 'react-redux';
import {MAPTYPE} from '../../../../actions/actionType/MapType';
import ClearAndAppply from '../ClearAndAppply';
import BackButton from './../../../../components/BackButton/index';

const data = [
  {id: 0, txt: 'standard', name: 'Standard', isChecked: true},
  {id: 1, txt: 'hybrid', name: 'Hybrid', isChecked: false},
  {id: 2, txt: 'terrain', name: 'Terrain', isChecked: false},
];
const Type = ({}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [checkdata, setCheckData] = React.useState(data);
  const [seletedValue, setSeletedValue] = React.useState('');
  const seletedColor = id => {
    let listData = checkdata.map(item => {
      let itm = {...item, isChecked: false};
      return itm;
    });

    listData[id].isChecked = true;
    setCheckData(listData);
  };
  const handleChange = (id, name) => {
    seletedColor(id);
    setSeletedValue(name);

    //
  };
  const apply = () => {
    if (seletedValue == '') {
      warinng('Select A Value');
    } else {
      dispatch({
        type: MAPTYPE,
        payload: {
          data: seletedValue,
        },
      });
      navigation.navigate('Explore');
    }
  };
  const clear = () => {
    let listData = checkdata.map(item => {
      let itm = {...item, isChecked: false};
      return itm;
    });

    setCheckData(listData);
  };
  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: height,

          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <View style={styles.header}>
          <View
            style={{
              width: '100%',
              height: '100%',
              flexDirection: 'row',
              paddingHorizontal: 10,

              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16}}>Filters</Text>
            <BackButton
              onPress={() => {
                navigation.navigate('Menu');
              }}
            />
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View
            style={{
              width: '40%',
              height: '100%',

              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              width: '60%',
              height: '100%',
              backgroundColor: '#ffffff',

              marginLeft: 10,
            }}>
            <Text style={{color: 'black', marginLeft: 8, marginVertical: 10}}>
              Setected {`(${0})`}
            </Text>
            <View
              style={{
                width: '100%',
                height: 45,
                marginLeft: 8,
              }}>
              <TextInput
                style={{width: '80%', borderWidth: 1, borderRadius: 5}}
              />
            </View>
            {checkdata.map((item, i) => {
              return (
                <CheckBoxView
                  key={i}
                  handleChange={handleChange}
                  value={item.isChecked}
                  item={item}
                />
              );
            })}
          </View>
        </View>
        {/* <ClearAndAppply onPress={apply} clear={clear} /> */}
      </View>
    </>
  );
};

export default Type;

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  mainContainer: {
    height: height - 70,

    width: '100%',
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
});
