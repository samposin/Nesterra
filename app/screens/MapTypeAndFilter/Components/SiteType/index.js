import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const {height, width} = Dimensions.get('screen');

import {warinng} from '../../../../components/helper';

import {connect, useSelector} from 'react-redux';
import {getlist, is_selected, select_all} from '../../../../actions/selectList';
import SelectAll from '../../../filtter/SelectAll';
import CheckBoxComponet from '../../../../components/checkBox';
import {useNavigation} from '@react-navigation/native';
import {dataMar} from '../../../../utils/MarkerData1';

const data = [
  {id: 0, txt: 'Data Center', name: 'Data Center', isChecked: false},
  {id: 1, txt: 'Office', name: 'Office', isChecked: false},
  {id: 2, txt: 'Branch', name: 'Branch', isChecked: false},
  {id: 3, txt: 'ATM', name: 'ATM', isChecked: false},
  {id: 4, txt: '3rd Party', name: '3rd Party', isChecked: false},
  {id: 5, txt: 'Other', name: 'Other', isChecked: false},
];
const SiteType = ({getlist, is_selected, select_all}) => {
  const navigation = useNavigation();
  const {list} = useSelector(state => state.selectList);
  const {checkList} = useSelector(state => state.selectList);
  const [dataCenter, setDataCenter] = useState(true);
  const [office, setOffice] = useState(true);
  const [branch, setbranch] = useState(true);
  const [atm, setAtm] = useState(true);
  const [thparty, setThparty] = useState(true);
  const [other, setOther] = useState(true);
  let ddd = [];
  const dpa = checkList.map(item => {
    return ddd.push(item.name);
  });
  const datother = dataMar.filter(
    item => item.HierarchyLocationType === 'Other',
  );
  const datCenter = dataMar.filter(item =>
    item.HierarchyLocationType.includes('Data Center'),
  );
  const dataOffice = dataMar.filter(
    item => item.HierarchyLocationType === 'Office',
  );
  const dataBranch = dataMar.filter(
    item => item.HierarchyLocationType === 'Branch',
  );
  const dataAtm = dataMar.filter(item => item.HierarchyLocationType === 'ATM');
  const dataThrd = dataMar.filter(item =>
    item.HierarchyLocationType.includes('3rd Party'),
  );
  const changeData = id => {
    switch (true) {
      case id == 0:
        setDataCenter(!dataCenter);
        break;
      case id == 1:
        setOffice(!office);
        break;
      case id == 2:
        setbranch(!branch);
        break;

      case id == 3:
        setAtm(!atm);
        break;
      case id == 4:
        setThparty(!thparty);
        break;
      case id == 5:
        setOther(!other);
        break;
    }
  };

  const handleChange = id => {
    changeData(id);
    is_selected(id);
  };

  React.useEffect(() => {
    getlist(data);
  }, []);
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
              height: '50%',

              justifyContent: 'flex-end',
            }}>
            <Text style={{color: 'black'}}>Filter</Text>
          </View>
          <View
            style={{
              width: '100%',
              height: '50%',

              justifyContent: 'center',
            }}>
            <Text style={{color: 'black'}}>{ddd.toString()}</Text>
          </View>
        </View>
        <View style={styles.mainContainer}>
          <View
            style={{
              width: '30%',
              height: '100%',
              backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}></View>
          <View
            style={{
              width: '70%',
              height: '100%',
              backgroundColor: '#ffffff',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '80%',
                height: '100%',
              }}>
              <Text style={{color: 'black', marginLeft: 8, marginVertical: 10}}>
                Setected {`(${checkList.length})`}
              </Text>
              {list &&
                list.map((item, i) => {
                  return (
                    <View
                      style={{
                        width: '100%',
                        height: 40,
                        flexDirection: 'row',
                        marginVertical: 1,
                        alignItems: 'center',
                      }}>
                      <View style={{width: '50%', height: '100%'}}>
                        <CheckBoxComponet
                          key={i}
                          handleChange={handleChange}
                          value={item.isChecked}
                          item={item}
                        />
                      </View>
                      <View
                        style={{
                          width: '50%',
                          height: '100%',
                          justifyContent: 'center',
                          alignItems: 'flex-end',
                          paddingRight: 15,
                        }}>
                        <Text></Text>
                      </View>
                    </View>
                  );
                })}
            </View>
            <View
              style={{
                width: '20%',
                height: '100%',
              }}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 8,
                  marginVertical: 10,
                }}></Text>
              <View style={styles.countItem}>
                <Text>{dataCenter ? 0 : datCenter.length}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{office ? 0 : dataOffice.length}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{branch ? 0 : dataBranch.length}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{atm ? 0 : dataAtm.length}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{thparty ? 0 : dataThrd.length}</Text>
              </View>
              <View style={styles.countItem}>
                <Text>{other ? 0 : datother.length}</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: 260,
            height: 35,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',

            bottom: 100,
            right: 10,
          }}>
          <View
            style={{
              width: 100,
              height: '100%',
              borderRadius: 5,
              backgroundColor: '#c7dcfb',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#1e74bf'}}>Search Clear</Text>
          </View>
          <View
            style={{
              width: 100,
              height: '100%',
              borderRadius: 5,
              backgroundColor: '#0075f6',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white'}}>Apply</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default connect(null, {getlist, is_selected, select_all})(SiteType);

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#f5f5f5',
    paddingLeft: 20,
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
  checkbox: {
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countItem: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    marginVertical: 1,
    alignItems: 'center',
  },
});
