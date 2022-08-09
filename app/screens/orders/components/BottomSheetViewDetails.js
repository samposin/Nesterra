// import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
// import React, {useMemo} from 'react';
// import Entypo from 'react-native-vector-icons/Entypo';

// import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
// import {useSelector} from 'react-redux';

// import moment from 'moment';
// import Lodder from '../../../components/lodder';
// import OrderLoder from '../../../components/lodder/OrderLoder';
// OrderLoder;
// const BottomSheetViewDetails = ({bottomSheetRefdetails, lodding}) => {
//   const snapPoints = useMemo(() => ['20%', '50%', '95%'], []);

//   const {item} = useSelector(state => state.OrderDetails);
//   console.log(item);
//   return (
//     <>
//       <BottomSheet
//         handleIndicatorStyle={{
//           backgroundColor: '#757575',
//           height: 2.5,
//           opacity: 0.5,
//         }}
//         enabledInnerScrolling={true}
//         enabledContentGestureInteraction={false}
//         ref={bottomSheetRefdetails}
//         index={-1}
//         snapPoints={snapPoints}
//         enablePanDownToClose={true}
//         animateOnMount
//         animatedPosition={true}>
//         <View style={styles.top}>
//           <TouchableOpacity
//             onPress={() => bottomSheetRefdetails.current.close()}>
//             <View style={styles.closeBottoSheet}>
//               <Text>
//                 <Entypo name="cross" size={20} color="white" />
//               </Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <BottomSheetScrollView style={{paddingHorizontal: 10}}>
//           {/* ============== Second Table============== */}
//           {!lodding ? (
//             <>
//               {/* ===================== */}
//               {item?.Smart_Site_Order_No ? (
//                 <View style={{...styles.secondTableRow}}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       SmartSites#
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Smart_Site_Order_No}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}
//               {item?.Circuit_Status ? (
//                 <View style={{...styles.secondTableRow}}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Circuit Status
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor:
//                         item.Circuit_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Circuit_Status}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}
//               {item?.Associated_ID ? (
//                 <View style={{...styles.secondTableRow}}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Assoc ID
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Associated_ID}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}

//               {item?.LEC_ID ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       LEC ID
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.LEC_ID}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}

//               {item?.Address ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#b7ecff',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Full Address
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Address}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}

//               {item?.Vendor ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#fbe5d6',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Vendor
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Vendor}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}
//               {/* ===================== */}
//               {item?.Category ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#fbe5d6',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Category
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Category}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}

//               {/* ===================== */}
//               {item?.SubCat_1 ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#fbe5d6',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       SubCat1
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.SubCat_1}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}
//               {item?.SubCat_2 ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#fbe5d6',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       SubCat2
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.SubCat_2}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}
//               {/* ===================== */}
//               {item?.SubCat_3 ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#fbe5d6',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       SubCat3
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.SubCat_3}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}
//               {item?.Whitelist_Use_Type ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#fbe5d6',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Whitelist Type
//                     </Text>
//                   </View>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Whitelist_Use_Type}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ===================== */}
//               {item?.Vendor_Account_Number ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Vendor Account
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Vendor_Account_Number}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}
//               {/* ===================== */}
//               {item?.Summary_Account_Number ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Summary Account
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Summary_Account_Number}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}
//               {/* ====================== */}
//               {item?.Mbps ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Mbps
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Mbps}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}
//               {/* ====================== */}
//               {item?.circuit_charge ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#e2f0d9',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       Circuit Cost(M)
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       ${item.circuit_charge}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ====================== */}
//               {item?.GL ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#e2f0d9',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>GL</Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.GL}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               {/* ====================== */}
//               {item?.RC ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#e2f0d9',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>RC</Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.RC}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}
//               {/* ====================== */}
//               {item?.Location_B_End ? (
//                 <View style={styles.secondTableRow}>
//                   <View
//                     style={{
//                       ...styles.secondTableColum,
//                       backgroundColor: '#deebf7',
//                     }}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       B-End Location
//                     </Text>
//                   </View>
//                   <View style={styles.secondTableColum}>
//                     <Text style={{fontWeight: '700', color: 'black'}}>
//                       {item.Location_B_End}
//                     </Text>
//                   </View>
//                 </View>
//               ) : null}

//               <View
//                 style={{height: 30, width: '100%', borderTopWidth: 1}}></View>
//             </>
//           ) : (
//             <OrderLoder />
//           )}

//           {/* ==============Container============== */}
//         </BottomSheetScrollView>
//       </BottomSheet>
//     </>
//   );
// };

// export default BottomSheetViewDetails;

// const styles = StyleSheet.create({
//   top: {
//     width: '100%',
//     height: 40,

//     alignItems: 'flex-end',
//     justifyContent: 'center',
//     paddingRight: 30,
//   },
//   //close BottomSheet button
//   closeBottoSheet: {
//     width: 24,
//     height: 24,
//     borderRadius: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#007aff',
//   },
//   //close BottomSheet button

//   textView: {
//     width: '100%',
//     height: 50,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 15,
//   },
//   searchView: {
//     width: '90%',
//     height: 50,

