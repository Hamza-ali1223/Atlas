import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'

const ElearningImage = ({imagePath}) => {
  return (
    <View>
        <Image
         style={styles.imageStyle} 
        source={imagePath} 
        resizeMode='contain'
        
        
        />    
    </View>
  )
}

export default ElearningImage

const styles = StyleSheet.create(
    {
        imageStyle:
        {
            height:vs(400),
            width:s(350),
        }
    })