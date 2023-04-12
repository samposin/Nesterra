import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from './Components/Button';
import {
  CircleView,
  CircleView1,
  CircleView2,
  ResetView,
} from './Components/CircleView';

const AddOrder = ({navigation}) => {
  const [buttonType, setButtonType] = useState('Circuits');
  const textChange = text => {
    setButtonType(text);
  };
  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
      }}>
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
        <View style={styles.buttonView2}>
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

          <CircleView title="2" />
          <CircleView1 />
          <CircleView title="3" />
          <CircleView1 />
          <CircleView title="4" />
        </View>
      </View>
      <CircleView2 />
      <ResetView />
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
    marginRight: 20,
  },
  buttonView: {
    width: '100%',
    height: 40,
    alignItems: 'center',
  },
  buttonView2: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#e1e1e1',
    height: '100%',
    padding: 3,
    borderRadius: 7,
  },
  stepView: {
    width: '100%',
    height: 60,
    paddingHorizontal: 20,
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
});
