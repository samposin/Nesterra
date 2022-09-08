import {StyleSheet, Dimensions, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SecondRow from './SecondRow';
import ThirdRow from './ThirdRow';
const {width} = Dimensions.get('screen');
import {connect} from 'react-redux';
import {copyText, tostalert} from '../../../../components/helper';
import {get_orders_for_tab} from './../../../../actions/orderFotTab/index';
import OrderLoder from './../../../../components/lodder/OrderLoder';
import ToggleSwitch from 'toggle-switch-react-native';
import {
  SORT_BY_VENDOR_ASC,
  SORT_BY_VENDOR_DES,
  SORT_BY_STATUS_ASC,
  SORT_BY_STATUS_DES,
  SORT_BY_DATE_ASC,
  SORT_BY_DATE_DES,
  SORT_BY_INV_ID_ASC,
  SORT_BY_INV_ID_DES,
  SORT_BY_ORDER_TYPE_ASC,
  SORT_BY_ORDER_TYPE_DES,
  ORDER_FILTER_BY_DATE,
  GET_ONLY_VENDOR,
} from '../../../../actions/actionType/action.OrdersForTab';

const Circuits = ({get_orders_for_tab}) => {
  const [loding3, setLodding3] = useState(false);
  const [switchView, setSwitchView] = useState(true);
  const [isOn, setIsSwitchOn] = React.useState(false);
  useEffect(() => {
    get_orders_for_tab();
  }, []);

  return (
    <>
      <SecondRow />
      <ThirdRow />
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
    </>
  );
};

export default connect(null, {get_orders_for_tab})(Circuits);

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
    backgroundColor: '#007aff',
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
    backgroundColor: 'green',
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
});
