import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BackButton from '../../components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vs, s } from 'react-native-size-matters';
import PaymentMethodBox from '../../components/paymentMethodBox';

const DesignStudioPayment = () => {
  const paymentMethods: string[] = ['Cash', 'Visa', 'Master Card', 'PayPal'];
  const [selectedMethod,setselectedMethod]=useState<string>("")
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
     
      style={styles.paymentMethodSelectionView}>
      
        {paymentMethods.map(paymentMethod => {
          
         let isselected=selectedMethod===paymentMethod
         
         return (
            <TouchableOpacity style={{ alignItems: 'center' }}
            key={paymentMethod}
            onPress={()=>setselectedMethod(paymentMethod)}>
              <PaymentMethodBox methodName={paymentMethod} isSelected={isselected} />
              <Text style={styles.methodNameText}>{paymentMethod}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={{}}>
        <Text>Testing</Text>
      </View>
    </SafeAreaView>
  );
};

export default DesignStudioPayment;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingLeft: s(24),
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: vs(25),
    paddingBottom: vs(37),
  },
  headerText: {
    paddingLeft: s(17),
    fontWeight: 'regular',
    fontSize: 17,
    fontFamily: 'SamsungSans-Regular',
  },
  methodNameText: {
    fontSize: 14,
    marginTop:vs(4),
    marginEnd:s(16)
  },
  paymentMethodSelectionView: {
    flexDirection: 'row',
    height:vs(115),
    flexGrow:0,

  },
});
