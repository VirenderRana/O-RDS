import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import More from '../screens/more';
import PaymentInfo from '../screens/paymentInfo';
import Profile from '../screens/profile';
import Terms from '../screens/termsAndConditions';


const Stack = createStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={(route)=>({
        headerTitle: 'More'
      })}
    >
      <Stack.Screen name="More Options" component={More} />
      <Stack.Screen name="Payment Info" component={PaymentInfo} />
      <Stack.Screen name="My Profile" component={Profile} />
      <Stack.Screen name="Terms" component={Terms} />
    </Stack.Navigator>
  )
}
export default MoreStack
