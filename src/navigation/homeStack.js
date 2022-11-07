import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable} from 'react-native';
import Home from '../screens/home';
import StartSurvey from '../screens/startSurvey';
import { auth } from '../../firebase';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();


const getHeaderTitle = (route) => {
    if(route.name === 'Home')
    {
        return("RDS app");
    }
    else if(route.name === 'Start')
    {
        return("Survey 1");
    }
}

const HomeStack = () => {
  const navigation = useNavigation(); 

  
  return (
    <Stack.Navigator
    screenOptions= {({route})=>({
        headerTitle: getHeaderTitle(route)
    })}
    options={{
      headerTitle: (props) => <LogoTitle {...props} />,
      
    }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Start" component={StartSurvey} />
    </Stack.Navigator>
  )
}
export default HomeStack
