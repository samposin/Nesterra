import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import OrderLoder from '../../../../../components/lodder/OrderLoder';
import moment from 'moment/moment';

const BottomSheetDetails = ({atmdDetailsRef, snapPoints, detailsLoder}) => {
  const {item} = useSelector(state => state.AssetsAtmsDetails);

  const TabeRow = ({title, data, bgcolor}) => {
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
            backgroundColor: bgcolor,
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{data}</Text>
        </View>
      </View>
    );
  };
  const DATArow = ({title, value, bgcolor}) => {
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
            borderLeftWidth: 0.7,
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
      style={{paddingHorizontal: 10}}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={atmdDetailsRef}
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
        <TouchableOpacity
          onPress={() => {
            atmdDetailsRef.current.close();
          }}>
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
        {detailsLoder ? (
          <OrderLoder />
        ) : (
          <>
            <View style={{...styles.secondTableRow}}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#ace2ff',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  ATM_Status
                </Text>
              </View>
              <View
                style={{
                  ...styles.secondTableColum,
                  borderRightColor: 'black',
                  borderLeftWidth: 0.7,
                  backgroundColor:
                    item.ATM_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.ATM_Status}
                </Text>
              </View>
            </View>
            <TabeRow
              bgcolor="#ffff00"
              title="ATM ID"
              value={item.ATM_ID ? item.ATM_ID : '--'}
            />

            <DATArow
              bgcolor="#ace2ff"
              title="Site ID"
              value={item.ATM_Type ? item.ATM_Type : '--'}
            />
            <DATArow bgcolor="#ace2ff" title="Site Name" value={'--'} />
            <DATArow
              bgcolor="#ace2ff"
              title="Address"
              value={item.Address_1 ? item.Address_1 : '--'}
            />
            <DATArow bgcolor="#deebf7" title="Arrangement" value={'--'} />
            <DATArow
              bgcolor="#deebf7"
              title="ATM_Type"
              value={item.ATM_Type ? item.ATM_Type : '--'}
            />
            <DATArow
              bgcolor="#deebf7"
              title="ATM_Function"
              value={item.ATM_Function ? item.ATM_Function : '--'}
            />
            <DATArow
              bgcolor="#deebf7"
              title="Connection"
              value={item.Connection ? item.Connection : '--'}
            />
            <DATArow
              bgcolor="#deebf7"
              title="Date_Installed"
              value={
                item.Date_Installed
                  ? moment(item.Date_Installed).format('MM/DD/YY')
                  : '--'
              }
            />
            <DATArow
              bgcolor="#fbe5d6"
              title="Vendor"
              value={item.Vendor ? item.Vendor : '--'}
            />
            <DATArow
              bgcolor="#fbe5d6"
              title="Model"
              value={item.Model ? item.Model : '--'}
            />
            <DATArow
              bgcolor="#fbe5d6"
              title="Processor"
              value={item.Processor ? item.Processor : '--'}
            />
            <DATArow
              bgcolor="#fbe5d6"
              title="Serial_Number"
              value={item.Serial_Number ? item.Serial_Number : '--'}
            />
            <DATArow bgcolor="#ffffcc" title="ATM IP#" value={'--'} />
            <DATArow bgcolor="#ffffcc" title="Router IP#" value={'--'} />
            <DATArow bgcolor="#ffffcc" title="Host" value={'--'} />
            <DATArow bgcolor="#f2f2f2" title="Software Level" value={'--'} />

            <DATArow
              bgcolor="#f2f2f2"
              title="Ref_ID"
              value={item.Ref_ID ? item.Ref_ID : '--'}
            />
            <DATArow
              bgcolor="#f2f2f2"
              title="TLS Port"
              value={item.TLS_Port ? item.TLS_Port : '--'}
            />
            <DATArow
              bgcolor="#f2f2f2"
              title="NFC Capable"
              value={item.Card_Reader ? item.Card_Reader : '--'}
            />
            <DATArow bgcolor="#f2f2f2" title="NFC Enabled" value={'--'} />
            <DATArow
              bgcolor="#f2f2f2"
              title="Comments"
              value={item.Comments ? item.Comments : '--'}
            />

            {/* 

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

            
           
            
             */}

            <View style={{height: 100, width: '100%'}}></View>
          </>
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetDetails;

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
    borderBottomWidth: 0.7,
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
