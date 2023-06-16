import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import StateAnalysis from './StateAnalysis';
import SiteCertiFication from './SiteCertiFication';
import Overview from './Overview';
import OcrReport from './OcrReport';
import {getReportSiteAnalysis} from './../../actions/Reports/SiteAnlysis/index';
import {connect, useSelector} from 'react-redux';
import ButtonView from './Components/ButtonView/index';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {getReport} from '../../actions/Reports';
import {imag} from '../../components/imageLink';
import Search from '../../components/search/Search';

const Reports = ({getReport}) => {
  const [select, setSeleted] = useState('overview');
  const {appearanceType} = useSelector(state => state.appearanceType);

  useEffect(() => {
    getReport();
  }, []);

  // console.log(select);

  const ranDerView = () => {
    switch (true) {
      case select === 'overview':
        return <Overview />;

      case select === 'site':
        return <SiteCertiFication />;
      case select === 'state':
        return <StateAnalysis />;
      case select === 'report':
        return <OcrReport />;
    }
  };

  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
      }}>
      <View style={styles.hearderView}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: appearanceType == 'dark' ? 'white' : 'black',
          }}>
          Interective Reports
        </Text>
        <TouchableOpacity
          style={{
            width: 100,
            height: '100%',

            // justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={imag.refresh}
              style={{
                width: '70%',
                height: '70%',
                resizeMode: 'cover',
              }}
            />
          </View>
          <Text style={{color: '#2782d1'}}>Reset</Text>
        </TouchableOpacity>
        {/* =============== button view=========== */}
      </View>
      <View
        style={{
          width: '100%',
          height: 40,
          // backgroundColor: 'red',
          paddingHorizontal: 15,
          marginTop: 10,
        }}>
        <Search />
      </View>
      <View style={{width: '100%', paddingHorizontal: 10}}>
        <View
          style={
            appearanceType == 'dark' ? styles.buttonView1 : styles.buttonView
          }>
          <ButtonView
            Title="Overview"
            select={select}
            value="overview"
            onPress={() => {
              setSeleted('overview');
            }}
          />
          <ButtonView
            Title="State/Cities"
            select={select}
            value="state"
            onPress={() => {
              setSeleted('state');
            }}
          />
          <ButtonView
            Title="Site Cert"
            select={select}
            value="site"
            onPress={() => {
              setSeleted('site');
            }}
          />
          <ButtonView
            Title="OCR Report"
            select={select}
            value="report"
            onPress={() => {
              setSeleted('report');
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

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  buttonView1: {
    width: '100%',
    height: 40,
    backgroundColor: '#1c1c1f',
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 4,
    borderRadius: 10,
  },
  scroll: {
    borderColor: 'blue',
    borderRadius: 2,
  },
});
