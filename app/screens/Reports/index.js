import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StateAnalysis from './StateAnalysis/index';
import SiteCertiFication from './SiteCertiFication/index';

const Reports = () => {
  const [select, setSeleted] = useState('assets');
  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={styles.hearderView}>
        <Text style={{paddingLeft: 20, fontSize: 25, fontWeight: 'bold'}}>
          Interective Reports
        </Text>
        <Text style={{paddingRight: 20}}>refresh</Text>
        {/* =============== button view=========== */}
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={{
            ...styles.seclectButton,
            backgroundColor: select === 'assets' ? 'white' : '#d6d6d8',
          }}
          onPress={() => {
            setSeleted('assets');
          }}>
          <Text style={{fontSize: 11, fontWeight: 'bold'}}>
            Assets & Expenses
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.seclectButton,
            backgroundColor: select === 'state' ? 'white' : '#d6d6d8',
          }}
          onPress={() => {
            setSeleted('state');
          }}>
          <Text style={{fontSize: 11, fontWeight: 'bold'}}>State Analysis</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.seclectButton,
            backgroundColor: select === 'site' ? 'white' : '#d6d6d8',
          }}
          onPress={() => {
            setSeleted('site');
          }}>
          <Text style={{fontSize: 11, fontWeight: 'bold'}}>
            Site Certification
          </Text>
        </TouchableOpacity>
      </View>
      {/* =============== button view=========== */}
      {/* =============== button view=========== */}
      {/* =============== button view first=========== */}

      <ScrollView>
        <View
          style={{
            width: '100%',
            height: 465,
            backgroundColor: '#fef7dd',
            paddingHorizontal: 10,
          }}>
          <View
            style={{
              width: '100%',
              height: 100,
              // backgroundColor: '',
            }}></View>

          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',

              borderBottomWidth: 1,

              borderColor: '#bebebe',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 1,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Category</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>AT&T</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Verizon</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Granite</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Other</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Total</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',

              borderBottomWidth: 1,

              borderColor: '#b9b9b9',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 1,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Cable/Sat</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 4,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$0</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$0</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$0</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$257K</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$257K</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',

              borderBottomWidth: 1,

              borderColor: '#b9b9b9',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 1,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Data</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 4,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$19.9M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$4.8M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$8,967</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$208.2K</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$24.3M</Text>
            </View>
          </View>

          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',

              borderBottomWidth: 1,

              borderColor: '#b9b9b9',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 1,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Service</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 4,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$10.8M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$89.9K</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$0</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$0</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$10.9M</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',

              borderBottomWidth: 1,

              borderColor: '#b9b9b9',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 1,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Voice</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 4,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$2.1M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$8.1M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$2.3M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$183.8K</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$12.7M</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',

              borderBottomWidth: 1,

              borderColor: '#b9b9b9',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 1,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Wireless</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 4,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$1.2M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$903.4K</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$0</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$0</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$2.2M</Text>
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',

              borderBottomWidth: 1,

              borderColor: '#b9b9b9',
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 1,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>Total</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 4,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$33.4M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$13.9M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$2.3M</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$609.1K</Text>
            </View>
            <View
              style={{
                width: '16.66%',
                height: '100%',
                borderEndWidth: 3,
                borderColor: '#f2f2f2',
                justifyContent: 'center',
                marginLeft: 5,
                // backgroundColor: 'green',
              }}>
              <Text style={{fontSize: 13, fontWeight: 'bold'}}>$50.2M</Text>
            </View>
          </View>
        </View>

        {/* ----bottom view frist --- */}

        {/* ----bottom view scound ------ */}

        <View
          style={{
            widtth: '100%',
            height: 300,
            backgroundColor: '#eef2e1',
            paddingHorizontal: 5,
          }}>
          <View
            style={{
              widtth: '100%',
              height: 100,
              // backgroundColor: 'w',
            }}></View>

          <View
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#ffffff',
              borderBottomWidth: 1,
              borderColor: '#bababc',
              flexDirection: 'row',
            }}></View>
        </View>
        {/* --- bottom view scound--- */}
      </ScrollView>

      {/* =============== button view=========== */}
    </SafeAreaView>
  );
};

export default Reports;

const styles = StyleSheet.create({
  seclectButton: {
    width: '33%',
    height: '100%',
    // backgroundColor: 'red',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hearderView: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    height: 50,
    backgroundColor: '#d6d6d8',
    marginTop: 10,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 10,
    padding: 5,
  },
});
