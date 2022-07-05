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
import Entypo from 'react-native-vector-icons/Entypo';

import {get_order} from '../../actions/order';
import {connect, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import ImageLoder from '../../components/lodder/imageLodder';

const Orders = ({get_order, navigation, route}) => {
  const isFocused = useIsFocused();
  // const [order, setOrder] = useState([]);
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

        <View style={styles.container}>
          {/* ==============top============== */}
          <View style={styles.topView}>
            <View style={styles.topItem1}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>
                  <Entypo name="cross" size={24} color="black" />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.topItem}>
              <Text style={{fontWeight: '900', fontSize: 18, color: 'black'}}>
                Orders
              </Text>
            </View>
            <View style={styles.topItem}>
              <Text style={{fontWeight: '700', fontSize: 15, color: 'black'}}>
                Reset
              </Text>
            </View>
          </View>
          {/* ==============top============== */}

          {/* ==============Table============== */}
          {order.length == 0 ? (
            <ImageLoder />
          ) : (
            <View style={styles.table}>
              {/* ===================table Tow============== */}
              <View style={{...styles.tableRow}}>
                <View
                  style={{...styles.tableRowColum, backgroundColor: '#ffffd1'}}>
                  <Text style={{...styles.boxText, color: 'black'}}>
                    Inventory Id
                  </Text>
                </View>
                <View
                  style={{...styles.tableRowColum, backgroundColor: '#b3b3b3'}}>
                  <Text style={styles.boxText}>Order Type</Text>
                </View>
                <View
                  style={{...styles.tableRowColum, backgroundColor: '#b3b3b3'}}>
                  <Text style={styles.boxText}>Status</Text>
                </View>
                <View
                  style={{...styles.tableRowColum, backgroundColor: '#b3b3b3'}}>
                  <Text style={styles.boxText}>Address</Text>
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
                      style={styles.tableRow1}>
                      <View style={styles.tableRowColum1}>
                        <Text style={styles.boxText1}>{item.Inventory_ID}</Text>
                      </View>
                      <View style={styles.tableRowColum1}>
                        <Text style={styles.boxText1}>{item.Order_Type}</Text>
                      </View>
                      <View style={styles.tableRowColum1}>
                        <Text style={styles.boxText1}>{item.Status}</Text>
                      </View>
                      <View style={styles.tableRowColum1}>
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

          {/* ==============Container============== */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default connect(null, {get_order})(Orders);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 10,
    marginBottom: 50,
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
    height: 50,
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
