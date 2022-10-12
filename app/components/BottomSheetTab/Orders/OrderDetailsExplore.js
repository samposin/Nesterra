import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import OrderLoder from '../../lodder/OrderLoder';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import moment from 'moment';

const OrderDetailsExplore = ({orderRefExplore, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.orderDetailsExplore);

  // console.log(item);
  const selectedComponent = item => {
    // console.log(item);
    switch (true) {
      case item === 'Add':
        return '#c6efcd';
      case item === 'Change':
        return '#ffc8ce';
      case item === 'Cancelled':
        return '#ffc8ce';
      case item === 'Completed':
        return '#c6efcd';
    }
  };
  const LightSkyRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const LightGrewRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#f2f2f2',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const YellowRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#ffffcc',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const GrewRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#deebf7',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const OrangeLightRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#fbe5d6',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const SkyRow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#b7ecff',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
            borderLeftWidth: 0.7,
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{value}</Text>
        </View>
      </View>
    );
  };
  const DarkYellow = ({title, value}) => {
    return (
      <View style={{...styles.secondTableRow}}>
        <View
          style={{
            ...styles.secondTableColum,
            backgroundColor: '#e2f0d9',
          }}>
          <Text style={{fontWeight: '700', color: 'black'}}>{title}</Text>
        </View>
        <View
          style={{
            ...styles.secondTableColum,
            borderLeftColor: 'black',
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
        height: 0,
        opacity: 0.5,
      }}
      handleComponent={() => (
        <View style={styles.closeLineContainer}>
          <View style={styles.closeLine}>
            <SimpleLineIcons name="arrow-up" size={20} color="black" />
          </View>
        </View>
      )}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={orderRefExplore}
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
        <TouchableOpacity onPress={() => orderRefExplore.current.close()}>
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
            <LightSkyRow title="SmartSites#" value={item.Smart_Site_Order_No} />
            <LightSkyRow title="Tangoe#" value={'--'} />
            <LightSkyRow title="Carrier#" value={'--'} />
            {/* <LightSkyRow title="PON" value={item.PON} />
            <LightSkyRow title="Order Number" value={item.Order_Number} /> */}
            <LightGrewRow title="Project Assignment" value={item.Project} />
            <LightGrewRow
              title="Technical Contact"
              value={item.Technical_Contact_Name}
            />
            <View style={{...styles.secondTableRow}}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#f2f2f2',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  Order Type
                </Text>
              </View>
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,

                  backgroundColor: selectedComponent(item.Order_Type),
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Order_Type}
                </Text>
              </View>
            </View>

            {/* <LightGrewRow title="Order Type" value={item.Order_Type} /> */}
            <LightGrewRow title="Inventory ID" value={item.Inventory_ID} />

            {/* ===================== */}

            <View style={{...styles.secondTableRow}}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#f2f2f2',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>Status</Text>
              </View>
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,

                  backgroundColor:
                    item.Status == 'Completed' ? '#c6efcd' : '#e7c4b5',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Status}
                </Text>
              </View>
            </View>

            {/* ===================== */}
            <SkyRow title="Site Id" value={item.Location_ID} />
            <SkyRow title="Address" value={item.Address} />
            <SkyRow title="Branch ID" value={item.Branch_ID} />

            <YellowRow
              title="Initiation Date"
              value={moment(item.Initiation_Date).format(
                'YYYY/MM/DD HH:mm:ss A',
              )}
            />
            <YellowRow
              title="Creation Date"
              value={moment(item.Creation_Date).format('YYYY/MM/DD HH:mm:ss A')}
            />
            <YellowRow
              title="FOC Date"
              value={moment(item.FOC_Date).format('YYYY/MM/DD HH:mm:ss A')}
            />
            <YellowRow
              title="Completion Date"
              value={moment(item.Order_Completion_Date).format(
                'YYYY/MM/DD HH:mm:ss A',
              )}
            />
            <YellowRow
              title="Bill Stop Date"
              value={
                item.Bill_Stop_Date
                  ? moment(item.Bill_Stop_Date).format('YYYY/MM/DD HH:mm:ss A')
                  : '--'
              }
            />
            <OrangeLightRow
              title="Vendor"
              value={item.Vendor ? item.Vendor : '--'}
            />
            <OrangeLightRow
              title="Category"
              value={item.Category ? item.Category : '--'}
            />
            <OrangeLightRow
              title="Sub Category"
              value={item.Subcat_1 ? item.Subcat_1 : '--'}
            />
            <DarkYellow title="RC" value={item.RC ? item.RC : '--'} />
            <DarkYellow title="GL" value={item.GL ? item.GL : '--'} />
            <DarkYellow
              title="Monthly Cost"
              value={
                item.Monthly_Recurring_Cost
                  ? `$${item.Monthly_Recurring_Cost}`
                  : '--'
              }
            />
            <DarkYellow
              title="Annual Cost"
              value={item.Annual_Cost ? `$${item.Annual_Cost}` : '--'}
            />

            <View style={{height: 70, width: '100%'}}></View>
          </>
        ) : (
          <OrderLoder />
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default OrderDetailsExplore;

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
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderBottomColor: 'black',

    // borderLeftColor: 'black',
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

    // borderRightColor: 'black',
    // borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  closeLineContainer: {
    alignSelf: 'center',
  },
  closeLine: {
    width: 30,
    height: 30,
    borderRadius: 3,
    marginTop: 9,

    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
