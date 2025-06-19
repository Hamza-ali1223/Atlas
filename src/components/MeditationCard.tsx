import { Dimensions, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import { vs, s } from 'react-native-size-matters'
import { BlueCamera } from './BlueCamera'


 const phoneWidth:number|any=Dimensions.get('window').width
    const cardWidth=(((phoneWidth-s(16)*3))/2)

    interface meditationProps
    {
        uriData:string
        title:string
        date:string
        badgeText:string
    }
const MeditationCard:FC<meditationProps> = ({uriData,title,date,badgeText}) => {
   
  return (
    <ImageBackground style={styles.container}
    source={{uri:uriData}} 
    imageStyle={styles.image}
    >
        <View style={styles.overlay}/>
        <View style={[styles.liveBadge,badgeText==="Recorded" && {backgroundColor:"#007AFF"}]}>
            <Text style={styles.liveBadgeText}>{badgeText}</Text>
        </View>
        <View style={styles.cardContent}>
            <Text style={styles.mainText}>{title}</Text>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <BlueCamera />
                <Text style={{color:"white",marginStart:s(10)}}> {date}</Text>
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
            width:cardWidth,
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
                color:'white'
        },
    })