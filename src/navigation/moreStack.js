import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import More from '../screens/more';
import PaymentInfo from '../screens/paymentInfo';

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
    </Stack.Navigator>
  )
}
export default MoreStack
