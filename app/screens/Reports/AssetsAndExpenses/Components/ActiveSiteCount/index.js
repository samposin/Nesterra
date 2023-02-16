import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Svg, {Polyline, g} from 'react-native-svg';
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
  VictoryTooltip,
} from 'victory-native';
const CustomLabel = ({props}) => {
  console.log(props);
  return (
    <Svg>
      <VictoryLabel {...props} />
      <VictoryTooltip
        {...props}
        x={150}
        y={150}
        orientation="top"
        pointerLength={0}
        cornerRadius={50}
        flyoutWidth={100}
        flyoutHeight={100}
        flyoutStyle={{fill: 'black'}}
      />
    </Svg>
  );
};
const ActiveSiteCount = () => {
  return (
    <View
      style={{
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <VictoryPie
        style={{labels: {fill: 'white'}}}
        innerRadius={50}
        labelRadius={70}
        labels={({datum}) => `# ${datum.y}`}
        labelComponent={<CustomLabel />}
        data={[
          {x: 1, y: 5},
          {x: 2, y: 4},
          {x: 3, y: 2},
          {x: 4, y: 3},
          {x: 5, y: 1},
        ]}
      />
    </View>
  );
};

export default ActiveSiteCount;

const styles = StyleSheet.create({
  borderView: {
    marginLeft: 10,
    left: 20,
  },
});
