import { View, Text, StyleSheet, Image, Alert, Animated, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../colors'



const animationHome = () => {

    const changeOpacity=useRef(new Animated.Value(1)).current
    
    
    const Animate=()=>
    {
        Animated.sequence(
            [
                Animated.timing(changeOpacity,
                    {
                        toValue:0.5,
                        duration:500,
                        useNativeDriver:true
                    }
                ),
                Animated.timing(changeOpacity,
                {
                    toValue:0.1,
                    duration:200,
                        useNativeDriver:true
                }),
                Animated.timing(changeOpacity,
                {
                    toValue:1,
                    duration:200,
                        useNativeDriver:true
                }),
                


            ]
        ).start();
    }
  return (
    <SafeAreaView style={styles.container}>
    <Animated.Image source={require("../../assets/images/omnitrix.png")} style={[styles.image,{opacity:changeOpacity}]}
    
    />
    <View style={styles.seperator}></View>
    
    <Pressable
   onPress={Animate}>
        <View>
            <Text style={styles.buttonText}>Animate Opacity of Omnitrix</Text>
        </View>
    </Pressable>
    </SafeAreaView>
  )
}

export default animationHome

const styles = StyleSheet.create(
    {
        container:
        {
            flex:1,
            justifyContent:'center',
            backgroundColor:Colors.background,
            alignItems:'center',
        },
        image:
        {
            height:100,
            width:100,
            resizeMode:'center',
           
        },
        seperator:
        {
            height: 1, // This defines the thickness of your line
             backgroundColor: 'white', // A light grey color is common for separators
            marginVertical: 8,
            paddingHorizontal:'100%',
      },
      buttonText:
      {
        color:Colors.text,
        fontSize:24,
        fontFamily:"SamsungSans-Regular",
      }
    }
)