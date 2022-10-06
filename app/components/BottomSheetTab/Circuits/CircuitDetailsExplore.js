import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import OrderLoder from '../../lodder/OrderLoder';

const CircuitDetailsExplore = ({cirCuitRefExplore, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);

  const {item} = useSelector(state => state.CircuitDetailsExplore);
  // console.log(item);
  const LightGrewRow = ({title, value, bgcolor}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: bgcolor,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderRightColor: 'black',
            borderLeftWidth: 1,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={cirCuitRefExplore}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      animateOnMount
      animatedPosition={true}>
      <View
        style={{
          width: '100%',
          height: 30,
          alignItems: 'flex-end',
          paddingRight: 25,
        }}>
        <TouchableOpacity onPress={() => cirCuitRefExplore.current.close()}>
          <View
            style={{
              width: 24,
              height: 24,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#007aff',
            }}>
            <Text>
              <Entypo name="cross" size={20} color="white" />
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <BottomSheetScrollView style={{paddingHorizontal: 10}}>
        {!lodding ? (
          <>
            {/* ===================== */}
            <LightGrewRow
              bgcolor="#deebf7"
              title="Circuit ID"
              value={item.Circuit_ID}
            />

            <View style={{...styles.secondTableRow}}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#deebf7',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  Circuit Status
                </Text>
              </View>
              <View
                style={{
                  ...styles.secondTableColum,
                  borderRightColor: 'black',
                  borderLeftWidth: 1,
                  backgroundColor:
                    item.Circuit_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Circuit_Status}
                </Text>
              </View>
            </View>

            <LightGrewRow
              title="Assoc ID"
              bgcolor="#deebf7"
              value={item.Associated_ID ? item.Associated_ID : '--'}
            />
            <LightGrewRow
              bgcolor="#deebf7"
              title="LEC ID"
              value={item.LEC_ID ? item.LEC_ID : '--'}
            />

            <View style={styles.secondTableRow}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#b7ecff',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>Site ID</Text>
              </View>
              <View
                style={{
                  borderRightColor: 'black',
                  borderLeftWidth: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <Text style={{fontWeight: '700', color: '#007aff'}}>
                  {item.Location_ID}
                </Text>
                <Text style={{marginLeft: 5}}>
                  <FontAwesome name="map-marker" size={22} color="#007aff" />
                </Text>
              </View>
            </View>

            {/* ===================== */}
            {/* ===================== */}
            <LightGrewRow
              bgcolor="#b7ecff"
              title="Constact Site Types"
              value={'--'}
            />
            <LightGrewRow
              bgcolor="#b7ecff"
              title="Full Address"
              value={item.Address ? item.Address : '--'}
            />
            <LightGrewRow
              bgcolor="#fbe5d6"
              title="Vendor"
              value={item.Vendor ? item.Vendor : '--'}
            />
            <LightGrewRow
              bgcolor="#fbe5d6"
              title="Category"
              value={item.Category ? item.Category : '--'}
            />
            <LightGrewRow
              bgcolor="#fbe5d6"
              title="SubCat1"
              value={item.SubCat_1 ? item.SubCat_1 : '--'}
            />
            <LightGrewRow
              bgcolor="#fbe5d6"
              title="SubCat2"
              value={item.SubCat_2 ? item.SubCat_2 : '--'}
            />
            <LightGrewRow
              bgcolor="#fbe5d6"
              title="SubCat3"
              value={item.SubCat_3 ? item.SubCat_3 : '--'}
            />
            <LightGrewRow
              bgcolor="#fbe5d6"
              title="Whitelist Type"
              value={item.Whitelist_Use_Type ? item.Whitelist_Use_Type : '--'}
            />
            <LightGrewRow
              bgcolor="#deebf7"
              title="Vendor Account"
              value={
                item.Vendor_Account_Number ? item.Vendor_Account_Number : '--'
              }
            />
            <LightGrewRow
              bgcolor="#deebf7"
              title="Summary Account"
              value={
                item.Summary_Account_Number ? item.Summary_Account_Number : '--'
              }
            />
            <LightGrewRow
              bgcolor="#deebf7"
              title="Mbps"
              value={item.Mbps ? item.Mbps : '--'}
            />
            <LightGrewRow
              bgcolor="#e2f0d9"
              title="Circuit Cost(M)"
              value={item.circuit_charge ? `$${item.circuit_charge}` : '--'}
            />
            <LightGrewRow
              bgcolor="#e2f0d9"
              title="Circuit Cost(Y)"
              value={item.circuit_charge ? `$${item.circuit_charge}` : '--'}
            />
            <LightGrewRow
              bgcolor="#e2f0d9"
              title="GL"
              value={item.GL ? item.GL : '--'}
            />
            <LightGrewRow
              bgcolor="#e2f0d9"
              title="RC"
              value={item.RC ? item.RC : '--'}
            />
            <LightGrewRow
              bgcolor="#deebf7"
              title="B-End Location"
              value={item.Location_B_End ? item.Location_B_End : '--'}
            />

            <View style={{height: 100, width: '100%'}}></View>
          </>
        ) : (
          <OrderLoder />
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default CircuitDetailsExplore;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    marginBottom: 5,
    borderBottomWidth: 0,
    borderRadius: 5,
  },
  topView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
  },
  topItem: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topItem1: {
    width: '33.33%',
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 10,
  },

  ///=========Table
  table: {
    width: '100%',
    paddingHorizontal: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    borderBottomColor: '#73c0b8',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '25%',
    marginHorizontal: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
    fontSize: 14,
    color: 'white',
  },
  ///=========Table
  ///=========data row
  tableRow1: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    width: '23%',
    height: '100%',
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
  },
  ///=========data row
  ///========Second table
  secondTable: {
    width: '95%',
    marginTop: 20,
    alignSelf: 'center',
  },
  secondTableRow: {
    width: '100%',
    height: 50,

    flexDirection: 'row',
    // borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    borderLeftColor: 'black',
    // borderLeftWidth: 1,
  },
  secondTableRow1: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  secondTableColum: {
    width: '50%',
    height: '100%',

    paddingLeft: 10,
    justifyContent: 'center',
  },
});
