import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import {Svg} from 'react-native-svg';
import {useSelector} from 'react-redux';

import {VictoryPie, VictoryLabel} from 'victory-native';
import CountView from '../../../Components/CountView';

const SiteActionStatus = ({HeaderText, colours}) => {
  const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);
  const {circuitCountPie} = useSelector(state => state.SiteAnlysis);

  const [category, setCategy] = useState(null);
  // console.log(HeaderText, colours);
  const array1 = [
    {key1: '#027be4'},
    {key1: '#147913'},
    {key1: '#fdb805'},
    {key1: '#d8131c'},
    {key1: '#0f79e6'},
    {key1: '#0f79e6'},
    {key1: '#0f79e6'},
    {key1: '#0f79e6'},
    {key1: '#0f79e6'},
    {key1: '#0f79e6'},
  ];
  // const array2 = SiteAnlysis.Site_cer_status;
  // const result = array2.map((o, i) =>
  //   Object.assign({}, o, {number: array1[i].key1}),
  // );

  return (
    <View style={{width: '100%', padding: 10}}>
      <View
        style={{
          ...styles.mainView,
          paddingVertical: 10,
          marginTop: 10,
          borderRadius: 15,
        }}>
        <View>
          <Text style={styles.upperText}>{HeaderText}</Text>
        </View>
        <View style={{...styles.upperView}}>
          <View style={styles.leftView}>
            <VictoryPie
              labels={({datum}) => datum.y}
              colorScale={[
                '#027be4',
                '#20761d',
                '#d8131c',
                '#fdb805',
                '#0f79e6',
              ]}
              x="CertificationStatus"
              y="Count"
              radius={({datum}) =>
                category && category == datum.CertificationStatus ? 80 : 70
              }
              innerRadius={30}
              data={SiteAnlysis.Site_cer_status}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: props => {
                            let categoryName =
                              SiteAnlysis.Site_cer_status[props.index]
                                .CertificationStatus;
                            setCategy(categoryName);
                          },
                        },
                      ];
                    },
                  },
                },
              ]}
            />
            <View
              style={{
                position: 'absolute',
                top: 70,
              }}>
              <Text style={{color: 'black'}}>
                {/* {circuitCountPie[circuitCountPie.length - 1].UniqueLocCount} */}
              </Text>
              <Text style={{color: 'black'}}>Total</Text>
            </View>
          </View>
          <View style={styles.rightView}>
            {/* {result.map((item, i) => {
              return (
                <CountView
                  color={item.number}
                  title={`${item.CertificationStatus}(${item.Count})`}
                />
              );
            })} */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default SiteActionStatus;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',

    paddingHorizontal: 5,
  },
  upperText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
  },

  upperView: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',

    flexDirection: 'row',
  },
  leftView: {
    position: 'relative',
    width: '40%',
    height: 180,

    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    width: '60%',
    height: 180,
    // backgroundColor: 'green',
    // backgroundColor: 'green',
  },

  lowerView: {
    width: '100%',
    height: 320,
    backgroundColor: 'white',
    marginTop: 20,
  },
});
