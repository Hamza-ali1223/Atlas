import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Pressable,
  Alert,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../colors';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const Navigation = useNavigation();
  const taskIndex = {
    1: {
      id: 1,
      name: 'AnimatedIntro',
      value: 'Learn React Native Animated',
    },
    2: {
      id: 2,
      name: 'DesignIntro',
      value: 'Mastering Ui Design Course',
    },
    3:
    {
      id:3,
      name:'OnboardingUiIntroduction',
      value:'3-Screen Onboarding Ui'
    },
    4:
    {
      id:4,
      name:'learningOnboarding1',
      value:'E-Learning App Onboarding'
    }
  };

  const navigateFlatList = item => {
    console.log(item);
    switch (item.name) {
      case 'AnimatedIntro':
        Navigation.navigate('AnimatedIntro');
        break;
      case 'DesignIntro':
        Navigation.navigate('DesignIntro');
        break;
        case 'OnboardingUiIntroduction':
          Navigation.navigate('OnboardingUiIntroduction');
          break;

      case 'learningOnboarding1':
        Navigation.navigate("learningOnboarding1");
        break;
      default:
        Navigation.navigate('Error');
    }
  };

  const taskArray = Object.values(taskIndex);

  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => navigateFlatList(item)}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>ID: {item.id}</Text>
          <Text style={styles.itemValue}>{item.value}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.Header}>
          Home Directory of your performed Tasks
        </Text>
      </View>

      <FlatList
        data={taskArray}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  Header: {
    color: Colors.text,
    fontFamily: 'SamsungSans-Bold',
    fontSize: 29,
    textAlign: 'center',
    marginTop: '5%',
    marginBottom: '15%',
  },
  itemContainer: {
    alignItems: 'center',
    backgroundColor: Colors.accentSecondary,
    borderRadius: 10,
    margin: '2%',
    padding: '5%',
    elevation: 10,
    flexDirection: 'row',
  },
  itemText: {
    color: 'black',
    fontFamily: 'SamsungSans-Regular',
  },
  itemValue: {
    color: 'black',
    marginStart: '4%',
    fontFamily: 'SamsungSans-Regular',
  },
});
