import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import TabView from './components/TabView';

const Assets = () => {
  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        <View style={styles.container}>
          <TabView />
          {/* ==============Button============== */}
          {/* <View style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('active');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'active' ? '#4ead5b' : '#4ead5b',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('inactive');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'inactive' ? '#ea3323' : '#ea3323',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Inactive
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setButtonBorder('both');
              }}
              style={{
                ...styles.button,
                backgroundColor:
                  buttonBorder === 'both' ? '#4f71be' : '#4f71be',
              }}>
              <Text style={{fontWeight: '900', fontSize: 15, color: 'white'}}>
                Both
              </Text>
            </TouchableOpacity>
          </View> */}
          {/* ==============Button============== */}
          {/* ==============Table============== */}

          {/* ==============Table============== */}
        </View>
      </SafeAreaView>
    </>
  );
};

export default Assets;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    borderColor: '#000000',
    margin: 10,
    marginBottom: 50,
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
  buttonView: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  button: {
    width: '27%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ///========dropdown
  dropDownView: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    marginVertical: 5,
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
  },
  dropDownViewRight: {
    width: '70%',
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  ///=========Table
  table: {
    width: '90%',

    borderColor: 'black',
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 50,
    borderBottomColor: '#000000',
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '33.55%',
    height: '100%',
    borderRightColor: 'black',
    borderRightWidth: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '33.55%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#000000',
  },
  ///=========Table
});
