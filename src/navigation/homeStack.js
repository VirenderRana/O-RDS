import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import StartSurvey from '../screens/startSurvey';

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
  return (
    <Stack.Navigator
    screenOptions= {({route})=>({
        headerTitle: getHeaderTitle(route)
    })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Start" component={StartSurvey} />
    </Stack.Navigator>
  )
}
export default HomeStack
