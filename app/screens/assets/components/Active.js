import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const Active = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{width: '100%', height: '100%'}}>
      {/* ============= */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.rightRow}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Sites</Text>
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
          <Text>Offices</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}

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
          <Text>Branches</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
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
          <Text>ATMs</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
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
          <Text>DCs</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}

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
          <Text>Carrrier Colors</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
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
          <Text>3rd Partys</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
      {/* ============= */}
    </View>
  );
};

export default Active;

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
