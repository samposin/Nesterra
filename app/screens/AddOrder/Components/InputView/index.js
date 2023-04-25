import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import InputTypeView from '../InputTypeView';
import InputTypeView1 from '../InputTypeView/InputTypeView1';
import {serviceType, OrdersTyep} from './../../../../utils/addOrders';

const InputView = () => {
  return (
    <View style={styles.mainView}>
      <View style={styles.mainView1}>
        <View style={styles.mainView2}>
          <View style={styles.leftView}>
            <Text style={styles.leftViewText}>
              Project alignment required for fanancial tracking
            </Text>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.rightViewText}>Select proj...</Text>
            <View style={styles.iconView}>
              <Entypo name="chevron-down" size={28} color="#525252" />
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 37,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <View
            style={{
              width: '48%',
              height: '100%',
            }}>
            <InputTypeView1
              title="Order Type"
              title2="Reason for Order"
              data={serviceType}
            />
          </View>
          <View
            style={{
              width: '48%',
              height: '100%',
            }}>
            <InputTypeView1
              title="Order Type"
              title2="Reason for Order"
              data={serviceType}
            />
          </View>
        </View>
        <InputTypeView title="2864" title2="Purpose" />
        <InputTypeView title="04/11/23" title2="Funding Source/Rc*" />
        {/* <InputTypeView1 title="Service Category" title2="Service Type" /> */}
        {/* <InputTypeView1
          title="Order Type"
          title2="Reason for Order"
          data={serviceType}
        /> */}
        {/* <InputTypeView1 title="05/26/23" title2="45" /> */}
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
            marginLeft: 3,
            marginTop: 10,
          }}>
          Email Notification chain
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            color: '#eb4d3d',
            marginTop: 10,
          }}>
          Individuals listed here will receive email notification for all stages
          of the order
        </Text>
        <View
          style={{
            width: '100%',
            height: 35,
            marginTop: 10,
            borderRadius: 5,
            borderColor: 'black',
            borderWidth: 1,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              marginLeft: 10,
            }}>
            Separate emails by comma or semi-colon
          </Text>
        </View>
      </View>
    </View>
  );
};

export default InputView;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 2,
  },
  mainView1: {
    width: '100%',
    height: 450,
    paddingHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#fefefe',
    borderRadius: 10,
  },
  mainView2: {
    width: '100%',
    height: 55,
    backgroundColor: '#3478f6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 8,
    marginTop: 5,
  },
  leftView: {
    width: '45%',
    height: '80%',
    backgroundColor: '#3478f6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    width: '45%',
    height: '80%',
    backgroundColor: '#3478f6',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftViewText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
  },
  rightViewText: {
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 15,
  },
  iconView: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    marginRight: 10,
  },
});
