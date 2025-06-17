import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'


const BackButton = () => {
  return (

     <TouchableOpacity>
        <View>
             <Image style={styles.backButtonContainer} source={require("../assets/images/back-arrow.png")}/>
        </View>
     </TouchableOpacity>

  )
}

export default BackButton

const styles = StyleSheet.create({
    backButtonContainer:
    {
        backgroundColor:'#ECF0F4',
        height:vs(32),
        width:s(32),
        borderRadius: s(16),
        
    }
})