import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from 'react-native-paper';

const Inactive = () => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={{width: '100%', height: '100%'}}>
      {/* ============= */}
      <View style={styles.textRow}>
        <View style={styles.leftRow}></View>
        <View style={styles.rightRow}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Circuits</Text>
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
          <Text>MPLS</Text>
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
          <Text>UVN</Text>
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
          <Text>Wireless</Text>
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
          <Text>VolP</Text>
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
          <Text>Broadband</Text>
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
          <Text>Instant Issue</Text>
        </View>
      </View>
      {/* =========checkBox Row========== */}
      {/* ============= */}
    </View>
  );
};

export default Inactive;

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
