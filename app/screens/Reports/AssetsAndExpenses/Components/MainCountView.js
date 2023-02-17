import {StyleSheet, Text, Dimensions, View} from 'react-native';
import React, {useState} from 'react';
import CountView from './CountView';
import {Svg} from 'react-native-svg';
import {useSelector} from 'react-redux';
const {width, height} = Dimensions.get('screen');
import {VictoryPie, VictoryLabel} from 'victory-native';

const MainCountView = ({HeaderText, colours}) => {
  const {SiteAnlysis} = useSelector(state => state.SiteAnlysis);
  const {circuitCountPie} = useSelector(state => state.SiteAnlysis);
  console.log(circuitCountPie, 'circuitCountPie');
  const [category, setCategy] = useState(null);
  console.log(HeaderText, colours);
  return (
    <View style={{...styles.mainView, backgroundColor: colours}}>
      <View style={{}}>
        <Text style={styles.upperText}>{HeaderText}</Text>
      </View>
      <View style={styles.lowerView}>
        <View style={styles.leftView}>
          <VictoryPie
            labels={({datum}) => datum.y}
            colorScale={[
              '#0479fc',
              '#027f01',
              'red',
              '#ffb41c',
              'navy',
              'red',
              'green',
            ]}
            x="Category"
            y="Total"
            radius={({datum}) =>
              category && category == datum.Category ? 80 : 70
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
                          console.log(props.index);
                          let categoryName =
                            circuitCountPie[props.index].Category;
                          setCategy(categoryName);
                        },
                      },
                    ];
                  },
                },
              },
            ]}
          />
        </View>
        <View style={styles.rightView}>
          <CountView color="green" title="Atm (2606)" />
          <CountView color="yellow" title="Branch (2606)" />
          <CountView color="red" title="Atm (2606)" />
          <CountView color="red" title="Atm (2606)" />
        </View>
      </View>
      <View style={styles.activeText}></View>
    </View>
  );
};

export default MainCountView;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: 470,

    marginTop: 20,
  },
  upperText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 20,
  },

  lowerView: {
    width: '100%',
    height: 200,

    flexDirection: 'row',
    marginTop: 10,
  },
  leftView: {
    width: '70%',
    height: 200,

    justifyContent: 'center',
    alignItems: 'center',
  },
  rightView: {
    width: '30%',
    height: 200,
    // backgroundColor: 'green',
  },

  activeText: {
    width: '100%',
    height: 200,
    backgroundColor: 'white',
    marginTop: 20,
  },
});
