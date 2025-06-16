import { View, Text, StyleSheet, Image, Alert, Animated, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../colors'



const oldanimationHome = () => {

    const translatemoveX= useRef(new Animated.Value(150)).current
    const translatebounceX=useRef(new Animated.Value(1)).current
    const translatemoveY= useRef(new Animated.Value(0)).current


    const AnimationSequence =() =>
    {
        Animated.sequence(
            [
               Animated.timing(translatemoveX,{
                toValue:0,
                duration:5000,
                useNativeDriver:true,
            }) ,
            Animated.spring(translatebounceX,{
            toValue:1.5,
            friction:1,
            tension:2,
            useNativeDriver:true,
        }),
        Animated.timing(translatemoveY,{
            toValue:300,
            duration:5000,
            useNativeDriver:true,
        })
            ]
        ).start()
    }
    const moveHorizontal = ( ) =>
         {
            Animated.timing(translatemoveX,{
                toValue:0,
                duration:5000,
                useNativeDriver:true,
            }).start();
         }

    const moveVertical= ()=>
    {   
        console.log(`Move Vertical pressed`)
        Animated.timing(translatemoveY,{
            toValue:300,
            duration:5000,
            useNativeDriver:true,
        }).start();
    }

    const bounceHorizontal = () =>
       {
        translatebounceX.stopAnimation()
        console.log(`pressed in : ${JSON.stringify(translatebounceX)}`)
        Animated.spring(translatebounceX,{
            toValue:2,
            friction:1,
            tension:2,
            useNativeDriver:true,
        }).start();
    }
    const popOut = () => {
               translatebounceX.stopAnimation()
       console.log(`pressed out : ${JSON.stringify(translatebounceX)}`)
        Animated.spring(translatebounceX, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true,
        }).start();
    }
  return (
    <SafeAreaView style={styles.container}>
    <Animated.Image source={require("../../assets/images/omnitrix.png")} style={[styles.image,{transform:[{scale:translatebounceX},{translateX:translatemoveX},{translateY:translatemoveY}]}]}
    
    />
    <View style={styles.seperator}></View>
     <Pressable
    onPress={AnimationSequence}>
        <View>
            <Text style={styles.buttonText}>Start Animation</Text>
        </View>
    </Pressable>
    <Pressable
    onPress={moveHorizontal}>
        <View>
            <Text style={styles.buttonText}>move Horizontal</Text>
        </View>
    </Pressable>
   
    <Pressable
   onPressIn={bounceHorizontal} onPressOut={popOut}>
        <View>
            <Text style={styles.buttonText}>Bounce Horizontal</Text>
        </View>
    </Pressable>
    <Pressable
   onPress={moveVertical}>
        <View>
            <Text style={styles.buttonText}>Move Vertically</Text>
        </View>
    </Pressable>
    </SafeAreaView>
  )
}

export default oldanimationHome

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