import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import OrderLoder from '../../../components/lodder/OrderLoder';
const DeviceDetailsExplore = ({deviceRefExplore, bottomSheetRef, lodding}) => {
  const snapPoints = useMemo(() => ['20%', '47%', '95%'], []);
  // const {inv_Id} = route.params;
  const {item} = useSelector(state => state.deviceDetailsExplore);
  const {id} = useSelector(state => state.deviceDetailsExplore);
  // console.log(id, 'device');
  // //
  // console.log(item, 'pp');
  const GrewRow = ({title, value}) => {
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
  const GrewLightRow = ({title, value}) => {
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
  const YellowDarkRow = ({title, value}) => {
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
  return (
    <BottomSheet
      handleIndicatorStyle={{
        backgroundColor: '#757575',
        height: 2.5,
        opacity: 0.5,
      }}
      enabledInnerScrolling={true}
      enabledContentGestureInteraction={false}
      ref={deviceRefExplore}
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
        <TouchableOpacity onPress={() => deviceRefExplore.current.close()}>
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
          {/* ===================== */}

          <View style={{...styles.secondTableRow}}>
            <View
              style={{
                ...styles.secondTableColum,
                backgroundColor: '#ffc8ce',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                Device Name
              </Text>
            </View>

            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Device_Name}
              </Text>
            </View>
          </View>

          {/* ===================== */}
          {/* ===================== */}

          <View style={{...styles.secondTableRow}}>
            <View
              style={{
                ...styles.secondTableColum,
                backgroundColor: item.Device_Name ? '#ffc8ce' : 'red',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                Device Status
              </Text>
            </View>
            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
                backgroundColor:
                  item.Device_Status == 'Active' ? '#c6efcd' : '#e7c4b5',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Device_Status}
              </Text>
            </View>
          </View>

          {/* ===================== */}
          {/* ===================== */}
          <GrewRow title="Vendor" value={item.Device_Vendor} />
          <GrewRow title="Device Type" value={item.Device_Type} />
          <GrewRow title="Environment" value={item.Device_Environment} />
          <GrewRow title="Device Function" value={item.Device_Function} />
          <GrewRow title="Device Layer" value={item.Device_Layer} />
          <GrewRow
            title="Device Details"
            value={item.Device_Details ? item.Device_Details : '--'}
          />
          <SkyRow
            title="Branch ID"
            value={item.Branch_ID ? item.Branch_ID : '--'}
          />

          <View style={styles.secondTableRow}>
            <View
              style={{
                ...styles.secondTableColum,
                backgroundColor: '#b7ecff',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>Site ID</Text>
            </View>

            <TouchableOpacity
              onPress={() => {
                deviceRefExplore.current.close();
                bottomSheetRef.current.close();
              }}
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text style={{fontWeight: '700', color: '#007aff'}}>{id}</Text>
              <FontAwesome
                name="map-marker"
                style={{marginLeft: 6}}
                size={24}
                color="#007aff"
              />
            </TouchableOpacity>
          </View>

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
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
                backgroundColor: item.Site_Status ? '#c6efcd' : '#e7c4b5',
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Site_Status}
              </Text>
            </View>
          </View>

          <SkyRow
            title="Site Type Detail"
            value={
              item.Site_Type_Concatenated_Detail
                ? item.Site_Type_Concatenated_Detail
                : '--'
            }
          />
          <SkyRow
            title="Address"
            value={item.SmartSite_Address ? item.SmartSite_Address : '--'}
          />
          <GrewLightRow title="Circuits" value={'--'} />
          <GrewLightRow
            title="Service ID"
            value={item.Service_ID ? item.Service_ID : '--'}
          />
          <GrewLightRow
            title="Domain"
            value={item.Domain ? item.Domain : '--'}
          />
          <GrewLightRow
            title="Mgmt Interface"
            value={item.Management_Interface ? item.Management_Interface : '--'}
          />

          <GrewLightRow
            title="IP Address"
            value={item.IP_Address ? item.IP_Address : '--'}
          />
          <GrewLightRow
            title="Loopback Address"
            value={item.Loopback_Address ? item.Loopback_Address : '--'}
          />
          <GrewLightRow
            title="Serial Number"
            value={item.Serial_Number ? item.Serial_Number : '--'}
          />
          <GrewLightRow title="Model" value={item.Model ? item.Model : '--'} />
          <GrewLightRow
            title="MAC ID"
            value={item.MAC_ID ? item.MAC_ID : '--'}
          />
          <GrewLightRow
            title="Hardware Version"
            value={item.Hardware_Version ? item.Hardware_Version : '--'}
          />
          <GrewLightRow
            title="Software Version"
            value={item.Software_Version ? item.Software_Version : '--'}
          />
          <GrewLightRow
            title="System Description"
            value={item.System_Description ? item.System_Description : '--'}
          />
          <GrewLightRow
            title="Config Compliance"
            value={item.Config_Compliance ? item.Config_Compliance : '--'}
          />
          <GrewLightRow
            title="Code Compliance"
            value={item.Code_Compliance ? item.Code_Compliance : '--'}
          />
          <GrewLightRow
            title="Contact Info"
            value={item.Contact_Information ? item.Contact_Information : '--'}
          />
          <GrewLightRow
            title="Responsible Engineer"
            value={item.Responsible_Engineer ? item.Responsible_Engineer : '--'}
          />
          <GrewLightRow
            title="Re Validation Date"
            value={
              item.Responsible_Engineer_Validation_Date
                ? moment(item.Responsible_Engineer_Validation_Date).format(
                    'MM-DD-YY',
                  )
                : '--'
            }
          />
          <GrewLightRow
            title="Last Polled"
            value={
              item.Last_Polled_or_Discovery
                ? item.Last_Polled_or_Discovery
                : '--'
            }
          />
          <YellowDarkRow title="Maint Plan" value={'--'} />
          <YellowDarkRow
            title="Maint Cost(M)"
            value={item.License_M ? item.License_M : '--'}
          />
          <YellowDarkRow title="License Cost(M)" value={'$ 0'} />
          <YellowDarkRow title="Replacement Cost(M)" value={'$ 0'} />
          <YellowDarkRow
            title="ReSale Value"
            value={item.Resale_Value ? item.Resale_Value : '--'}
          />
          <YellowDarkRow
            title="Overhead Cost(M)"
            value={item.Overhead_M ? item.Overhead_M : '--'}
          />
          <YellowRow
            title="Purchase Date"
            value={
              item.Purchase_Date
                ? moment(item.Purchase_Date).format('MM-DD-YY')
                : '--'
            }
          />
          <YellowRow
            title="EOL Date"
            value={
              item.EOL_Date ? moment(item.EOL_Date).format('MM-DD-YY') : '--'
            }
          />
          <YellowRow
            title="EOS Date"
            value={
              item.EOS_Date ? moment(item.EOS_Date).format('MM-DD-YY') : '--'
            }
          />
          <YellowRow
            title="LDoS Date"
            value={
              item.LDoS_Date ? moment(item.LDoS_Date).format('MM-DD-YY') : '--'
            }
          />

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
            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Management_Interface}
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
            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Associated_Circuit}
              </Text>
            </View>
          </View>

          {/* ===================== */}
          {item?.Responsible_Engineer ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Responsible_Engineer.substr(1, 20)}...
                </Text>
              </View>
            </View>
          ) : null}

          {/* ===================== */}
          {item?.Responsible_Engineer_Validation_Date ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.Responsible_Engineer_Validation_Date).format(
                    'DD-MM-YYYY',
                  )}
                  ...
                </Text>
              </View>
            </View>
          ) : null}

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
            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Last_Polled_or_Discovery}
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
            <View
              style={{
                ...styles.secondTableColum,
                borderLeftColor: 'black',
                borderLeftWidth: 0.7,
              }}>
              <Text style={{fontWeight: '700', color: 'black'}}>
                {item.Maintenance_Coverage_Plan}
              </Text>
            </View>
          </View>

          {/* ===================== */}
          {item?.Maintenance_M ? (
            <View style={styles.secondTableRow}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#e2f0d9',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}></Text>
              </View>
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Maintenance_M}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.License_M ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.License_M}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.Resale_Value ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Resale_Value}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.Purchase_Date ? (
            <View style={styles.secondTableRow}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#ffffcc',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}></Text>
              </View>
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.Purchase_Date).format('DD-MM-YYYY')}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.Decom_Date ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.Decom_Date).format('DD-MM-YYYY')}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.EOL_Date ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.EOL_Date).format('DD-MM-YYYY')}
                </Text>
              </View>
            </View>
          ) : null}

          {/* ===================== */}
          {item?.EOS_Date ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.EOS_Date).format('DD-MM-YYYY')}
                </Text>
              </View>
            </View>
          ) : null}

          {/* ===================== */}
          {item?.LDoS_Date ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.LDoS_Date).format('DD-MM-YYYY')}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.Last_Patch_Date ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.Last_Patch_Date).format('DD-MM-YYYY')}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.EOL_Count ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.EOL_Count}
                </Text>
              </View>
            </View>
          ) : null}

          {/* ===================== */}
          {item?.Upgraded_Code ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Upgraded_Code}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== */}
          {item?.Compliant ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Compliant}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ===================== 01/08/ */}
          {item?.Non_Compliant ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Non_Compliant}
                </Text>
              </View>
            </View>
          ) : null}

          {/* ==================== */}
          {/* ===================== */}
          {item?.In_Progress ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.In_Progress}
                </Text>
              </View>
            </View>
          ) : null}

          {/* ==================== */}
          {item?.Vulnerability_SLA_Achievement_Target ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {moment(item.Vulnerability_SLA_Achievement_Target).format(
                    'YYYY-MM-DD',
                  )}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ==================== */}
          {item?.Prod_Rel_Team ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  {item.Prod_Rel_Team}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ==================== */}
          {item?.Compiled ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                    marginVertical: 3,
                  }}>
                  {moment(item.Compiled).format('YYYY-MM-DD')}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ==================== */}
          {item?.Alternate_System_Description ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                    marginVertical: 3,
                  }}>
                  {item.Alternate_System_Description.substr(1, 20)}...
                </Text>
              </View>
            </View>
          ) : null}
          {/* ==================== */}
          {item?.Alternative_Device_Name ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                    marginVertical: 3,
                  }}>
                  {item.Alternative_Device_Name}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ==================== */}
          {item?.NB_First_Discovery_Time ? (
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
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                    marginVertical: 3,
                  }}>
                  {moment(item.NB_First_Discovery_Time).format('YYYY-MM-DD')}
                </Text>
              </View>
            </View>
          ) : null}
          {/* ==================== */}
          {item?.NB_Last_Discovery_Time ? (
            <View style={styles.secondTableRow}>
              <View
                style={{
                  ...styles.secondTableColum,
                  backgroundColor: '#deebf7',
                }}>
                <Text style={{fontWeight: '700', color: 'black'}}>
                  NB Last Discovery Time
                </Text>
              </View>
              <View
                style={{
                  ...styles.secondTableColum,
                  borderLeftColor: 'black',
                  borderLeftWidth: 0.7,
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    color: 'black',
                    marginVertical: 3,
                  }}>
                  {moment(item.NB_Last_Discovery_Time).format('YYYY-MM-DD')}
                </Text>
              </View>
            </View>
          ) : null}

          {/* <View style={{height: 30, width: '100%', borderTopWidth: 1}}></View> */}
        </>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

export default DeviceDetailsExplore;

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
});
