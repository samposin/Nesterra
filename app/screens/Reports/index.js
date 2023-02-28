import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import StateAnalysis from './StateAnalysis';
import SiteCertiFication from './SiteCertiFication';
import AssetsAndExpenses from './AssetsAndExpenses';
import {getReportSiteAnalysis} from './../../actions/Reports/SiteAnlysis/index';
import {connect} from 'react-redux';
import ButtonView from './Components/ButtonView/index';

import {getReport} from '../../actions/Reports';

const Reports = ({getReport}) => {
  const [select, setSeleted] = useState('assets');

  useEffect(() => {
    getReport();
  }, []);

  // console.log(select);

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
        <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
          Interective Reports
        </Text>
        <View
          style={{
            width: 100,
            height: '100%',
            // backgroundColor: 'red',
            // borderColor: '#2c75c2',
            // borderRadius: 15,
            // borderWidth: 1.5,
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View style={{width: 30, height: 30}}>
            <Image
              source={require('../../images/saved/refresh.png')}
              style={{width: '100%', height: '100%', resizeMode: 'cover'}}
            />
          </View>
        </View>
        {/* =============== button view=========== */}
      </View>
      <View style={{width: '100%', paddingHorizontal: 10}}>
        <View style={styles.buttonView}>
          <ButtonView
            Title="Assets & Expenses"
            select={select}
            value="assets"
            onPress={() => {
              setSeleted('assets');
            }}
          />
          <ButtonView
            Title="State Analysis"
            select={select}
            value="state"
            onPress={() => {
              setSeleted('state');
            }}
          />
          <ButtonView
            Title="Site Certification"
            select={select}
            value="site"
            onPress={() => {
              setSeleted('site');
            }}
          />
        </View>
      </View>

      <ScrollView>
        {ranDerView()}
        <View style={{height: 50}}></View>
        {/* --- bottom view scound--- */}
      </ScrollView>

      {/* =============== button view=========== */}
    </SafeAreaView>
  );
};

export default connect(null, {getReport})(Reports);

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
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonView: {
    width: '100%',
    height: 40,
    backgroundColor: '#d6d6d8',
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 4,
    borderRadius: 10,
  },
  scroll: {
    borderColor: 'blue',
    borderRadius: 2,
    // borderRadius: 2,
    // borderRadius: 2,
  },
});
