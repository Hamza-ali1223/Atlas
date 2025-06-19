import { Dimensions, StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { CashIcon } from './Icons/cashIcon';
import { MastercardIcon } from './Icons/mastercardIcon';
import { PaypalIcon } from './Icons/paypalIcon';
import { VisaIcon } from './Icons/visaIcon';
import { s, vs } from 'react-native-size-matters';
import { IconOrangeTick } from './Icons/IconOrangeTick';

interface paymentMethodBoxProps {
  methodName: string;
  isSelected: boolean;
}

const Phonewidth = Dimensions.get('window').width;

const PaymentMethodBox: FC<paymentMethodBoxProps> = ({
  methodName,
  isSelected,
}) => {
  const iconDisplay = methodName => {
    switch (methodName) {
      case 'Cash':
        return <CashIcon />;
      case 'Visa':
        return <VisaIcon />;
      case 'Master Card':
        return <MastercardIcon />;
      case 'PayPal':
        return <PaypalIcon />;

      default:
        return console.error('Icon Display issue');
    }
  };

  return (
    <View
      style={[
        styles.iconContainer,
        isSelected
          ? styles.isSelected
          : null,
      ]}
    >
      <View style={{ position: 'absolute', top: vs(-5), right: s(-2), }}>
        {isSelected ? <IconOrangeTick /> : null}
      </View>
      {iconDisplay(methodName)}
    </View>
  );
};

export default PaymentMethodBox;

const styles = StyleSheet.create({
  iconContainer: {
    backgroundColor: '#F0F5FA',
    height: vs(72),
    width: s(85),
    borderRadius: s(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginEnd: s(16),
    marginTop:vs(10),
  },
  isSelected:
  { borderWidth: 2, borderColor: '#FF7622', backgroundColor: 'white' },
});
