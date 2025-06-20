import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import BackButton from '../../components/BackButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { vs, s } from 'react-native-size-matters';
import PaymentMethodBox from '../../components/paymentMethodBox';
import BankCardBox from '../../components/BankCardBox';
import BankCardbutton from '../../components/BankCardbutton';
import ConfirmationButton from '../../components/ConfirmationButton';
import modal, { ReactNativeModal } from 'react-native-modal';
const DesignStudioPayment = () => {
  const paymentMethods: string[] = ['Cash', 'Visa', 'Master Card', 'PayPal'];
  const [selectedMethod, setselectedMethod] = useState<string>('');

  const [isVisible, SetisVisible] = useState<boolean>(false);
 const [cardNumberInput, setCardNumberInput] = useState('');
const [CVCInput, setCVCInput] = useState('');
const [expiryDateInput, setExpiryDateInput] = useState('');
  const [savedCardNumber, setSavedCardNumber] = useState('');
const [savedCVC, setSavedCVC] = useState('');
const [savedExpiryDate, setSavedExpiryDate] = useState('');
const [updateBit, setUpdateBit] = useState(0);

  const ToggleModal = () => {
    console.log('ToggleModal');
    SetisVisible(!isVisible);
  };

  const closeModal = () => {
    SetisVisible(!isVisible);
   setCardNumberInput('');
    setCVCInput('');
    setExpiryDateInput('');
  };

  const SaveModal = () => {
    if (CVCInput !== '' && cardNumberInput !== '' && expiryDateInput !== '') {
       setSavedCardNumber(cardNumberInput);
    setSavedCVC(CVCInput);
    setSavedExpiryDate(expiryDateInput);
    setUpdateBit(prev => prev + 1);
      SetisVisible(false);
      // Now clear only the input fields
    setCardNumberInput('');
    setCVCInput('');
    setExpiryDateInput('');
    SetisVisible(false);
    } else Alert.alert('Fill all the Details');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <BackButton />
        <Text style={styles.headerText}>Payment</Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.paymentMethodSelectionView}
      >
        {paymentMethods.map(paymentMethod => {
          let isselected = selectedMethod === paymentMethod;

          return (
            <TouchableOpacity
              style={{ alignItems: 'center' }}
              key={paymentMethod}
              onPress={() => setselectedMethod(paymentMethod)}
            >
              <PaymentMethodBox
                methodName={paymentMethod}
                isSelected={isselected}
              />
              <Text style={styles.methodNameText}>{paymentMethod}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <BankCardBox
        methodName={selectedMethod}
        cardNumber={savedCardNumber || undefined}
        CVC={savedCVC || undefined}
        updateData={updateBit||undefined}
        expiryDate={savedExpiryDate || undefined}
      />

      <BankCardbutton EnableModal={ToggleModal} />
      <Text
        style={{
          position: 'absolute',
          top: vs(561),
          left: s(40),
          opacity: 0.6,
        }}
      >
        TOTAL:
      </Text>
      <Text
        style={{
          position: 'absolute',
          top: vs(550),
          left: s(100),
          fontSize: 30,
          fontFamily: 'SamsungSans-Regular',
        }}
      >
        $96
      </Text>
      <ConfirmationButton top={70} left={0} />

      <ReactNativeModal
        isVisible={isVisible}
        onBackButtonPress={ToggleModal}
        onBackdropPress={ToggleModal}
        style={styles.modalContainer}
        useNativeDriver={true}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.7}
      >
        <View style={styles.modalView}>
          <View style={styles.dragIndicator} />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'semibold',
              paddingTop: vs(4),
              paddingBottom: vs(4),
            }}
          >
            Card:
          </Text>
          <TextInput
            onSubmitEditing={Event => {
              const result = Event.nativeEvent.text;
            setCardNumberInput(result.trim())
              console.log(`result: ${result} + cardNumber: ${savedCardNumber}`);
            }}
            returnKeyType="next"
            placeholder="Enter Card Number"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              marginVertical: vs(5),
              borderColor: '#F7F8F9',
              fontSize: 15,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'semibold',
              paddingTop: vs(4),
              paddingBottom: vs(4),
            }}
          >
            CVC:
          </Text>
          <TextInput
            onSubmitEditing={Event => {
              const result = Event.nativeEvent.text;
            setCVCInput(result.trim())
              console.log(`result: ${result} + cardNumber: ${CVCInput}`);
            }}
            returnKeyType="next"
            placeholder="Enter CVC"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              marginVertical: vs(5),
              borderColor: '#F7F8F9',
              fontSize: 15,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'semibold',
              paddingTop: vs(4),
              paddingBottom: vs(4),
            }}
          >
            Expiry Date
          </Text>
          <TextInput
            onSubmitEditing={Event => {
              const result = Event.nativeEvent.text;
              setExpiryDateInput(result.trim())
              console.log(`result: ${result} + cardNumber: ${savedExpiryDate}`);
            }}
            returnKeyType="done"
            placeholder="Enter Expiry Date"
            style={{
              borderWidth: 1,
              borderRadius: 8,
              marginVertical: vs(5),
              borderColor: '#F7F8F9',
              fontSize: 15,
            }}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <TouchableOpacity
              onPress={closeModal}
              style={styles.modalCloseButton}
            >
              <Text style={{ fontSize: 20, color: 'white' }}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={SaveModal}>
              <Text style={{ fontSize: 20, color: 'white' }}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
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
    marginTop: vs(4),
    marginEnd: s(16),
  },
  paymentMethodSelectionView: {
    flexDirection: 'row',
    height: vs(115),
    flexGrow: 0,
  },
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalView: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 30,
    borderTopLeftRadius: 20, // Rounded top corners
    borderTopRightRadius: 20,
    minHeight: 200,
  },
  dragIndicator: {
    width: 40,
    height: 4,
    backgroundColor: '#ccc',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 10,
  },
  modalCloseButton: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: s(10),
    width: s(80),
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: '#FF7622',
    borderRadius: 8,
    padding: s(10),
    width: s(80),
    alignItems: 'center',
  },
});
