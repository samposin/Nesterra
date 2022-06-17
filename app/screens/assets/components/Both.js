import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const Both = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{}}>
      {/* ============== Check Box Header ===================== */}
      <View
        style={{
          width: '100%',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sites</Text>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Circuits</Text> */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            backgroundColor: 'red',
          }}>
          Devices
        </Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '52%',
            height: 30,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#1b5a90"
          />
          <Text>Routers</Text>
        </View>
      </View>

      <View style={{...styles.checkedColum}}>
        {/* <View style={{width: '30%', height: 200}}></View>
        <View style={{width: '30%', height: 200}}></View> */}
        <View
          style={{
            width: '30%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={styles.singleCheckBoxrow}></View>
          {/* <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="red"
            />
            <Text>Switches</Text>
          </View> */}
          {/* <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>FireWalls</Text>
          </View> */}
          {/* <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>Load Balancers</Text>
          </View> */}
          {/* <View style={styles.singleCheckBoxrow}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#1b5a90"
            />
            <Text>Servers</Text>
          </View> */}
        </View>
      </View>
      {/* ============== Check Box Header ===================== */}
    </View>
  );
};

export default Both;

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
