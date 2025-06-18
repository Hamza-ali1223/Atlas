import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs, s } from 'react-native-size-matters'
import { BlueCamera } from './BlueCamera'

const MeditationCard = () => {
  return (
    <ImageBackground style={styles.container}
    source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJzKSUVj44csrOZBkdYBQ05SdqutsE71OjbA&s"}} 
    imageStyle={styles.image}
    >
        <View style={styles.overlay}/>
        <View style={styles.liveBadge}>
            <Text style={styles.liveBadgeText}>Live</Text>
        </View>
        <View style={styles.cardContent}>
            <Text style={styles.mainText}>Meditations</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <BlueCamera />
                <Text style={{color:"white",marginStart:s(10)}}> 31st Jan - 9.00 am</Text>
            </View>
        </View>
        
    </ImageBackground>
  
)
}

export default MeditationCard

const styles = StyleSheet.create(
    {
        container:
        {
            height:vs(161),
            width:s(166),
            borderRadius:s(12),
            marginTop:vs(5),
            overflow:'hidden'
        },
        image:
        {
           height:"100%", 
           width:"100%",
           resizeMode:"cover",
           opacity:0.7, 
        },
        mainText:
        {
            fontSize:12,
            fontWeight:'semibold',
            color:'white',
           
        },
        cardContent:
        {
            position:'absolute',
            left:s(10),
            bottom:vs(10),
        },
        overlay:
        {
            ...StyleSheet.absoluteFillObject,
            backgroundColor:"rgba(0,0,0,0.45)"
        },
        liveBadge:
        {
            backgroundColor:"#E41111",
            borderRadius:s(90),
            position:"absolute",
            top:vs(10),
            right:s(10),
            justifyContent:'center',
            alignItems:'center',
            padding:s(5),
        },
        liveBadgeText:
        {
                fontSize:11,
                fontWeight:'semibold',
                color:'white',
        },
    })