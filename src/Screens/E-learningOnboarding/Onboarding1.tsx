import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { eColors } from './elearningcolors';
import ElearningImage from '../../components/ElearningImage';
import { s, vs } from 'react-native-size-matters';
import { CircularMedium } from '../../components/CircularMedium';
import ElearningNext from '../../components/ElearningNext';
import { useNavigation } from '@react-navigation/native';

const Onboarding1 = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [subtextWidth,SetsubtextWidth]=useState(0);
  const Navigation=useNavigation();
  const handleTextLayout = (event) => {
    const { width } = event.nativeEvent.layout;
    SetsubtextWidth(width);
  };

  const handlepress= () =>
  {
    if(currentSlide<=2)
    {
      setCurrentSlide(prev =>prev+1)
    }
    
      
      console.log(`current slide: ${currentSlide}`)
    
  }
  const ImageArray = [
    {
      image: require('../../assets/images/Blog-post-bro.png'),
      title: 'Online Study is the',
      subtext: 'Best Choice for',
      subtext2: 'everyone',
    },
    {
      image: require('../../assets/images/Novelist-writing-bro.png'),
      title: 'Best Platform for both',
      subtext: 'Teachers & Learners',
    },
    {
      image: require('../../assets/images/Blogging-bro.png'),
      title: 'Learn Anytime.',
      subtext: 'Anywhere. Accelerate',
      subtext2: 'Your Future and Beyond.',
    },
  ];

  return (
    <SafeAreaView style={styles.mainContainer}>
      {currentSlide<=2?currentSlide == 1 ? (
        <View style={styles.subView}>
          <Text style={styles.title}>{ImageArray[1].title}</Text>
          <View style={styles.subtextcontainer}>
            <Text style={styles.subtext} onLayout={handleTextLayout}>{ImageArray[1].subtext}</Text>
            <View style={[styles.dynamicunderLine,{width:subtextWidth}]}></View>
          </View>
          <ElearningImage imagePath={ImageArray[1].image} />
          <ElearningNext currentSlide={1}  buttonpress={handlepress}/>
        </View>
      ) : (
        <View style={styles.subView2}>
           <ElearningImage imagePath={ImageArray[currentSlide].image} />
           <Text style={styles.title}>{ImageArray[currentSlide].title}</Text>
           <Text style={styles.subtext}>{ImageArray[currentSlide].subtext}</Text>
           <View style={styles.subtextcontainer}>
            <Text style={styles.subtext} onLayout={handleTextLayout}>{ImageArray[currentSlide].subtext2}</Text>
            <View style={[styles.dynamicunderLine,{width:subtextWidth}]}></View>
          </View>
           <ElearningNext currentSlide={currentSlide}  buttonpress={handlepress}/>
           {currentSlide==2?<Text style={[styles.subtext,{position:'absolute',top:vs(590),left:s(30)}]}>Start Learning</Text>:null}
        </View>
      ):<View>{setCurrentSlide(0)}</View>}
    </SafeAreaView>
  );
};

export default Onboarding1;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: eColors.BgColor,
    flex: 1,
    alignItems:'center',
  },
  subView:
  {
    paddingTop:vs(45),
    alignItems:'center'
  },
  subView2:
  {
    paddingTop:vs(5),
    alignItems:'center'
  },
  title:
  {
    fontSize:28,
    fontFamily:'SamsungSans-Light',
  },
  subtextcontainer:
  {
    alignSelf:"center",
    alignItems:'center',
    position:'relative',
  },
  subtext:
  {
    fontSize:28,
    fontFamily:"SamsungSans-Bold",
    textAlign:'center',
    zIndex:2,
  },
  dynamicunderLine:
  {
    position: 'absolute',
    bottom: 0, // Start from bottom of text
    height: '30%', // Cover bottom half of text height
    backgroundColor: eColors.yellow,
    opacity: 0.7, // Make it semi-transparent so text is readable
    zIndex: 1, // Behind the text
  },
});
