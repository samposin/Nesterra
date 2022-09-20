import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import moment from 'moment';
import OrderLoder from '../../../components/lodder/OrderLoder';
const BottomSheetViewDevices = ({deviceRefDetails, setDeviveView, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.allDeviceDetails);
  // console.log(item, 'pp');
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={deviceRefDetails}
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
          paddingRight: 15,
        }}>
        <TouchableOpacity
          onPress={() => {
            setDeviveView(true);

            deviceRefDetails.current.close();
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
        <>
          {lodding ? (
            <OrderLoder />
          ) : (
            <>
              {/* ===================== */}

              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Name
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Device_Name}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: item?.Device_Name ? '#deebf7' : 'red',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Status
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.tt,
                    backgroundColor:
                      item?.Device_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Device_Status}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={{...styles.secondTableRow}}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Vendor
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item.Device_Vendor}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Type
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Device_Type}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Function
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Device_Function}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Layer
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Device_Layer}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#fbe5d6',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Device Details
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Device_Details}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              {/* ============== Second Table Row============== */}
              {/* ============== Second Table Row============== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Branch ID
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Branch_ID}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Site Status
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.tt,
                    backgroundColor: item?.Site_Status ? '#c6efcd' : '#e7c4b5',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Site_Status}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#b7ecff',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Site Type Concatenated Detail
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.tt,
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Site_Type_Concatenated_Detail}
                  </Text>
                </View>
              </View>

              {/* ===================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Service ID
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Service_ID}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Domain
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Domain}
                  </Text>
                </View>
              </View>

              {/* ====================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Loopback Address
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Loopback_Address}
                  </Text>
                </View>
              </View>

              {/* ====================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Serial Number
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Serial_Number}
                  </Text>
                </View>
              </View>

              {/* ====================== */}
              {/* ====================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>Model</Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Model}
                  </Text>
                </View>
              </View>

              {/* ====================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    MAC ID
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.MAC_ID}
                  </Text>
                </View>
              </View>

              {/* ====================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Hardware Version
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Hardware_Version}
                  </Text>
                </View>
              </View>

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Software Version
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Software_Version}
                  </Text>
                </View>
              </View>

              {/* ====================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Management Interface
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Management_Interface}
                  </Text>
                </View>
              </View>

              {/* ====================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Associated Circuit
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Associated_Circuit}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    System Description
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.System_Description?.substr(1, 22)}...
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Config Compliance
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Config_Compliance}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Code Compliance
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Code_Compliance}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Responsible Engineer
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Responsible_Engineer?.substr(1, 20)}...
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Responsible Engineer Validation Date
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Responsible_Engineer_Validation_Date
                      ? moment(
                          item?.Responsible_Engineer_Validation_Date,
                        ).format('DD-MM-YYYY')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Last Polled
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Last_Polled_or_Discovery}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Maint Plan
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Maintenance_Coverage_Plan?.substr(1, 20)}...
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Maint Cost(M)
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Maintenance_M}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    License Cost(M)
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.License_M}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#e2f0d9',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Resale Value
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Resale_Value}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Purchase Date
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Purchase_Date
                      ? moment(item?.Purchase_Date).format('DD-MM-YYYY')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Decom_Date
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Decom_Date
                      ? moment(item?.Decom_Date).format('DD-MM-YYYY')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    EOL Date
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.EOL_Date
                      ? moment(item?.EOL_Date).format('DD-MM-YYYY')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    EOS Date
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.EOS_Date
                      ? moment(item?.EOS_Date).format('DD-MM-YYYY')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    LDoS Date
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.LDoS_Date
                      ? moment(item?.LDoS_Date).format('DD-MM-YYYY')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#ffffcc',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    LDoS Date
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Last_Patch_Date
                      ? moment(item?.Last_Patch_Date).format('DD-MM-YYYY')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    EOL Count
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.EOL_Count}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Upgraded Code
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Upgraded_Code}
                  </Text>
                </View>
              </View>

              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Compliant
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Compliant}
                  </Text>
                </View>
              </View>

              {/* ===================== 01/08/ */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#dedbf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Non Compliant
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Non_Compliant}
                  </Text>
                </View>
              </View>

              {/* ==================== */}
              {/* ===================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    In Progress
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.In_Progress}
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Vulnerability SLA Target
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Vulnerability_SLA_Achievement_Target
                      ? moment(
                          item?.Vulnerability_SLA_Achievement_Target,
                        ).format('YYYY-MM-DD')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Prod Rel Team
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    {item?.Prod_Rel_Team}
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Compiled
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {item?.Compiled
                      ? moment(item?.Compiled).format('YYYY-MM-DD')
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Alt System Description
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {item?.Alternate_System_Description?.substr(1, 20)}...
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    Alt Device Name
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {item?.Alternative_Device_Name}
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View style={styles.secondTableRow}>
                <View
                  style={{
                    ...styles.secondTableColum,
                    backgroundColor: '#deebf7',
                  }}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    NB First Discovery Time
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {item?.NB_First_Discovery_Time
                      ? moment(item?.NB_First_Discovery_Time).format(
                          'YYYY-MM-DD',
                        )
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View style={styles.secondTableRow}>
                <View style={styles.tt}>
                  <Text style={{fontWeight: '700', color: 'black'}}>
                    NB Last Discovery Time
                  </Text>
                </View>
                <View style={styles.tt}>
                  <Text
                    style={{
                      fontWeight: '700',
                      color: 'black',
                      marginVertical: 3,
                    }}>
                    {item?.NB_Last_Discovery_Time
                      ? moment(item?.NB_Last_Discovery_Time).format(
                          'YYYY-MM-DD',
                        )
                      : '--'}
                  </Text>
                </View>
              </View>

              {/* ==================== */}

              <View
                style={{height: 80, width: '100%', borderTopWidth: 0}}></View>
            </>
          )}
        </>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default BottomSheetViewDevices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 0,
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
    width: '100%',
    marginTop: 20,
    alignSelf: 'center',
  },
  secondTableRow: {
    width: '100%',
    height: 50,

    flexDirection: 'row',
    // borderTopColor: 'black',
    // borderTopWidth: 1,
    borderBottomColor: 'black',
    borderBottomWidth: 0.8,

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

    paddingLeft: 10,
    justifyContent: 'center',
  },
  secondTableColum2: {
    width: '50%',
    height: '100%',

    paddingLeft: 10,
    justifyContent: 'center',
  },
  tt: {
    width: '50%',
    height: '100%',
    backgroundColor: '#deebf7',
    borderLeftColor: 'black',
    borderLeftWidth: 0.5,

    paddingLeft: 10,
    justifyContent: 'center',
  },
});
