import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { vs, s } from 'react-native-size-matters';
import { MasterCardBanCardBoxIcon } from './Icons/MasterCardBankCardBoxIcon';
import { LargeVisaIcon } from './Icons/LargeVisaIcon';
import { LargePaypalIcon } from './Icons/LargePaypalIcon';
import { LargeCashIcon } from './Icons/LargeCashIcon';
import BlankCard from './BlankCard';
import DetailCard from './DetailCard';

interface props {
  methodName: string;
  cardNumber?: string;
  CVC?: string;
  expiryDate?: string;
  updateData?:number
}
const BankCardBox: FC<props> = ({
  methodName = 'Cash',
  cardNumber = '',
  CVC = '',
  expiryDate = '',
  updateData=0
}) => {
  const [currentMethod, setCurrentMethod] = useState<string>('');

  const [cards, SetCards] = useState([
    { card: 'Cash', cardNumber: '', CVC: '', expiryDate: '' },
    { card: 'Visa', cardNumber: '', CVC: '', expiryDate: '' },
    { card: 'Master Card', cardNumber: '', CVC: '', expiryDate: '' },
    { card: 'PayPal', cardNumber: '', CVC: '', expiryDate: '' },
  ]);
  
  useEffect(() => {
    if (methodName !== '') {
      setCurrentMethod(methodName);
    } else {
      setCurrentMethod('Cash');
    }
  }, [methodName]);

  useEffect(()=>
{
  updateCard(currentMethod,
    {
        cardNumber:cardNumber,
        CVC:CVC,
        expiryDate:expiryDate

    }
  )
  console.log(`
    Current Card: ${currentMethod}
    Current Visa Values: ${cards[1].card} CardNumber: ${cards[1].cardNumber}`)
},[updateData])

const updateCard =(currentcard,newData) =>
{
    SetCards(prevCards=>prevCards.map(card=>card.card===currentcard?{...card,...newData}:card))
}
  const returnMethodIcon = () => {
    switch (currentMethod) {
      case 'Master Card':
        return <MasterCardBanCardBoxIcon />;
      case 'Visa':
        return <LargeVisaIcon />;
      case 'PayPal':
        return <LargePaypalIcon />;

      default:
        return <LargeCashIcon />;
    }
  };

  const cardReturn =() =>
  {
   const card = cards.find(card => card.card === currentMethod);
  if (card && card.cardNumber) {
    return (
      <DetailCard
        cardNumber={card.cardNumber}
        CVC={card.CVC}
        expiryDate={card.expiryDate}
      />
    );
  } else {
    return <BlankCard currentMethod={currentMethod} />;
  }
  }

  
  return (
    <View style={styles.mainContainer}>
      {returnMethodIcon()}
      {cardReturn()}
    </View>
  );
};

export default BankCardBox;

const styles = StyleSheet.create({
  mainContainer: {
    height: vs(255),
    width: s(300),
    backgroundColor: '#F7F8F9',
    borderRadius: s(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
