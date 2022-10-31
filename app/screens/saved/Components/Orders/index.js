import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Orders = () => {
  const {orderItem} = useSelector(state => state.OrdersItem);
  //   console.log(orderItem);
  return (
    <View>
      <Text>Orders</Text>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({});
