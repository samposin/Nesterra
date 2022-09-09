import {
  StyleSheet,
  Dimensions,
  Image,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
const {width} = Dimensions.get('screen');

import {copyText, tostalert} from '../../../../components/helper';
import {get_orders_for_tab} from './../../../../actions/orderFotTab/index';
import OrderLoder from './../../../../components/lodder/OrderLoder';
import ToggleSwitch from 'toggle-switch-react-native';
import {connect, useDispatch, useSelector} from 'react-redux';
import Tableheader from './TableHeader/index';

import moment from 'moment';
import BottomSheetViewDetails from './BottomSheetViewDetails';
import {get_order_details} from '../../../../actions/order';

const Circuits = ({get_orders_for_tab, get_order_details}) => {
  const {ordersForTab} = useSelector(state => state.ordersForTab);
  // console.log(ordersForTab[0]);

  const [refresh, setRefresh] = useState(false);
  const [loding, setLodding] = useState(false);
  const [lodding1, setLodding1] = useState(false);
  const [switchView, setSwitchView] = useState(true);
  const [isOn, setIsSwitchOn] = React.useState(false);
  const bottomSheetRefdetails = useRef(null);

  useEffect(() => {
    get_orders_for_tab(setLodding);
  }, []);

  //barckground color change
  const selectedComponent = item => {
    switch (true) {
      case item === 'In Progress':
        return '#ffffbf';

      case item === 'Initiated':
        return '#ffc8ce';

      case item === 'Cancelled':
        return '#ffc8ce';

      case item === 'Completed':
        return '#c6efcd';
    }
  };
  //barckground color change
  const randerItem = ({index, item}) => {
    return (
      <TouchableOpacity
        onPress={
          () => {
            // vendorRef.current.close();
            // setLodding(true);
            //  bottomSheetRef.current.close();
            // if (!lodding) {
            //   bottomSheetRefdetails.current.snapToIndex(2);
            // }
            get_order_details(
              item.Inventory_ID,
              setLodding1,
              bottomSheetRefdetails,
            );
          }
          // navigation.navigate('OrderDetails', {
          //   inv_Id: item.Inventory_ID,
          // })
        }
        style={{
          ...styles.tableRow1,
          height: 60,
          // backgroundColor: index % 2 == 0 ? '#d1d0d0' : '#ffffff',
          marginVertical: 1,
          backgroundColor: '#ffffff',
        }}>
        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Order_Type);

              tostalert(item.Order_Type);
            }}>
            <Text style={styles.boxText1}> {item?.Order_Type}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.vendor);
              tostalert(item.vendor);
            }}>
            <Text style={styles.boxText1}>{item?.vendor}</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
            backgroundColor: selectedComponent(item?.Status),
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Status);
              tostalert(item.Status);
            }}>
            <Text style={styles.boxText1}>{item?.Status}</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(moment(item.Creation_Date).format('MM/DD/YY'));
              tostalert(moment(item.Creation_Date).format('MM/DD/YY'));
            }}>
            <Text style={styles.boxText1}>
              {moment(item?.Creation_Date).format('MM/DD/YY')}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            ...styles.tableRowColum1,
            width: '20%',
            borderLeftColor: 'white',
            borderLeftWidth: 2,
          }}>
          <TouchableOpacity
            onLongPress={() => {
              copyText(item.Inventory_ID);
              tostalert(item.Inventory_ID);
            }}>
            <Text style={styles.boxText1}>
              {item?.Inventory_ID}
              {/* {moment(item.Initiation_Date).format('DD-MM-YYYY')} */}
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SecondRow />
      <ThirdRow />
      <Tableheader />
      {loding ? (
        <View style={styles.loderView}>
          <OrderLoder />
        </View>
      ) : (
        <View style={styles.table}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ordersForTab}
            keyExtractor={(item, i) => i.toString()}
            renderItem={(item, i) => randerItem(item)}
            refreshing={refresh}
            onRefresh={() => {
              // setType('');
              // changeBottomColor1();
              get_orders_for_tab(setLodding);
            }}
            ListEmptyComponent={() => {
              return (
                <View
                  style={{
                    width: '100%',
                    height: 500,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 200,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Image
                      style={{
                        width: '100%',
                        height: 100,
                        resizeMode: 'contain',
                      }}
                      source={require('../../../../images/empty.png')}
                    />
                    <Text style={{fontSize: 25}}>No Data Found</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}

      {/* ==================data View============== */}
      {/* ==================data View============== */}

      <>
        {/* ============TOOGLE=========== */}
        {switchView ? (
          <View
            style={{
              width: (width / 3) * 2.2,
              height: 55,
              position: 'absolute',
              bottom: 60,
              right: 0,
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingHorizontal: 10,
              zIndex: 1,
            }}>
            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor: '#007aff',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}></Text>
            </View>
            <View
              style={{
                width: '48%',
                height: '100%',
                backgroundColor: '#007aff',
                borderRadius: 10,
                flexDirection: 'row',
                paddingHorizontal: 5,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontWeight: 'bold'}}>
                {isOn ? 'Active' : 'InActive'}
              </Text>
              <ToggleSwitch
                isOn={isOn}
                onColor="#34c759"
                offColor="#b3b8b4"
                labelStyle={{color: 'black', fontWeight: '500'}}
                size="large"
                onToggle={isOn => {
                  if (isOn) {
                    alert('ddfsd');
                  } else {
                    alert('ddfsd');
                  }
                }}
              />
            </View>
          </View>
        ) : null}
        {/* ============TOOGLE=========== */}
      </>
      <BottomSheetViewDetails
        lodding1={lodding1}
        bottomSheetRefdetails={bottomSheetRefdetails}
      />
    </>
  );
};

export default connect(null, {get_orders_for_tab, get_order_details})(Circuits);

const styles = StyleSheet.create({
  loderView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '80%',
  },
  ///========Lodder
  ///========id Button
  idButton: {
    width: 90,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========id View
  idView: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  idViewLeft: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  idViewRight: {width: '20%', height: '100%'},
  ///========id View
  ///========TABELE HEADER
  tableHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum1: {
    height: '100%',
    // backgroundColor: '#007aff',
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  ///========TABELE HEADER
  ///========TABELE
  table: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 5,
  },
  tableRow1: {
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderBottomColor: 'black',
    // borderBottomWidth: 0.7,
    // backgroundColor: 'green',
  },
  //   tableRowColum1: {
  //     height: '100%',
  //     backgroundColor: '#007aff',
  //   },
  tableRowColum2: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText1: {
    fontSize: 12,
    color: '#000000',

    fontWeight: '700',
  },
});
