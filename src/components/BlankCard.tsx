import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { vs } from 'react-native-size-matters'

const BlankCard = ({currentMethod}) => {
  return (
    <View>
    <Text style={styles.bankCardBoxText}>No {currentMethod} Added</Text>
          <Text style={styles.bankCardBoxsmallText}>
            You can add {currentMethod} and{' '}
          </Text>
          <Text style={styles.bankCardBoxsmallText}>save it for later </Text>
    </View>
  )
}

export default BlankCard

const styles = StyleSheet.create({
    bankCardBoxText: {
    fontWeight: 'bold',
    fontFamily: 'SamsungSans-Bold',
    fontSize: 16,
    marginTop: vs(17),
    marginBottom: vs(6),
  },
  bankCardBoxsmallText: {
    fontFamily: 'SamsungSans-Regular',
    fontSize: 15,
    lineHeight: vs(24),
  },
})