import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import moment from 'moment';
import {tostalert} from '../../helper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const addToList = async item1 => {
    // console.log(item1);
    try {
      const seasonToAdd = {
        id: item.Device_Name,
      };
      const storedValue = await AsyncStorage.getItem('@device_List');
      const prevList = await JSON.parse(storedValue);
      // console.log(typeof prevList)
      if (!prevList) {
        const newList = [seasonToAdd];

        await AsyncStorage.setItem('@device_List', JSON.stringify(newList));
      } else {
        const dd = prevList.find(i => i.id === item1);
        console.log(prevList, dd);
        if (dd) {
          tostalert('Already Added');
        } else {
          prevList.push(seasonToAdd);
          await AsyncStorage.setItem('@device_List', JSON.stringify(prevList));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const getList = async () => {
  //   const storedValue = await AsyncStorage.getItem('@device_List');
  //   if (!storedValue) {
  //     setListOfSeasons([]);
  //   }
  //   const list = JSON.parse(storedValue);
  //   setListOfSeasons(list);
  // };
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
      <View
        style={{
          width: '100%',
          height: 60,
          alignItems: 'flex-end',
          paddingRight: 15,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            addToList(item.Device_Name);
          }}>
          <Text>
            <EvilIcons name="heart" size={30} color="#007aff" />
          </Text>
        </TouchableOpacity>
      </View>
      <BottomSheetScrollView style={{paddingHorizontal: 10}}>
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
                backgroundColor: item.Device_Name ? '#deebf7' : 'white',
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
            title="Site Type Primary"
            value={
              item.Site_Type_Hierarchical ? item.Site_Type_Hierarchical : '--'
            }
          />
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
          <YellowRow
            title="Last Patch Date"
            value={
              item.LDoS_Date
                ? moment(item.Last_Patch_Date).format('MM-DD-YY')
                : '--'
            }
          />
          <GrewLightRow
            title="EOL Count"
            value={item.EOL_Count ? item.EOL_Count : '--'}
          />
          <GrewLightRow
            title="Upgraded Code"
            value={item.Upgraded_Code ? item.Upgraded_Code : '--'}
          />
          <GrewLightRow
            title="Compliant"
            value={item.Compliant ? item.Compliant : '--'}
          />
          <GrewLightRow
            title="Compliant"
            value={item.Compliant ? item.Compliant : '--'}
          />
          <GrewLightRow
            title="Non Compliant"
            value={item.Non_Compliant ? item.Non_Compliant : '--'}
          />
          <GrewLightRow
            title="In Progress"
            value={item.In_Progress ? item.In_Progress : '--'}
          />
          <GrewLightRow
            title="Vulnerability SLA Target"
            value={
              item.Vulnerability_SLA_Achievement_Target
                ? moment(item.Vulnerability_SLA_Achievement_Target).format(
                    'YYYY-MM-DD',
                  )
                : '--'
            }
          />
          <GrewLightRow
            title="Prod Rel Team"
            value={item.Prod_Rel_Team ? item.Prod_Rel_Team : '--'}
          />
          <GrewLightRow
            title="Compiled"
            value={item.Compiled ? item.Compiled : '--'}
          />
          <GrewLightRow
            title="Alt System Description"
            value={
              item.Alternate_System_Description
                ? item.Alternate_System_Description
                : '--'
            }
          />
          <GrewLightRow
            title="Alt Device Name"
            value={
              item.Alternative_Device_Name ? item.Alternative_Device_Name : '--'
            }
          />
          <GrewLightRow
            title="NB First Discovery Time"
            value={
              item.NB_First_Discovery_Time
                ? moment(item.NB_First_Discovery_Time).format('YYYY-MM-DD')
                : '--'
            }
          />
          <GrewLightRow
            title="NB Last Discovery Time"
            value={
              item.NB_Last_Discovery_Time
                ? moment(item.NB_Last_Discovery_Time).format('YYYY-MM-DD')
                : '--'
            }
          />

          <View style={{height: 60, width: '100%'}}></View>
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
