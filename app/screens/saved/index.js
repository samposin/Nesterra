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
import {useSelector} from 'react-redux';

const Saved = () => {
  const [sitdata, setSiteData] = useState([]);
  const {circuitItems} = useSelector(state => state.CircuitsItems);
  const {devicestItems} = useSelector(state => state.DevicesItems);

  const ListItem = ({source, title, item}) => {
    return (
      <View
        style={{
          width: '100%',
          height: 60,
          borderBottomColor: 'black',
          borderBottomWidth: 0.8,

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
        <ListItem
          source={imgg.imgCircuits}
          title="Circuits"
          item={circuitItems.length}
        />
        <ListItem
          source={imgg.imgDevices}
          title="Devices"
          item={devicestItems.length}
        />
        <ListItem source={imgg.imgSite} title="Sites" item={0} />
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
