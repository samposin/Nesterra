import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Details = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          textAlign: 'center',
          color: '#4472c4',
          fontSize: 22,
          fontWeight: 'bold',
        }}>
        Invetory Details
      </Text>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 16,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Active Site Count
      </Text>
      {/* ================== Table Header======= */}
      <View style={styles.tableHeaderView}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Location Type</Text>
          <Text style={styles.headerText}>States</Text>
          <Text style={styles.headerText}>Cities</Text>
          <Text style={styles.headerText}>QuantiTy</Text>
          <Text style={styles.headerText}>Unique Location</Text>
        </View>

        <View style={styles.tableHeaderIcon}>
          <AntDesign name="caretdown" size={12} color="black" />
        </View>
      </View>

      {/* ================== Table Header======= */}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 250,
    paddingTop: 25,
  },
  //table
  tableHeaderView: {
    width: '100%',
    height: 50,
  },
  tableHeader: {
    width: '100%',
    height: '70%',

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tableHeaderIcon: {
    width: '100%',
    height: '30%',
    paddingLeft: 10,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  //table
});
