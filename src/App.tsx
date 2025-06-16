import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import animationHome from './Screens/reanimatedScreensProject01/animationHome'
import ErrorPage from './Screens/error'
import IntroductionScreen from './Screens/reanimatedScreensProject01/animationIntroduction'

const App = () => {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
       <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
       <Stack.Screen name="AnimatedHome" component={animationHome} options={{headerTitle:"Animation Palace",
       headerTitleAlign:'center',
       headerTitleStyle:{color:'green',fontFamily:'SamsungSans-Bold',fontSize:22}
       }}/>
       <Stack.Screen name="AnimatedIntro" component={IntroductionScreen}/>
       <Stack.Screen name="Error" component={ErrorPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
