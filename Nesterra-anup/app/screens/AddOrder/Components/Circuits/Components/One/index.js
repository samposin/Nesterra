import {StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import React from 'react';
import InputTypeView1 from '../../../InputTypeView/InputTypeView1';
import {
  InputViewWithIcon,
  InputViewWithOutIcon,
} from '../../../InputViewWithIcon';
import InputView from '../../../InputView';
import {serviceType} from '../../../../../../utils/addOrders';
import {ResetView} from '../../../CircleView';
const One = () => {
  const [text, setText] = React.useState('');
  return (
    <ScrollView>
      {/* ================date picker=================== */}
      <View style={styles.itemWraper}>
        <InputViewWithIcon text="Date Created" value="08/05/23" />
        <InputViewWithOutIcon text="Order No" value="2897" />
      </View>

      {/* ================date picker=================== */}
      <View style={styles.itemWraper}>
        <View style={styles.item}>
          <InputTypeView1 title="Order Type" data={serviceType} />
        </View>
        <View style={styles.item}>
          <InputTypeView1 title="Select Project" data={serviceType} />
        </View>
      </View>
      <View style={styles.itemWraper}>
        <View style={styles.item}>
          <InputTypeView1 title="Service Category" data={serviceType} />
        </View>
        <View style={styles.item}>
          <InputTypeView1 title="Service Type" data={serviceType} />
        </View>
      </View>
      {/* ================date picker=================== */}
      <View style={styles.itemWraper}>
        <InputViewWithIcon text="Due Date" value="08/05/23" />
        <InputViewWithOutIcon text="Date from today" value="2897" />
      </View>

      {/* ================date picker=================== */}
      {/* <InputView /> */}

      {/* <View style={styles.itemWraper}>
        <View
          style={{
            width: '48%',
            height: '100%',
            // backgroundColor: '#35BDD0',
          }}>
          <TextInput
            placeholder="RC Code#"
            style={{
              width: '100%',
              height: '100%',
              borderWidth: 1,
              borderColor: 'black',
              // marginLeft: 10,
              borderRadius: 7,
            }}
          />
        </View>
        <View
          style={{
            width: '48%',
            height: '100%',
            // backgroundColor: 'pink',
            justifyContent: 'center',
            paddingLeft: 10,
          }}>
          <Text style={{color: 'red'}}>7 digits</Text>
        </View>
        <View style={{width: '50%', height: '100%'}}></View>
      </View> */}
      <View
        style={{
          width: '100%',
          height: 50,
          // backgroundColor: '#3478f6',
          marginTop: 10,
        }}>
        <View
          style={{
            // width: '100%',
            height: '100%',
            backgroundColor: '#ccddf2',
            marginHorizontal: 10,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 10}}>
            Multiple voice lines/devices
          </Text>
          <View
            style={{
              width: 90,
              height: 37,
              backgroundColor: '#3478f6',
              marginRight: 10,
              borderRadius: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Text style={{fontSize: 18, color: 'white'}}>add</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 130,
          // backgroundColor: 'pink',
          paddingHorizontal: 10,
          paddingTop: 15,
        }}>
        <TextInput
          textAlignVertical={'top'}
          multiline
          numberOfLines={5}
          placeholder="Reagon For Order (optional)"
          placeholderTextColor={{textAlign: 'top'}}
          style={{
            borderRadius: 5,
            height: '100%',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            verticalAlign: 'top',
            borderColor: 'black',
            borderWidth: 1,
            color: 'black',
          }}
        />
      </View>
      <View
        style={{
          width: '100%',
          height: 100,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: '40%',
            height: 32,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            borderWidth: 1,
            backgroundColor: '#ffffd1',
            borderColor: 'black',
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
            borderRadius: 7,
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
      {/* <View style={styles.endButton}>
        <View
          style={{
            width: '100%',
            height: '100%',
            // backgroundColor: 'red',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '40%',
              height: '100%',
              backgroundColor: '#ffffd1',
              borderColor: 'black',
              borderRadius: 12,
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#007aff', fontSize: 16, fontWeight: 'bold'}}>
              Save Draft
            </Text>
          </View>
          <View
            style={{
              width: '40%',
              height: '100%',
              backgroundColor: '#d6f2da',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#007aff', fontSize: 16, fontWeight: 'bold'}}>
              Next
            </Text>
          </View>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default One;

const styles = StyleSheet.create({
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
  itemWraper: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    marginTop: 15,
  },
  item: {
    width: '48%',
    height: 45,
  },
  item1: {
    width: '48%',
    height: 40,
  },
  DateView: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#727272',
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  endbutton: {
    height: 50,
    width: '100%',
    backgroundColor: '#fbfaf8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 5,
    // position: 'absolute',
    bottom: 60,
    left: 0,
    right: 0,
  },
  endButton: {
    width: '100%',
    height: 50,
    // backgroundColor: 'green',
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    paddingHorizontal: 35,
    paddingVertical: 7,
  },
});
