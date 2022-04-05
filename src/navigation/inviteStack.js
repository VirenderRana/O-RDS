import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import InviteLink from '../screens/inviteLinks';
import InviteContacts from '../screens/inviteContacts';
import InviteFacebook from '../screens/inviteFacebook';
import InviteEmail from '../screens/inviteEmail';
import Invite from '../screens/invite';

const Stack = createStackNavigator();

const getHeaderTitle = (route) => {
    if(route.name === 'Invite')
    {
        return("Invite");
    }
    else if(route.name === 'Invite Link')
    {
        return("Invite Link");
    }
}

const InviteStack = () => {
  return (
    <Stack.Navigator
        screenOptions= {({route})=>({
            headerTitle: getHeaderTitle(route)
        })}
    >
      <Stack.Screen name="Invite" component={Invite} />
      <Stack.Screen name="Invite Link" component={InviteLink} />
      <Stack.Screen name="Invite Contacts" component={InviteContacts} />
      <Stack.Screen name="Invite Facebook" component={InviteFacebook} />

    </Stack.Navigator>
  )
}

export default InviteStack
