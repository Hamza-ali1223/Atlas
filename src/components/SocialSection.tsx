import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SocialCircular from './SocialCircular'
import SendButton from './SendButton'
import { s, vs } from 'react-native-size-matters'

const SocialSection = ({title}) => {
  return (
    <View style={styles.container}>
      <SocialCircular iconName={title}/>
      <Text style={styles.titleText}>{title}</Text>
      <SendButton />
    </View>
  )
}

export default SocialSection

const styles = StyleSheet.create(
{
    container:
    {
        flex:1,
        flexDirection:"row",
        alignItems:'center',
        borderBottomWidth:1,
        marginTop:vs(17),
        paddingBottom:vs(10),
   },

    titleText:
    {
        flex:1,
        marginStart:s(14),
        fontFamily:'SamsungSans-Regular',
        fontSize:18,
        fontWeight:'medium',
    }
})