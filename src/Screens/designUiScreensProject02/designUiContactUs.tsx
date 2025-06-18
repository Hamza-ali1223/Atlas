import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import { s, vs } from 'react-native-size-matters';
import UserAvatar from '../../components/UserAvatar';
import BackButton from '../../components/BackButton';
import { Colors } from '../../colors';
import SendButton from '../../components/SendButton';
import SocialCircular from '../../components/SocialCircular';
import SocialSection from '../../components/SocialSection';

const designUiContactUs = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <BackButton />
        <UserAvatar />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Contact Us</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listTitleText}>Social Media Platforms</Text>
           <SocialSection title="Whatsapp"/>
            <SocialSection title="Twitter" />
          <SocialSection title="Instagram" />
          <SocialSection title="Snapchat" />
          <SocialSection title="TikTok" />
     
     
      </View>
    </View>
  );
};

export default designUiContactUs;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingTop: vs(40),
    backgroundColor: Colors.text,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: s(17),
  },
  titleContainer: {
    padding: s(20),
  },
  titleText: {
    fontFamily: 'SamsungSans-Bold',
    fontSize: s(34),
  },
  listContainer: {
    marginTop: vs(6),
    backgroundColor: '#F5F5FA',
    flex:1,
    borderRadius: s(14),
    elevation: s(10),
    marginBottom:s(10),
    marginHorizontal:s(10),
    paddingHorizontal: s(16),
   paddingVertical: vs(16),
  },
  listTitleText: {
    fontFamily: 'SamsungSans-Bold',
    fontSize: s(20),
  },
  socialList: {},
});
