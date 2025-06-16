import { View, Text, StyleSheet, Image, Alert, Animated, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../colors'





const animationHome = () => {

    const changeOpacity=useRef(new Animated.Value(1)).current
    const rotation=useRef(new Animated.Value(0)).current
    let rotations=15
    const colors= useRef(new Animated.Value(0)).current
    const [isColorChanged,setIscolorchanged]=useState(false)
    const [isRotated,setisrotated]=useState(false)
    const AnimateOpacity=()=>
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

    const AnimateRotate=() =>
    {
        Animated.sequence(
            [
                Animated.timing(rotation,{
            toValue:15,
            duration:1000,
            useNativeDriver:true
        }),
                 Animated.timing(rotation,{
            toValue:15,
            duration:20000,
            useNativeDriver:true
        }),
        Animated.timing(rotation,{
            toValue:0,
            duration:1000,
            useNativeDriver:true
        })
            ]
        ).start();
    }
    const rotatemap= rotation.interpolate(
        {
            inputRange:[0,1],
            outputRange:["0deg","360deg"]
        }
    )
    const AnimateColor=()=>
    {   
        setIscolorchanged(true)
        Animated.timing(colors,
            {
                toValue:1,
                duration:3000,
                useNativeDriver:false
            }
        ).start();
    }
    const AnimateColorBack=()=>
    {   
        setIscolorchanged(false)
        Animated.timing(colors,
            {
                toValue:0,
                duration:3000,
                useNativeDriver:false
            }
        ).start();
    }
    const color=colors.interpolate(
        {
            inputRange:[0,1],
            outputRange:['red',"green"]
        }
    )
    const AnimateParallel = () => {
  console.log("🚀 Parallel Animations starting");

  Animated.parallel([
    // — 15 full rotations (over 1s) —
    Animated.timing(rotation, {
      toValue: isRotated?0:15,
      duration: 1000,
      useNativeDriver: true,
    }),

    // — Flip separator color (toggle between 0 and 1) —
    Animated.timing(colors, {
      toValue: isColorChanged ? 0 : 1,
      duration: 1000,
      useNativeDriver: false,  // colors must run on JS thread
    }),

    // — Opacity “bounce” sequence —
    Animated.sequence([
      Animated.timing(changeOpacity, {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(changeOpacity, {
        toValue: 0.1,
        duration: 150,
        useNativeDriver: true,
      }),
      Animated.timing(changeOpacity, {
        toValue: 1,
        duration: 150,
        useNativeDriver: true,
      }),
    ]),
  ]).start(() => {
    // toggle your color‑changed flag so next time it reverses
    setIscolorchanged(prev => !prev);
    setisrotated(prev => !prev);
    console.log("✅ Parallel Animations completed");
  });
}
  return (
    <SafeAreaView style={styles.container}>
    <Animated.Image source={require("../../assets/images/omnitrix.png")} style={[styles.image,{opacity:changeOpacity},{transform:[{rotate:rotatemap}]},]}
    
    />
    <Animated.View style={[styles.seperator,{backgroundColor:color}]}></Animated.View>
    
    <Pressable
   onPress={AnimateOpacity}>
        <View>
            <Animated.Text style={[styles.buttonText,{color}]}>Animate  Opacity of Omnitrix</Animated.Text>
        </View>
    </Pressable>
    <Pressable
    onPress={AnimateRotate}>
        <View>
            <Animated.Text style={[styles.buttonText,{color}]}>Rotate Omnitrix:{rotations}</Animated.Text>
        </View>
    </Pressable>
    <Pressable
    onPress={()=>
    {
        if(isColorChanged===false)
            AnimateColor()
        else
        AnimateColorBack()
    }
    }>
        <View>
            <Animated.Text style={[styles.buttonText,{color}]}>Change Seperator Color</Animated.Text>
        </View>
    </Pressable>

    <Pressable
    onPress={AnimateParallel}>
        <View>
            <Animated.Text style={[styles.buttonText,{color}]}>Play Parallel Animations</Animated.Text>
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
            height: 5, // This defines the thickness of your line
             backgroundColor: 'white', // A light grey color is common for separators
            marginVertical: 8,
            paddingHorizontal:'100%',
      },
      buttonText:
      {
        color:Colors.accent ,
        fontSize:24,
        fontFamily:"SamsungSans-Regular",
      }
    }
)