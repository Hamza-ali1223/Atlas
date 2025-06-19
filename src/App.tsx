import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Screens/Home'
import animationHome from './Screens/reanimatedScreensProject01/animationHome'
import ErrorPage from './Screens/error'
import IntroductionScreen from './Screens/reanimatedScreensProject01/animationIntroduction'
import DesignStudioIntroduction from './Screens/designUiScreensProject02/designStudioIntroduction'
import designUiIntroScreen from './Screens/designUiScreensProject02/designUiIntroScreen'
import designUiContactUs from './Screens/designUiScreensProject02/designUiContactUs'
import designUiHomeScreen from './Screens/designUiScreensProject02/designUiHomeScreen'
import DesignStudioPayment from './Screens/designUiScreensProject02/DesignStudioPayment'

const App = () => {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false }}>
       <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
       <Stack.Screen name="AnimatedHome" component={animationHome} options={{headerTitle:"Animation Palace",
       headerTitleAlign:'center',
       headerTitleStyle:{color:'green',fontFamily:'SamsungSans-Bold',fontSize:22}
       }}/>
       <Stack.Screen name="AnimatedIntro" component={IntroductionScreen}/>
       <Stack.Screen name="Error" component={ErrorPage}/>
       <Stack.Screen name='DesignIntro' component={DesignStudioIntroduction} />
       <Stack.Screen name="DesignUiMainIntro" component={designUiIntroScreen} />
       <Stack.Screen name="DesignUiMainContactUs" component={designUiContactUs} />
       <Stack.Screen name="DesignUiMainHome" component={designUiHomeScreen}/>
       <Stack.Screen  name='DesignUiMainPayment' component={DesignStudioPayment} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
