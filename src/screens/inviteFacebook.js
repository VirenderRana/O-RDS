import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';
import * as Facebook from 'expo-facebook';
import * as Linking from 'expo-linking';

async function LogIn() {
    // try {
    //   await Facebook.initializeAsync({
    //     appId: '390115335991326', // My Meta for developer's App ID
    //   });
    //   const { type, token, expirationDate, permissions, declinedPermissions } =
    //     await Facebook.logInWithReadPermissionsAsync({
    //       permissions: ['public_profile'],
    //     });
    //   if (type === 'success') {
    //     // Get the user's name using Facebook's Graph API
    //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
    //     Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
    //   } else {
    //     // type === 'cancel'
    //   }
    // } catch ({ message }) {
    //   alert(`Facebook Login Error: ${message}`);
    // }
    Linking.openURL('https://fb.com');
  }
  
//const Facebook = () => {

//  const id = 390115335991326 // My Meta for developer's App ID

//  return (
 //   <Text>Open Facebook Here</Text>
 // )
//}

//export default Facebook

export default LogIn;