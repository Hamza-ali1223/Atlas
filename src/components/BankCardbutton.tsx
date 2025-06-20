import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { BankCardButtonPlusIcon } from './Icons/BankCardboxButtonPlusIcon'
import { s, vs } from 'react-native-size-matters'

interface BankCardbuttonProps
{
    EnableModal: ()=>void
}

const BankCardbutton:FC<BankCardbuttonProps> = ({EnableModal}) => {
  return (
   <TouchableOpacity onPress={EnableModal}>
    <View style={styles.container}>
        <BankCardButtonPlusIcon />
        <Text style={styles.Text}>ADD NEW</Text>
    </View>
   </TouchableOpacity>
  )
}

export default BankCardbutton

const styles = StyleSheet.create(
    {
        container:
        {
            flexDirection:'row',
            alignItems:"center",
            justifyContent:'center',
            marginTop:vs(15),     
            borderColor:"#F0F5FA",
            borderWidth:2,
            width:s(300),
            borderRadius:s(10),
            paddingVertical:vs(17),
                      
        },
        Text:
        {
            color:"#FF7622",
            fontSize:14,
            fontFamily:"SamsungSans-Bold",
        },

    })