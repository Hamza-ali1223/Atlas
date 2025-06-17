import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { s, vs } from 'react-native-size-matters'
import UserAvatar from '../../components/UserAvatar'
import BackButton from '../../components/BackButton'
import { Colors } from '../../colors'
const designUiContactUs = () => {
  return (
    <View style={{flex:1,  paddingTop:vs(40),backgroundColor:Colors.text}}>
        <View style={styles.header}>
        <BackButton/>
       <UserAvatar />
    </View>
        <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Contact Us</Text>
       </View>
       <View style={styles.listContainer}>
        <Text style={styles.listTitleText}>Social Media Platforms</Text>
       </View>

    </View>
  )
}

export default designUiContactUs

const styles = StyleSheet.create({
    header:
    {
      flexDirection:'row',
      justifyContent:'space-between',
      marginHorizontal:s(17),
      
    },
    titleContainer:
    {
        padding:s(20),
        
    },
    titleText:
    {
        fontFamily:'SamsungSans-Bold',
        fontSize:s(30)
    },
    listContainer:
    {
        marginTop:vs(6),
        backgroundColor:"#F5F5FA",
        padding:s(20),
        borderRadius:s(10),
        elevation:s(10),
        
    },
    listTitleText:
    {
        fontFamily:'SamsungSans-Bold',
        fontSize:s(16)
    }


})