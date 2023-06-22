import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
 
export const InputViewWithIcon = ({text, value}) => {
  return (
    <View style={{...styles.item1}}>
    <View style={styles.DateView}>
      <Text
        style={{
          position: 'absolute',
          top: -10,
          left: 10,
          backgroundColor: '#f2f2f2',
          paddingHorizontal: 5,
        }}>
        {text}
      </Text>
      <Text>{value}</Text>
      <AntDesign name="calendar" size={20} color="black" />
    </View>
  </View>
  )
}
export const InputViewWithOutIcon = ({text, value}) => {
  return (
    <View style={{...styles.item1}}>
    <View style={styles.DateView}>
      <Text
        style={{
          position: 'absolute',
          top: -10,
          left: 10,
          backgroundColor: '#f2f2f2',
          paddingHorizontal: 5,
        }}>
        {text}
      </Text>
      <Text>{value}</Text>
      
    </View>
  </View>
  )
}

 

const styles = StyleSheet.create({
    DateView: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#727272',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
      },
      item1: {
        width: '48%',
        height: 40,
      },
})