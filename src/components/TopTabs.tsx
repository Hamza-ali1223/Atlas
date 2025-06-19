import {
  codegenNativeCommands,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import { s, vs } from 'react-native-size-matters';


const Tab_ACTIVEBG = '#75563B';

interface TopTabsProps
{
  tab_array:string[]
  changebadgeLabel:(data:string) => void
}
const TopTabs:FC<TopTabsProps> = ({tab_array,changebadgeLabel}) => {
  const [activeTabs, setactiveTabs] = useState('Live');

  useEffect(()=>
  {
    changebadgeLabel(activeTabs)
  })
 

  return (
    <View style={styles.container}>
      {tab_array.map(tabName => {
        
        const isActive=activeTabs==tabName
        return (
          <TouchableOpacity 
          key={tabName}
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
    marginHorizontal:s(5),
    
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
