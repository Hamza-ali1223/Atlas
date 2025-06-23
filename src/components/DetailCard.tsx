import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailCard = ({cardNumber,CVC,expiryDate}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Card Number: {cardNumber}</Text>
      <Text style={styles.label}>CVC: {CVC}</Text>
      <Text style={styles.label}>Expiry Date: {expiryDate}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F8F9',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
    marginTop: 16,
    marginBottom: 16,
    // subtle shadow for elevation
    shadowColor: '#FF7A00',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    color: '#2D2D2D',
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default DetailCard;
