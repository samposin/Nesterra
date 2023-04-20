import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import Button from './Components/Button';
import {
  CircleView,
  CircleView1,
  CircleView2,
  CircleViewCircle,
  ResetView,
} from './Components/CircleView';
import InputView from './Components/InputView';
import {useSelector} from 'react-redux';

const AddOrder = ({navigation}) => {
  const {appearanceType} = useSelector(state => state.appearanceType);
  const [buttonType, setButtonType] = useState('Circuits');
  const textChange = text => {
    setButtonType(text);
  };
  return (
    <SafeAreaView
      style={{
        // marginTop: StatusBar.currentHeight,
        marginTop: 25,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.addOrderView}>
          <Text style={styles.addOrderText}>AddOrder</Text>
          <TouchableOpacity
            style={styles.closeView}
            onPress={() => {
              navigation.navigate('Orders');
            }}>
            <Entypo name="cross" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <View
            style={[
              styles.buttonView2,
              {
                backgroundColor:
                  appearanceType == 'dark' ? '#1c1c1f' : '#d6d6d8',
              },
            ]}>
            <Button
              title="Circuits"
              buttonType={buttonType}
              onPress={() => {
                setButtonType('Circuits');
              }}
            />
            <Button
              title="Devices"
              buttonType={buttonType}
              onPress={() => {
                setButtonType('Devices');
              }}
            />
            <Button
              title="Equinix"
              buttonType={buttonType}
              onPress={() => {
                setButtonType('Equinix');
              }}
            />
          </View>
        </View>
        <View style={styles.stepView}>
          <View style={styles.stepViewIner}>
            <CircleView title="1" />
            <CircleView1 />

            <CircleViewCircle title="2" />
            <CircleView1 />
            <CircleViewCircle title="3" />
            <CircleView1 />
            <CircleViewCircle title="4" />
          </View>
        </View>
        <CircleView2 />
        <ResetView />
        <InputView />

        <View style={styles.endbutton}>
          <View
            style={{
              width: '40%',
              height: 32,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#3478f6',
              }}>
              Save Draft
            </Text>
          </View>
          <View
            style={{
              width: '40%',
              height: 32,
              backgroundColor: '#dbf1dc',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: '#3478f6',
              }}>
              Next
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddOrder;

const styles = StyleSheet.create({
  addOrderView: {
    width: '100%',
    height: 50,
    // backgroundColor: 'pink',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  addOrderText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  closeView: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#0472ef',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  buttonView2: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#e1e1e1',
    height: '100%',
    padding: 3,
    borderRadius: 7,
  },
  stepView: {
    width: '100%',
    height: 60,
    paddingHorizontal: 10,
    borderTopColor: '#a8a8a8',
    borderTopWidth: 1,
    marginTop: 10,
  },
  stepViewIner: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  view1: {
    width: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  endbutton: {
    width: '100%',
    height: 50,
    backgroundColor: '#fbfaf8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
  },
});
