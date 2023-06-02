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
const {width, height} = Dimensions.get('screen');
import {VictoryPie, VictoryLabel} from 'victory-native';
import Item from '../Item';
import ItemBold from '../Item/ItemBold';
import ItemHeaderBold from '../Item/ItemHeaderBold';
import CountView from '../CountView';

const AnnualCircuitSpend = ({HeaderText, colours}) => {
  const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);
  const {AnnualCircuitSpend} = useSelector(state => state.SiteAnlysis);
  // console.log(SiteAnlysis.inv_site_count, 'circuitCountPie');
  // console.log(circuitCountPie, 'circuitCountPie');
  const [category, setCategy] = useState(null);
  // console.log(HeaderText, colours);
  // console.log(AnnualCircuitSpend, 'circuitCountPie');

  return (
    <View style={{width: '100%', padding: 5}}>
      <View
        style={{
          ...styles.mainView,
          paddingVertical: 10,
          marginTop: 5,
          borderRadius: 15,
        }}>
        <View style={{}}>
          <Text style={styles.upperText}>{HeaderText}</Text>
        </View>
        <View style={{...styles.upperView}}>
          <View style={styles.leftView}>
            <VictoryPie
              labels={({datum}) => datum.y}
              colorScale={[
                '#097ce6',
                '#068009',
                '#d06962',
                '#feb614',
                '#0f79e6',
                '#027f01',
                '#c7291d',
              ]}
              x="Category"
              y="Total"
              radius={({datum}) =>
                category && category == datum.Category ? 80 : 70
              }
              innerRadius={30}
              data={AnnualCircuitSpend}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: props => {
                            // console.log(
                            //   AnnualCircuitSpend[props.index].Category,
                            // );
                            let categoryName =
                              AnnualCircuitSpend[props.index].Category;
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
              <Text>2990</Text>
              <Text>Total</Text>
            </View>
          </View>
          <View style={styles.rightView}>
            <CountView color="#137afa" title="Cable/Sat ($257K)" />
            <CountView color="#038000" title="Data ($24.8M)" />
            <CountView color="#cc1a1a" title="Service ($10.7M)" />
            <CountView color="#fbba16" title="Voice ($12.7M)" />
            <CountView color="#1178f1" title="Wireless ($2.1M)" />
          </View>
        </View>
        <View style={styles.lowerView}>
          <View
            style={{
              width: '100%',
              height: 35,
              borderTopColor: '#bababa',
              borderTopWidth: 0.7,
              flexDirection: 'row',
            }}>
            <Item item1="Category" width="16.66%" />
            <Item item1="AT&T" width="16.66%" />
            <Item item1="Verizon" width="16.66%" />
            <Item item1="Granite" width="16.66%" />
            <ItemHeaderBold item1="Other" width="16.66%" />
            <ItemHeaderBold item1="Total" width="16.66%" />
          </View>
          {AnnualCircuitSpend &&
            AnnualCircuitSpend.map((item, i) => {
              return (
                <TouchableOpacity
                  onPressIn={() => {
                    // console.log(item.Category);
                    setCategy(item.Category);
                  }}
                  key={i}
                  style={{
                    width: '100%',
                    height: 35,
                    borderTopColor: '#bababa',

                    borderTopWidth: 0.7,
                    flexDirection: 'row',
                    backgroundColor:
                      category && category === item.Category ? '#bfffc0' : null,
                  }}>
                  <Item item1={item?.Category} width="20%" item={item} />

                  <Item
                    item1={`${parseFloat(
                      Number(item?.AT_T / 1000000).toFixed(1),
                    )}`}
                    width="16.66%"
                    item={item}
                  />
                  <Item
                    item1={`${parseFloat(
                      Number(item?.Verizon / 1000000).toFixed(1),
                    )}`}
                    width="16.66%"
                    item={item}
                  />
                  <Item
                    item1={`${parseFloat(
                      Number(item?.Granite / 1000000).toFixed(1),
                    )}`}
                    width="16.66%"
                    item={item}
                  />

                  <Item
                    item1={`${parseFloat(
                      Number(item?.Other / 1000000).toFixed(1),
                    )}`}
                    width="16.66%"
                    item={item}
                  />
                  <ItemBold
                    item1={`${parseFloat(
                      Number(item?.Total / 1000000).toFixed(1),
                    )}`}
                    width="16.66%"
                    item={item}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </View>
    </View>
  );
};

export default AnnualCircuitSpend;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',

    backgroundColor: '#fff4de',

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
    width: '60%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    width: '40%',
    height: 180,
    // backgroundColor: 'green',
  },

  lowerView: {
    width: '100%',
    height: 320,
    backgroundColor: 'white',
    marginTop: 20,
  },
});
