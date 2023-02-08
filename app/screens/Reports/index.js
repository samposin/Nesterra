import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StateAnalysis from './StateAnalysis';
import SiteCertiFication from './SiteCertiFication';
import AssetsAndExpenses from './AssetsAndExpenses';

const Reports = () => {
  const [select, setSeleted] = useState('assets');
  const ranDerView = () => {
    switch (true) {
      case select === 'assets':
        return <AssetsAndExpenses />;

      case select === 'site':
        return <SiteCertiFication />;
      case select === 'state':
        return <StateAnalysis />;
    }
  };
  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.hearderView}>
        <Text style={{paddingLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          Interective Reports
        </Text>
        <Text style={{paddingRight: 20}}>refresh</Text>
        {/* =============== button view=========== */}
      </View>
      <View style={{width: '100%', paddingHorizontal: 10}}>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={{
              ...styles.seclectButton,
              backgroundColor: select === 'assets' ? 'white' : '#d6d6d8',
            }}
            onPress={() => {
              setSeleted('assets');
            }}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>
              Assets & Expenses
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.seclectButton,
              backgroundColor: select === 'state' ? 'white' : '#d6d6d8',
            }}
            onPress={() => {
              setSeleted('state');
            }}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>
              State Analysis
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.seclectButton,
              backgroundColor: select === 'site' ? 'white' : '#d6d6d8',
            }}
            onPress={() => {
              setSeleted('site');
            }}>
            <Text style={{fontSize: 11, fontWeight: 'bold'}}>
              Site Certification
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* =============== button view=========== */}
      {/* =============== button view=========== */}
      {/* =============== button view first=========== */}

      <ScrollView>
        {ranDerView()}

        {/* --- bottom view scound--- */}
      </ScrollView>

      {/* =============== button view=========== */}
    </SafeAreaView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  seclectButton: {
    width: '33%',
    height: '100%',
    // backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hearderView: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    height: 50,
    backgroundColor: '#d6d6d8',
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 4,
    borderRadius: 10,
  },
});
