import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import {get_order} from '../../actions/order';
import {connect, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import ImageLoder from '../../components/lodder/imageLodder';
import {Picker} from '@react-native-picker/picker';

const Orders = ({get_order, navigation, route}) => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const isFocused = useIsFocused();

  const order = useSelector(state => state.order.order);

  const [id, setId] = useState('');
  useEffect(() => {
    const idd = //'MST0007215';
      route.params == undefined ? 'MST0007215' : route.params.location_ID;
    setId(idd);
    // get_ord();
    // get_order(id);
  }, [isFocused]);

  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        {/* ==============container============== */}
        <View style={{flex: 1}}>
          {/* ==============Summary View=========== */}
          <View style={styles.summaryView}>
            <TouchableOpacity style={styles.summaryButton}>
              <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
                Sammary
              </Text>
            </TouchableOpacity>
          </View>
          {/* ==============Summary View=========== */}
          {/* ==============Category View=========== */}
          {/* ==============Services Category============== */}
          <View style={{...styles.dropDownView}}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{width: '100%', height: '100%'}}>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
              <View style={styles.dropDownViewRight}>
                <View style={styles.pickerBoxInner}>
                  <Picker
                    selectedValue={selectedLanguage}
                    style={styles.pickerStyle}
                    placeholder="Select your SIM"
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="All " value="key4" />
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                  </Picker>
                </View>
              </View>
            </ScrollView>
          </View>
          {/* ==============Services Category============== */}
          {/* ==============Category View=========== */}
          {/* ==============Table============== */}
          {order.length == 0 ? (
            <View
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 300,
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>
                No Data Found
              </Text>
            </View>
          ) : (
            <View style={styles.table}>
              {/* ===================table Tow============== */}
              <View style={{...styles.tableRow}}>
                <View style={{...styles.tableRowColum}}>
                  <Text style={{...styles.boxText, color: 'white'}}>
                    Inventory Id
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.tableRowColum,
                    borderLeftColor: 'white',
                    borderLeftWidth: 2,
                  }}>
                  <Text style={styles.boxText}>Order Type</Text>
                </View>
                <View
                  style={{
                    ...styles.tableRowColum,
                    borderLeftColor: 'white',
                    borderLeftWidth: 2,
                  }}>
                  <Text style={styles.boxText}>Status</Text>
                </View>
                <View
                  style={{
                    ...styles.tableRowColum,
                    borderLeftColor: 'white',
                    borderLeftWidth: 2,
                  }}>
                  <Text style={styles.boxText}>Address</Text>
                </View>
                <View
                  style={{
                    ...styles.tableRowColum,
                    borderLeftColor: 'white',
                    borderLeftWidth: 2,
                  }}>
                  <Text style={styles.boxText}>Address1</Text>
                </View>
              </View>
              {/* ===================table Tow============== */}
              {/* ===================table Tow============== */}
              <ScrollView
                style={{width: '100%', height: 480}}
                showsVerticalScrollIndicator={false}>
                {order.map((item, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('OrderDetails', {
                          inv_Id: item.Inventory_ID,
                          loca_Id: id,
                        })
                      }
                      key={i}
                      style={{
                        ...styles.tableRow1,
                        backgroundColor: i % 2 == 0 ? '#d1d0d0' : '#ffffff',
                        marginVertical: 1,
                      }}>
                      <View
                        style={{
                          ...styles.tableRowColum1,
                          borderLeftColor: 'white',
                          borderLeftWidth: 2,
                        }}>
                        <Text style={styles.boxText1}>{item.Inventory_ID}</Text>
                      </View>
                      <View
                        style={{
                          ...styles.tableRowColum1,
                          borderLeftColor: 'white',
                          borderLeftWidth: 2,
                        }}>
                        <Text style={styles.boxText1}>{item.Order_Type}</Text>
                      </View>
                      <View
                        style={{
                          ...styles.tableRowColum1,
                          borderLeftColor: 'white',
                          borderLeftWidth: 2,
                        }}>
                        <Text style={styles.boxText1}>{item.Status}</Text>
                      </View>
                      <View
                        style={{
                          ...styles.tableRowColum1,
                          borderLeftColor: 'white',
                          borderLeftWidth: 2,
                        }}>
                        <Text style={styles.boxText1}>{item.vendor}</Text>
                      </View>
                      <View
                        style={{
                          ...styles.tableRowColum1,
                          borderLeftColor: 'white',
                          borderLeftWidth: 2,
                        }}>
                        <Text style={styles.boxText1}>{item.vendor}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>

              {/* ===================table Tow============== */}
            </View>
          )}
          {/* ==============Table============== */}
        </View>
        {/* ==============container============== */}
      </SafeAreaView>
    </>
  );
  s;
};

export default connect(null, {get_order})(Orders);

const styles = StyleSheet.create({
  summaryView: {
    width: '100%',
    height: 100,

    justifyContent: 'center',
    paddingLeft: 20,
  },
  ///========Summary Button
  summaryButton: {
    width: 100,
    height: 50,
    backgroundColor: '#007aff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ///========dropdown
  dropDownView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dropDownViewRight: {
    width: 100,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    marginHorizontal: 3,
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  ///========dropdown
  pickerBoxInner: {
    borderWidth: 0.6,
    borderColor: 'black',
    borderRadius: 2,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  pickerBoxIcon: {
    position: 'absolute',
    right: 0,
    fontSize: 23,
    color: 'red',
  },
  pickerStyle: {
    width: '120%',
    paddingBottom: 0,
    paddingLeft: 0,
    transform: [{scaleX: 0.85}, {scaleY: 0.85}],
    left: -10,
    position: 'absolute',
    backgroundColor: 'transparent',
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
  },

  ///=========Table
  table: {
    width: '100%',

    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 50,
    backgroundColor: '#007aff',
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
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

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
    fontSize: 16,
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
    width: '25%',
    height: '100%',

    justifyContent: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 7,
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
    height: 30,

    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  secondTableColum: {
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  ///========Second table
});
