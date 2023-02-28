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

const CirCuitCount = ({HeaderText, colours}) => {
  const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);
  const {circuitCountPie} = useSelector(state => state.SiteAnlysis);
  // console.log(SiteAnlysis.inv_site_count, 'circuitCountPie');

  const [category, setCategy] = useState(null);
  // console.log(HeaderText, colours);

  return (
    <View style={{width: '100%', padding: 10}}>
      <View
        style={{
          ...styles.mainView,
          paddingVertical: 10,
          marginTop: 10,
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
              x="LocationType"
              y="Quantity"
              radius={({datum}) =>
                category && category == datum.LocationType ? 80 : 70
              }
              innerRadius={30}
              data={circuitCountPie}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPress: () => {
                      return [
                        {
                          target: 'labels',
                          mutation: props => {
                            console.log(
                              circuitCountPie[props.index].LocationType,
                            );
                            let categoryName =
                              circuitCountPie[props.index].LocationType;
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
            <CountView color="#127bee" title="Cable Sat (114)" />
            <CountView color="#077d05" title="Data (3,885)" />
            <CountView color="#d6231f" title="Service (3,071)" />
            <CountView color="#f4bc35" title="Voice (12K)" />
            <CountView color="#1279f2" title="Wireless  (941)" />
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
            <Item item1="Location Type" width="20%" />
            <Item item1="States" width="20%" />
            <Item item1="Cities" width="20%" />
            <Item item1="Quantity" width="20%" />
            <ItemHeaderBold item1="Unique Location" width="20%" />
          </View>
          {circuitCountPie &&
            circuitCountPie.map((item, i) => {
              return (
                <TouchableOpacity
                  onPressIn={() => {
                    console.log(item.LocationType);
                    setCategy(item.LocationType);
                  }}
                  key={i}
                  style={{
                    width: '100%',
                    height: 35,
                    borderTopColor: '#bababa',

                    borderTopWidth: 0.7,
                    flexDirection: 'row',
                    backgroundColor:
                      category && category === item.LocationType
                        ? '#bfffc0'
                        : null,
                  }}>
                  <Item item1={item?.LocationType} width="20%" item={item} />
                  <Item item1={item?.State} width="20%" item={item} />
                  <Item item1={item?.City} width="20%" item={item} />
                  <Item item1={item?.Quantity} width="20%" item={item} />
                  <ItemBold
                    item1={item?.UniqueLocCount}
                    width="20%"
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

export default CirCuitCount;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',

    backgroundColor: '#ecf4df',

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
    // backgroundColor: 'green',
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
