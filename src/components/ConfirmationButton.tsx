import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { s, vs } from 'react-native-size-matters'

interface ConfirmationButtonProps
{
    top:number
    left:number
}
const ConfirmationButton:FC<ConfirmationButtonProps> = ({top,left}) => {
  return (
    <TouchableOpacity>
        <View style={[styles.container,{top:vs(top),left:s(left)}]}>
        <Text style={styles.Text}>Pay & Confirm</Text>
        </View>
    </TouchableOpacity>
  )
}

export default ConfirmationButton

const styles = StyleSheet.create(
    {
        container:
        {
            backgroundColor:"#FF7622",
            borderRadius:s(12),
            height:vs(65),
            width:s(300),
            alignItems:"center",
            justifyContent:'center',
            position:'absolute',
            
        },
        Text:
        {
            fontSize:14,
            fontFamily:"SamsungSans-Bold",
            color:'white',
        },
    })