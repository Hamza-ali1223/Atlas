import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'
import TopTabs from '../../components/TopTabs'
import MeditationCard from '../../components/MeditationCard'

const designUiHomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleText}>Meditations</Text>
      <Text style={{marginTop:vs(6),fontSize:14,color:"#2C2016", marginBottom:vs(14),}}> Welcome to Mind Chambers</Text>
       <TopTabs />
       <MeditationCard />
    </SafeAreaView>
  )
}

export default designUiHomeScreen

const styles = StyleSheet.create({
  mainContainer:
  {
    flex:1,
    backgroundColor:"white",
    paddingHorizontal:s(17),
  },
  titleText:
  {
    marginTop:vs(24),
    fontSize:20,
    fontWeight:'semibold',
    color:"#1D150F",
    
   
  },

})