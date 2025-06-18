import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { WhatsappIcon } from './Icons/WhatsappIcon';
import { InstagramIcon } from './Icons/InstagramIcon';
import { TikTokIcon } from './Icons/TiktokIcon';
import { SnapchatIcon } from './Icons/SnapchatIcon';
import { TwitterIcon } from './Icons/TwitterIcon';

// Great use of TypeScript! Let's make this even more specific
type IconName = 'Whatsapp' | 'Instagram' | 'TikTok' | 'Snapchat' | 'Twitter';

// Let's properly type the props
interface SocialCircularProps {
  iconName: IconName;
}

const SocialCircular = ({ iconName }: SocialCircularProps) => {
  const renderIcon = () => {
    switch (iconName) {
      case 'Whatsapp':
        return <WhatsappIcon />
        // No need for 'break' after 'return' - it's unreachable code
        
      case 'Instagram':
        return <InstagramIcon />
        
      case 'TikTok':
        return <TikTokIcon />;
        
      case 'Snapchat':
        return <SnapchatIcon/>;
        
      case 'Twitter':
        return <TwitterIcon/>; // Twitter is now "X"!
        
      default:
        console.error(`Unknown icon name: ${iconName}`);
        // Always return something from your render function!
        return <Text style={styles.iconText}>?</Text>;
    }
  };

  return (
    <View style={styles.container}>
      {renderIcon()}
    </View>
  );
};

export default SocialCircular;

const styles = StyleSheet.create({
  container: {
    // Removed flex: 1 - not needed with fixed dimensions
    width: s(46),
    height: s(46), // Using s() for both to ensure perfect circle
    borderRadius: s(23),
    borderWidth: 1,
    borderColor: '#E0E0E0', // Always good to give borders a color
    
    // FIXED: Removed padding! Let justifyContent and alignItems do their magic
    justifyContent: 'center',
    alignItems: 'center',
    
    // Optional: Add a subtle background
    backgroundColor: '#FAFAFA',
  },
  
  // Let's make the icon text look good
 
});
