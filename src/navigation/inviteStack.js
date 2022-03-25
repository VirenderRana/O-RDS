import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InviteLink from '../screens/inviteLink';
import Invite from '../screens/invite';


const Stack = createStackNavigator();

const InviteStack = () => {
  return (
    <Stack.Navigator
      screenOptions={(route)=>({
        headerTitle: 'Invite'
      })}
    >
      <Stack.Screen name="Invite" component={Invite} />
      <Stack.Screen name="Invite Link" component={InviteLink} />

    </Stack.Navigator>
  )
}
export default InviteStack
