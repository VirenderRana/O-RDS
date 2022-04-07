import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, TextInput, Button } from 'react-native';
import * as MailComposer from "expo-mail-composer"
import { useNavigation } from '@react-navigation/native';

/* import Email from '../components/Email';


SendEmail = () => {
    
        Email(
            '',
            'RDS survey invite',
            'This is a test Message',
            { cc: '' }
        ).then(() => {
            console.log('Your message was successfully sent!');
        });
        return {SendEmail};
        }
    

        
    
export default SendEmail;

*/
  
const SendEmail = () => {
    MailComposer.composeAsync({
        recipients: [], // array of email addresses
        subject: "RDS survey invite",
        body: "This is a test Message"
    })
}


export default SendEmail;