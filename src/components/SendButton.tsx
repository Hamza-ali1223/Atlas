import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SendIcon } from './Icons'
import { s, vs } from 'react-native-size-matters'
import { useNavigation } from '@react-navigation/native'

const SendButton = () => {
  const Navigation=useNavigation();
  return (
    <TouchableOpacity onPress={()=>Navigation.navigate("DesignUiMainPayment")}>
      <View style={styles.container}>
     <SendIcon />
    </View>
    </TouchableOpacity>
  )
}

export default SendButton
const styles=StyleSheet.create(
    {
        container:
        {
            
            backgroundColor:"#1077AF",
            width:s(46),
            height:vs(46),
            borderRadius:s(23) ,
          
            justifyContent:'center',
            alignItems:"center",
            alignSelf:"center",

        }
    }
)