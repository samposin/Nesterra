import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const Inactive = () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{}}>
      {/* ============== Check Box Header ===================== */}
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sites</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Circuits</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Devices</Text>
      </View>

      <View style={styles.checkedColum}>
        <View style={{width: '30%', height: 200}}></View>
        <View
          style={{
            width: '30%',
          }}>
          <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>MPLS</Text>
          </View>
          <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>UVN</Text>
          </View>
          <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>Wireless</Text>
          </View>
          <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>VolP</Text>
          </View>
          <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>Broadband</Text>
          </View>
        </View>

        <View style={{width: '30%', height: 200}}></View>
      </View>
      {/* ============== Check Box Header ===================== */}
    </View>
  );
};

export default Inactive;

const styles = StyleSheet.create({
  checkedColum: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  singleCheckBoxrow: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
