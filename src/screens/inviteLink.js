import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';
import {Contact} from '../utils/contact';


const InviteLink = () => {
  
  let [contacts, setContacts] = useState([]);
  console.log(Contacts)
  useEffect(() => {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      {
        'title': 'Contacts',
        'message': 'This app would like to view your contacts.',
        'buttonPositive': 'Please accept'
      }
    ).then(() => {
      console.log("1")
      Contacts.getAll().then(contacts => {
        console.log("2");
        setContacts(contacts);
          
    })
      })
        });

  const keyExtractor = (item, idx) => {
    return item?.recordID?.toString() || idx.toString();
  };

  const renderItem = ({item, index}) => {
    return <Contact contact={item} />;
  };

  return (
    <FlatList data={contacts} renderItem={renderItem} keyExtractor={keyExtractor} /> 
      
  )
      
    
  
}

export default InviteLink