//     alignSelf: 'center',
//     borderColor: 'black',
//     paddingLeft: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//     flexDirection: 'row',
//   },
//   searchViewLeft: {
//     width: '90%',
//     height: '100%',
//   },
//   searchViewRight: {
//     width: '10%',
//     height: '100%',
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',

//     paddingRight: 5,
//   },
//   ///////////////////////////////
//   container: {
//     flex: 1,
//     borderWidth: 1,
//     borderColor: '#000000',
//     margin: 10,
//     marginBottom: 5,
//     borderBottomWidth: 0,
//     borderRadius: 5,
//   },
//   topView: {
//     height: 50,
//     width: '100%',
//     flexDirection: 'row',
//   },
//   topItem: {
//     width: '33.33%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   topItem1: {
//     width: '33.33%',
//     height: '100%',
//     justifyContent: 'center',
//     paddingLeft: 10,
//   },

//   ///=========data row
//   tableRow1: {
//     width: '100%',
//     height: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignSelf: 'center',
//   },
//   tableRowColum1: {
//     width: '23%',
//     height: '100%',
//     marginHorizontal: 2,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   boxText1: {
//     fontSize: 14,
//     color: '#000000',
//   },
//   ///=========data row
//   ///========Second table
//   secondTable: {
//     width: '95%',
//     marginTop: 20,
//     alignSelf: 'center',
//   },
//   secondTableRow: {
//     width: '100%',

//     flexDirection: 'row',
//     borderBottomColor: 'black',
//     borderBottomWidth: 1,
//     borderLeftColor: 'black',
//     borderLeftWidth: 1,
//   },
//   secondTableRow1: {
//     width: '100%',
//     height: 30,
//     flexDirection: 'row',
//   },
//   secondTableColum: {
//     width: '50%',
//     height: '100%',
//     borderRightColor: 'black',
//     borderRightWidth: 1,
//     paddingLeft: 10,
//     justifyContent: 'center',
//   },
//   ///========Second table
// });
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import OrderLoder from '../../../components/lodder/OrderLoder';
const BottomSheetViewDetails = ({bottomSheetRefdetails, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.OrderDetails);
  console.log(item);

  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={bottomSheetRefdetails}
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
        <TouchableOpacity onPress={() => bottomSheetRefdetails.current.close()}>
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
            {item?.Smart_Site_Order_No ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SmartSites#
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Smart_Site_Order_No}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.PON ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>PON</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.PON}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Order_Number ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Order Number
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Order_Number}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Order_Type ? (
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
                    backgroundColor:
                      item.Order_Type == 'Add' ? '#c6efcd' : '#e7c4b5',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Order_Type}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Inventory_ID ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#f2f2f2',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Inventory ID
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Inventory_ID}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Status ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#f2f2f2',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Status
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor:
                      item.Status == 'Completed' ? '#c6efcd' : '#e7c4b5',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Status}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Address ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Address
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Address}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Branch_ID ? (
              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Branch ID
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Branch_ID}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Initiation_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Initiation Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Initiation_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}

            {item?.Creation_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Creation Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Creation_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}

            {item?.FOC_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    FOC Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.FOC_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}

            {item?.Order_Completion_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Completion_Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Order_Completion_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}

            {item?.Bill_Stop_Date ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Bill Stop Date
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {moment(item.Bill_Stop_Date).format('DD-MM-YYYY')}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {item?.Vendor ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Vendor
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Vendor}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Category ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Category
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Category}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}

            {/* ============== Second Table Row============== */}
            {/* ============== Second Table Row============== */}
            {/* ===================== */}
            {item?.SubCat_1 ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SubCat1
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.SubCat_1}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.SubCat_2 ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SubCat2
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.SubCat_2}
                  </Text>
                </View>
              </View>
            ) : null}
            {item?.SubCat_3 ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    SubCat3
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.SubCat_3}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Whitelist_Use_Type ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Whitelist Type
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.secondTableColum,
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Whitelist_Use_Type}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ===================== */}
            {/* ===================== */}
            {item?.Vendor_Account_Number ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Vendor Account
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Vendor_Account_Number}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ===================== */}
            {item?.Summary_Account_Number ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Summary Account
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Summary_Account_Number}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {item?.Mbps ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>Mbps</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Mbps}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {item?.circuit_charge ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Circuit Cost(M)
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    ${item.circuit_charge}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {/* ====================== */}
            {item?.GL ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>GL</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.GL}
                  </Text>
                </View>
              </View>
            ) : null}

            {/* ====================== */}
            {item?.RC ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>RC</Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.RC}
                  </Text>
                </View>
              </View>
            ) : null}
            {/* ====================== */}
            {item?.Location_B_End ? (
              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    B-End Location
                  </Text>
                </View>
                <View style={styles.secondTableColum}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Location_B_End}
                  </Text>
                </View>
              </View>
            ) : null}

            <View style={{height: 30, width: '100%', borderTopWidth: 1}}></View>
          </>
        ) : (
          <OrderLoder />
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetViewDetails;

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
    borderTopWidth: 1,
    borderBottomColor: 'black',

    borderLeftColor: 'black',
    borderLeftWidth: 1,
  },
  secondTableRow1: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
  },
  secondTableColum: {
    width: '50%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
});
