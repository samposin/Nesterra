import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

import SiteActionStatus from './Components/SiteActionStatus';
import SiteAssinged from './Components/SiteAssinged';
import EndData from './EndData';
import NoDataViewFlatList from '../../../components/NoDataViewFlatList';

const SiteCertiFication = () => {
  const pp =
    'eyJraWQiOiJHRkRGSFVIUGRPd01oMm1ILVg2NjVRVnhJWW1PSHdwM3BaQm1RbERuRnhRIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULmI1YUpmby11c3hlRHQtbldXc2xBTzRLWUdfV0M3ajhBSUFFal9MaXRFamMiLCJpc3MiOiJodHRwczovL25lc3RlcnJhLm9rdGEuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTY4NjMwODg2MSwiZXhwIjoxNjg2MzEyNDYxLCJjaWQiOiIwb2FybHdhdmVnWHQ3M3BBZzM1NyIsInVpZCI6IjAwdWlwejZyYTlra1pOa1VYMzU3Iiwic2NwIjpbIm9wZW5pZCJdLCJhdXRoX3RpbWUiOjE2ODYzMDg4NjEsInN1YiI6InNhbnRvc2guY2FycGVudGVyQG5lc3RlcnJhLm5ldCJ9.oxAJ4ASNRoDD2sRvKWsuKgvo9QPuKCBYYQLfkIRGg-ytJCjIijULh8rj84_jaVAOl064UlUTGRVCnmzeI68CELgKSfdQl9KXRDW3JoU5TctQLmLwHLRHVVXIavWYmc-ezWqG2LU6OuxM2kzFZCK4O4t9t1Fy-CGifO4ckXlhyuQFRBsSXsiQ-Wr8lVsgH5ycRtzZ3jeup3OSrkCOkvDOeZWtkpmUNjzfyCCppTzrUOhg6Fddb7CByIcQLaz53e6e1-M48sMn5rZzVYgOCd9JDZD44j8eUtTjglKi_2O0lHeBugWDh-LYR6w4c_Mhxp1jmwr8dGO4QNGvY8jS6bMklA';
  const [SiteCerData, setSiteCerData] = useState([]);
  // console.log(SiteCerData, 'ytftyqd');
  const getData = () => {
    fetch(
      `https://citizenmobileapi.azurewebsites.net/api/GetStatBreakDownData?state=OH&city=Alliance&status=active&geneology=Charter One P4__Bowstring__Woburn&sitetype=Branch__ITM__Office&propertyname=101 Station__1835 Market__Alliance`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${pp}`,
        },
      },
    )
      .then(res => res.json())
      .then(result => {
        console.log(result, 'rere');
        setSiteCerData(result?.Site_cer_data);
        // console.log(result.Site_cer_data, 'dwqd');
      })
      .catch(error => console.log(error));
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ScrollView>
      <SiteActionStatus HeaderText="Site Certification Status" />
      <SiteActionStatus HeaderText="Site Actions Status" />

      <SiteAssinged />
      <View
        style={{
          width: '100%',
          height: 35,
          // backgroundColor: '#007aff',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: '24%',
            height: '100%',
            backgroundColor: '#007aff',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', marginLeft: 10}}>Status</Text>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#007aff',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', marginLeft: 3}}>Site ID</Text>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#007aff',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', marginLeft: 3}}>Engineer</Text>
        </View>
        <View
          style={{
            width: '25%',
            height: '100%',
            backgroundColor: '#007aff',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', marginLeft: 3}}>Certification</Text>
        </View>
      </View>
      <FlatList
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
        data={SiteCerData}
        keyExtractor={(item, i) => i.toString()}
        renderItem={({index, item}) => {
          return (
            <EndData
              key={i}
              status={item.LocationStatus}
              loc={item.Location_id}
              cer={item.Assigned_By}
              eng={item.CertificationStatus}
              // eng={'itemgfdwhdfwvhgdw'}
            />
          );
        }}
        ListEmptyComponent={() => {
          return <NoDataViewFlatList />;
        }}
      />

      <View style={{height: 100}}></View>
    </ScrollView>
  );
};

export default SiteCertiFication;

const styles = StyleSheet.create({});
