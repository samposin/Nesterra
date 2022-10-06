import {
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Text,
  View,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import imgg from '../../components/imageLink/saveTabImage';

const Saved = () => {
  const [sitdata, setSiteData] = useState([]);
  const getList = async () => {
    const storedValue = await AsyncStorage.getItem('@device_List');
    if (!storedValue) {
      siteData([]);
    }
    const list = JSON.parse(storedValue);
    // console.log(list, 'list');
    setSiteData(list);
  };
  useEffect(() => {
    getList();
  }, []);
  const ListItem = ({source, title, item}) => {
    return (
      <View
        style={{
          width: '100%',
          height: 60,
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginVertical: 2,
          flexDirection: 'row',
        }}>
        <View style={{width: '15%', height: '100%', justifyContent: 'center'}}>
          <Image
            style={{width: 30, height: 30, resizeMode: 'contain'}}
            source={source}
          />
        </View>
        <View style={{width: '85%', height: '100%', justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
            {title}
          </Text>
          <Text>{item} Items</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
      }}>
      <View style={styles.container}>
        <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold'}}>
          Saved
        </Text>
        <ListItem source={imgg.imgAtm} title="ATMS" item={0} />
        <ListItem source={imgg.imgBranche} title="Branches" item={0} />
        <ListItem source={imgg.imgCircuits} title="Circuits" item={0} />
        <ListItem source={imgg.imgDevices} title="Devices" item={0} />
        <ListItem source={imgg.imgSite} title="Sites" item={sitdata.length} />
      </View>
    </SafeAreaView>
  );
};

export default Saved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
