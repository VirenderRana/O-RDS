import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, FlatList, PermissionsAndroid } from 'react-native';
import Contact from '../components/contact';
import * as Contacts from "expo-contacts";

const InviteContacts = () => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.PHONE_NUMBERS]
          
        });
        if (data.length > 0) {
          setContacts(data);
          console.log(data[0]);
        }
      }
    })();
  }, []);
  const keyExtractor = (item, idx) => {
    return item?.id?.toString() || idx.toString();
  };
  const renderItem = ({ item, index }) => {
    return <Contact contact={item} />;
  };
  return (
    <FlatList
      data={contacts}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      style={styles.list}
    />
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
});

  

export default InviteContacts