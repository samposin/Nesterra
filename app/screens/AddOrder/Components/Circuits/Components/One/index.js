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

      <View style={styles.itemWraper}>
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
          height: 140,
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
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
});
