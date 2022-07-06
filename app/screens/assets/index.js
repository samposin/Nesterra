import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import {Picker} from '@react-native-picker/picker';
const Assets = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All', value: 'all'},
    {label: 'One', value: 'One'},
  ]);

  const [buttonBorder, setButtonBorder] = useState('circuits');
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <SafeAreaView
        style={{
          marginTop: StatusBar.currentHeight,
          flex: 1,
        }}>
        {/* ==========top view======= */}
        <View style={styles.topButtonView}>
          <TouchableOpacity style={styles.topButton}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '900'}}>
              Summary
            </Text>
          </TouchableOpacity>
        </View>
        {/* ==========top view======= */}
        {/* ==========top view======= */}
        {/* ==============Services Category============== */}
        <View style={styles.dropDownView}>
          <View style={styles.dropDownViewRight}>
            <View style={styles.pickerBoxInner}>
              <Picker
                selectedValue={selectedLanguage}
                style={styles.pickerStyle}
                placeholder="Select your SIM"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="All " value="key4" />
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
              </Picker>
            </View>
          </View>
        </View>
        {/* ==============Services Category============== */}

        {/* ==========top view======= */}
        {/* ==============Table============== */}

        {/* ==============Table============== */}
      </SafeAreaView>
    </>
  );
};

export default Assets;

const styles = StyleSheet.create({
  //top
  topButtonView: {
    width: '100%',
    height: 110,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  topButton: {
    width: 120,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007aff',
  },
  //top
  //category

  //category
  ///=========Table
  table: {
    width: '100%',

    alignSelf: 'center',
    marginTop: 15,
  },
  tableRow: {
    width: '100%',
    height: 50,
    backgroundColor: '#007aff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRow1: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  tableRowColum: {
    width: '25%',
    height: '100%',
    backgroundColor: '#007aff',

    justifyContent: 'center',
    alignItems: 'center',
  },
  tableRowColumLast: {
    width: '25%',
    marginHorizontal: 2,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontWeight: '700',
    fontSize: 16,
    color: 'white',
  },
  ///=========Table
  ///=========data row
  tableRow1: {
    width: '100%',
    height: 40,

    flexDirection: 'row',
    justifyContent: 'space-between',

    alignSelf: 'center',
  },
  tableRowColum1: {
    width: '25%',
    height: '100%',

    justifyContent: 'center',
  },

  boxText1: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 7,
  },
  ///=========data row
  ///========Second table

  ///========dropdown
  dropDownView: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },
  dropDownViewLeft: {
    width: '30%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  dropDownViewRight: {
    width: 100,
    height: '100%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
  },
  pickerItem: {width: 200, height: 40, borderWidth: 0.5},
  ///========dropdown
  ///========Second table
});
