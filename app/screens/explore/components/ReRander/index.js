import { StyleSheet, Text,TouchableOpacity, View } from 'react-native'
import React from 'react'

const ReRander = ({
   
    reload=undefined,
    setReload=f=>f



}) => {
    const click=()=>{
        setReload(!reload)
    }
  return (
    <TouchableOpacity
    onPress={()=>click()}
     style={styles.currentLocation1}>
      <Text>R</Text>
    </TouchableOpacity>
  )
}

export default ReRander

const styles = StyleSheet.create({
    currentLocation1: {
        width: 36,
        height: 36,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 155,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 18,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
      },
})