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
const category = [
  {id: 0, name: 'Active', isActive: true},
  {id: 1, name: 'Inactive', isActive: false},
  {id: 2, name: 'Both', isActive: false},
];

const Assets = () => {
  const [data1, setData1] = useState(category);
  const changeColor = id => {
    let listData = data1.map(item => {
      let itm = {...item, isActive: false};
      return itm;
    });

    listData[id].isActive = true;
    setData1(listData);
  };

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

        {/* ==============Services Category============== */}

        <FlatList
          horizontal
          data={data1}
          renderItem={({item, id}) => {
            return (
              <TouchableOpacity
                onPress={() => changeColor(item.id)}
                style={{
                  width: 80,
                  height: 40,
                  backgroundColor: item.isActive ? '#007aff' : 'white',
                  marginHorizontal: 5,
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 4.65,
                  elevation: 8,
                }}>
                <Text
                  style={{
                    color: item.isActive ? 'white' : 'black',
                    fontWeight: 'bold',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
          keyExtractor={(item, i) => i.toString()}
        />

        {/* ==============Services Category============== */}
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
});
