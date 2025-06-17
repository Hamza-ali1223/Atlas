import { View, Text, Image, StyleSheet, Animated, Pressable } from 'react-native'
import React, { useEffect, useRef } from 'react'
import FoodLogo from '../../components/FoodLogo'
import EllipseLogo from '../../components/EllipseLogo'
import { useNavigation } from '@react-navigation/native'

const designUiIntroScreen = () => {
    
    const translatemoveX=useRef(new Animated.Value(-200)).current
    const changeOpacity=useRef(new Animated.Value(0)).current
    const Navigation=useNavigation();
    const animateFoodLogo= () =>
    {
        Animated.timing(translatemoveX,
            {
                toValue:0,
                duration:1000,
                useNativeDriver:true,
            }
        ).start();
    }
    const animateEllipseLogo=()=>
    {
        Animated.timing(changeOpacity,
            {
                toValue:1,
                duration:2000,
                useNativeDriver:true,
            }
        ).start();
        
    }
    useEffect(()=>
    {
        animateFoodLogo()
        animateEllipseLogo()
    },[])

    
    return (
    <View style={styles.container}>
      <Animated.View style={{translateX:translatemoveX}}><FoodLogo /></Animated.View>
        <Pressable onPress={()=>Navigation.navigate("DesignUiMainContactUs")} >
            <Animated.Text style={[styles.button,{opacity:changeOpacity}]}>Move to Contact Us</Animated.Text>
        </Pressable>
        
        <Animated.View style={[styles.foodEllipse,{opacity:changeOpacity}]}>  <EllipseLogo /></Animated.View>

    </View>
  )
}

export default designUiIntroScreen

const styles=StyleSheet.create(
    {
        container:
        {
            flex:1,
            backgroundColor:"white",
            justifyContent:"center",
            alignItems:"center",
        },
        foodEllipse:
        {
            position:"absolute",
            bottom:5,
            right:0,
            
        },
        button:
        {
            color:'white',
            backgroundColor:"#FF7622",
            borderRadius:10,
            padding:8,
            marginTop:'5%',
            elevation:10,
        },
    }
)