import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import Header from './../../stats/Header';
import Bullet from './Components/Bullet';
import AnnualCircuit from './../../../components/DataCharts/AnnualCircuit';
import Circuit from './../../explore/components/RanderView/Components/Circuit/index';
import {
  VictoryBar,
  VictoryTheme,
  VictoryAxis,
  VictoryChart,
  Background,
  VictoryGroup,
  VictoryLine,
  VictoryLabel,
  VictoryPie,
} from 'victory-native';
import Svg, {Polyline} from 'react-native-svg';
const AssetsAndExpenses = () => {
  return (
    <>
      <View style={styles.unheder}></View>
      <ScrollView>
        <View style={styles.heder}>
          <View style={styles.heder1}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginTop: 30,
                marginLeft: 20,
              }}>
              Active Site Count
            </Text>
            <View style={styles.heder2}>
              <View style={{...styles.heder3}}>
                <VictoryPie
                  width={200}
                  height={200}
                  data={[
                    {x: 1, y: 120},
                    {x: 2, y: 150},
                    {x: 3, y: 75},
                  ]}
                  innerRadius={30}
                  labelRadius={50}
                  style={{labels: {fontSize: 20, fill: 'white'}}}
                />
              </View>
              <View style={styles.heder4}>
                <View style={styles.heder5}>
                  <Bullet color="blue" />
                  <Text style={{marginLeft: 10}}>ATM (2607)</Text>
                </View>
                <View style={styles.heder6}>
                  <Bullet color="green" />

                  <Text style={{marginLeft: 10}}>Branch (1121)</Text>
                </View>
                <View style={styles.heder7}>
                  <Bullet color="red" />
                  <Text style={{marginLeft: 10}}>Office ()</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.heder}>
          <View style={styles.heder1}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginTop: 30,
                marginLeft: 20,
              }}>
              Annual Circuit Spend
            </Text>
            <View style={styles.heder2}>
              <View style={styles.heder3}></View>
              <View style={styles.heder4}>
                <View style={styles.heder5}>
                  <Bullet color="blue" />
                  <Text style={{marginLeft: 10}}>Data (25.1M)</Text>
                </View>
                <View style={styles.heder6}>
                  <Bullet color="green" />

                  <Text style={{marginLeft: 10}}>Service (10.7M)</Text>
                </View>
                <View style={styles.heder7}>
                  <Bullet color="red" />
                  <Text style={{marginLeft: 10}}>Voice (12.7M)</Text>
                </View>
                <View style={styles.heder8}>
                  <Bullet color="yellow" />
                  <Text style={{marginLeft: 10}}>Wireless (2.2M)</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.heder}>
          <View style={styles.heder1}>
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                marginTop: 30,
                marginLeft: 20,
              }}>
              Circuit Count
            </Text>
            <View style={styles.heder2}>
              <View style={styles.heder3}></View>
              <View style={styles.heder4}>
                <View style={styles.heder5}>
                  <Bullet color="blue" />
                  <Text style={{marginLeft: 10}}>ATM (2607)</Text>
                </View>
                <View style={styles.heder6}>
                  <Bullet color="green" />

                  <Text style={{marginLeft: 10}}>Branch (1121)</Text>
                </View>
                <View style={styles.heder7}>
                  <Bullet color="red" />
                  <Text style={{marginLeft: 10}}>Office ()</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{width: '100%', height: 400}}>
          <VictoryPie
            width={200}
            height={200}
            data={[
              {x: 1, y: 120},
              {x: 2, y: 150},
              {x: 3, y: 75},
            ]}
            innerRadius={30}
            labelRadius={50}
            style={{labels: {fontSize: 20, fill: 'white'}}}
          />
          <VictoryLabel
            textAnchor="middle"
            style={{fontSize: 20}}
            x={200}
            y={200}
            text="Pie!"
          />
        </View>
      </ScrollView>
    </>
  );
};

export default AssetsAndExpenses;

const styles = StyleSheet.create({
  unheder: {width: '100%', height: 50},

  heder: {
    width: '100%',
    height: 400,
    backgroundColor: '#deeaea',
    borderRadius: 15,
    marginTop: 30,
  },

  heder1: {width: '100%', height: 300},

  heder2: {
    width: '100%',
    height: 200,
    // backgroundColor: 'green',
    flexDirection: 'row',
  },

  heder3: {
    width: '60%',
    height: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    marginLeft: 10,
  },
  heder4: {
    width: '40%',
    height: '100%',
    // backgroundColor: 'white',
    // flexDirection: 'row',
  },
  heder5: {
    width: '80%',
    height: '10%',
    // backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginLeft: 10,
  },
  heder6: {
    width: '80%',
    height: '10%',
    // backgroundColor: 'white',
    flexDirection: 'row',
    marginLeft: 10,
  },
  heder7: {
    width: '80%',
    height: '10%',
    // backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginLeft: 10,
  },
  heder8: {
    width: '80%',
    height: '10%',
    // backgroundColor: 'white',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    marginLeft: 10,
  },
});
<View
  style={{
    width: '100%',
    height: 500,
    backgroundColor: '#fef7dd',
    paddingHorizontal: 10,
    borderRadius: 10,
  }}>
  <View
    style={{
      width: '100%',
      height: 150,

      // backgroundColor: 'red',
    }}>
    <View
      style={{
        width: '100%',
        height: '40%',
        // backgroundColor: 'red',
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: 25,
          marginTop: 10,
        }}>
        Active Site Count
      </Text>
    </View>
  </View>

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
</View>;
