import {
  codegenNativeCommands,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';

const TAB_ARRAY = ['Live', 'Recorded'];
const Tab_ACTIVEBG = '#75563B';

const TopTabs = () => {
  const [activeTabs, setactiveTabs] = useState('Live');

 

  return (
    <View style={styles.container}>
      {TAB_ARRAY.map(tabName => {
        
        const isActive=activeTabs==tabName
        return (
          <TouchableOpacity 
          onPress={()=>setactiveTabs(tabName)}
            style={[
              styles.tabButton,
              isActive && { backgroundColor: Tab_ACTIVEBG },
            ]}
          >
            <Text style={[styles.buttonText,isActive?styles.activeText:styles.inactiveText]}>{tabName}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F4',
    flexDirection: 'row',
    height: vs(48),
    alignItems: 'center',

    borderRadius: s(12),
    
  },
  tabButton: {
    flex: 1,
    height: vs(32),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(8),
    paddingHorizontal:s(14),
  },
  buttonText: {
    fontSize: 14,
  },
  activeText:
  {
    color:'white',
    fontSize:s(14),
    fontWeight:'semibold',
  },
  inactiveText:
  {
     color:'black',
    fontSize:s(14),
    fontWeight:'semibold',

  }

});
