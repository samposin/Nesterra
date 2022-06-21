import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const Both = () => {
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked5, setChecked5] = useState(false);
  return (
    <View style={{width: '100%', height: '100%'}}>
      {/* ============= */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.rightRow}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Devices</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.checkRight}>
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
      {/* =========checkBox Row========== */}

      {/* =========checkBox Row========== */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.checkRight}>
          <Checkbox
            status={checked1 ? 'checked1' : 'unchecked'}
            onPress={() => {
              setChecked1(!checked1);
            }}
            color="#1b5a90"
          />
          <Text>Switches</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
      {/* =========checkBox Row========== */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.checkRight}>
          <Checkbox
            status={checked2 ? 'checked2' : 'unchecked'}
            onPress={() => {
              setChecked(!checked2);
            }}
            color="#1b5a90"
          />
          <Text>FireWalls</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
      {/* =========checkBox Row========== */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.checkRight}>
          <Checkbox
            status={checked3 ? 'checked3' : 'unchecked'}
            onPress={() => {
              setChecked3(!checked3);
            }}
            color="#1b5a90"
          />
          <Text>Load Balancers</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}

      {/* =========checkBox Row========== */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.checkRight}>
          <Checkbox
            status={checked4 ? 'checked4' : 'unchecked'}
            onPress={() => {
              setChecked4(!checked4);
            }}
            color="#1b5a90"
          />
          <Text>Servers</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
      {/* =========checkBox Row========== */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.checkRight}>
          <Checkbox
            status={checked5 ? 'checked5' : 'unchecked'}
            onPress={() => {
              setChecked5(!checked5);
            }}
            color="#1b5a90"
          />
          <Text>Printer</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
      {/* ============= */}
    </View>
  );
};

export default Both;

const styles = StyleSheet.create({
  textRow: {
    width: '100%',
    height: 25,

    flexDirection: 'row',
  },
  leftRow: {
    width: '45%',
    height: '100%',
  },
  rightRow: {
    width: '55%',
    height: '100%',
  },
  checkRight: {
    width: '55%',
    height: '100%',

    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -10,
  },
});
