import React from 'react';
import {StyleSheet, View, Text, Image, LogBox} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
LogBox.ignoreLogs(['Require cycle: node_modules/victory']);

import Foundation from 'react-native-vector-icons/Foundation';

import Chart from '../../components/DataCharts';
import AnnualCircuit from '../../components/DataCharts/AnnualCircuit';
import CircuitChart from '../../components/DataCharts/CircuitChart';

import {
  annualColor,
  annualData,
  annualTotal,
  circuitColor,
  circuitData,
  circuitTotal,
  indventory,
  indventoryColor,
  indventoryTotal,
} from '../../utils/ChartData';
import Button from './Button';
import ChartBarView from './ChartBarView';

import Details from './Details';
import Details2 from './Details2';
import Details3 from './Details3';
const header = () => {
  return (
    <View style={styles.headerView}>
      <View style={styles.titleView}>
        <Image
          source={require('../../images/siteTitle.png')}
          style={{width: '70%', height: '80%', resizeMode: 'contain'}}
        />
      </View>
      <View style={styles.titleView}>
        <Image
          source={require('../../images/banKTitle.png')}
          style={{width: '50%', height: '80%', resizeMode: 'contain'}}
        />
      </View>
      {/* ======================= */}
      <View style={styles.buttonRowView}>
        <Button width="32.5%" title="Main Page" height={45} />
        <Button width="30%" title="Orders" height={45} />
        <Button width="35.5%" title="Retionalization" height={45} />
      </View>
      <View style={{...styles.buttonRowView}}>
        <Button width="28.5%" title="Analytics" height={45} />
        <Button width="28.5%" title="Strategy" height={45} />
        <Button width="40.5%" title="Advanced Search" height={45} />
      </View>
      {/* ======================= */}
      <View
        style={{
          height: 90,
          width: '100%',
          marginTop: 15,
        }}>
        <View style={styles.buttonRowView2}>
          <Button width="48%" title="Site Details" height={35} />
          <Button width="48%" title="Site Certefication" height={35} />
        </View>
        <View style={styles.buttonRowView2}>
          <Button width="48%" title="Circuit Search" height={35} />
          <Button width="48%" title="Site Search" height={35} />
        </View>
      </View>
      {/* ======================= */}
    </View>
  );
};
const nationalOverView = () => {
  return (
    <View style={{width: '90%', height: 130, alignSelf: 'center'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          marginTop: 10,
          fontWeight: 'bold',
          color: '#6494ec',
          fontStyle: 'italic',
        }}>
        National Overview
      </Text>
      <View style={styles.tableHeaderView}>
        <View style={styles.tableHeader}>
          <View style={{...styles.left2, alignItems: 'flex-start'}}></View>
          <View style={styles.left1}>
            <Text style={{...styles.headerText, fontSize: 15}}>CircuitS</Text>
          </View>
          <View style={styles.left1}>
            <Text style={{...styles.headerText, fontSize: 15}}>Devices</Text>
          </View>
          <View style={styles.left1}>
            <Text
              style={{
                ...styles.headerText,
                fontWeight: 'bold',
                fontSize: 18,
                color: 'black',
              }}>
              Total
            </Text>
          </View>
        </View>

        {/* ======data Row====== */}
        {/* {data2.map((item, i) => {
          return (
            <View key={i} style={styles.dataRow}>
              <View style={{...styles.left2, alignItems: 'flex-start'}}>
                <Text style={{...styles.headerText, marginLeft: 5}}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{
                  ...styles.left1,
                  borderLeftWidth: 1,
                  borderLeftColor: '#2ac3b8',
                }}>
                <Text style={styles.headerText}>{item.state}</Text>
              </View>
              <View style={{...styles.left1}}>
                <Text style={styles.headerText}>{item.city}</Text>
              </View>
              <View style={{...styles.left1}}>
                <Text style={{...styles.headerText1}}>{item.quantity}</Text>
              </View>
              <View style={styles.left2}>
                <Text style={{...styles.headerText, marginRight: 5}}>
                  {item.uniqueL}
                </Text>
              </View>
            </View>
          );
        })} */}
        <View style={styles.dataRow}>
          <View style={{...styles.left2, alignItems: 'flex-start'}}>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Monthly
            </Text>
          </View>
          <View
            style={{
              ...styles.left1,
              borderLeftWidth: 1,
              borderLeftColor: '#2ac3b8',
            }}>
            <Text style={styles.headerText}>33</Text>
          </View>
          <View style={{...styles.left1}}>
            <Text style={styles.headerText}>1,134</Text>
          </View>
          <View style={{...styles.left1}}>
            <Text style={{marginRight: 3}}>
              <Foundation name="dollar" size={18} color="black" />
            </Text>
            <Text style={{...styles.headerText1, color: 'black'}}>4,484</Text>
          </View>
        </View>
        <View style={styles.dataRow}>
          <View style={{...styles.left2, alignItems: 'flex-start'}}>
            <Text
              style={{
                marginLeft: 5,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Yearly
            </Text>
          </View>
          <View
            style={{
              ...styles.left1,
              borderLeftWidth: 1,
              borderLeftColor: '#2ac3b8',
            }}>
            <Text style={styles.headerText}>33</Text>
          </View>
          <View style={{...styles.left1}}>
            <Text style={styles.headerText}>1,134</Text>
          </View>
          <View style={{...styles.left1}}>
            <Text style={{marginRight: 3}}>
              <Foundation name="dollar" size={18} color="black" />
            </Text>
            <Text style={{...styles.headerText1, color: 'black'}}>4,484</Text>
          </View>
        </View>
        {/* ======data Row====== */}
      </View>
    </View>
  );
};
const Stats = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        {header()}
        {nationalOverView()}

        <Details />
        <View style={{width: '100%', height: 280}}>
          <Chart
            data={indventory}
            total={indventoryTotal}
            color={indventoryColor}
          />
        </View>
        <Details2 />

        <View style={{width: '100%', height: 280}}>
          <AnnualCircuit
            data={annualData}
            total={annualTotal}
            color={annualColor}
          />
        </View>
        <Details3 />
        <View style={{width: '100%', height: 250}}>
          <CircuitChart
            data={circuitData}
            total={circuitTotal}
            color={circuitColor}
          />
        </View>
        <ChartBarView />
      </ScrollView>
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
  },
  //Header View
  headerView: {
    width: '100%',
    paddingTop: 20,
  },
  titleView: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRowView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },
  buttonRowView2: {
    width: '100%',
    height: 46,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  //Header View
  //table
  tableHeaderView: {
    width: '100%',
    height: 50,
  },
  tableHeader: {
    width: '100%',
    height: '70%',
    flexDirection: 'row',
    paddingHorizontal: 3,
    borderBottomColor: 'red',
    borderBottomWidth: 1,

    alignItems: 'center',
  },

  headerText: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  //table
  //dataRow
  dataRow: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#d8dbdc',
    borderBottomWidth: 0.7,
  },
  left: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'flex-end',
  },
  left2: {
    width: '25%',
    height: '100%',
    alignItems: 'flex-end',

    justifyContent: 'center',
  },
  left1: {
    width: '25%',
    height: '100%',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  right: {
    width: '80%',
    height: '100%',

    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  headerText1: {
    fontWeight: 'bold',
    fontSize: 13,
  },

  //dataRow
});
