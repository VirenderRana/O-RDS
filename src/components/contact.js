import React from "react";
import {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import AppStyles from '../utils/globalStyles';
import * as SMS from 'expo-sms';

const retrieveNumber = (contact, phoneNum) => {
    
    try {
      phoneNum = contact?.phoneNumbers[0]?.number;
      return phoneNum;
      
    }
    catch (e) {
     phoneNum = ('no phone number found');
     return phoneNum;
      
    }
    
}

const loadSMS = async (phoneNum) => {
  //const [contacts, setContacts] = useState([]);

  const { result } = await SMS.sendSMSAsync(
    [phoneNum, phoneNum],
    'This is a test Message',
    {
      //attachments: {
      //  uri: 'path/myfile.png',
      //  mimeType: 'image/png',
      //  filename: 'myfile.png',
      //},
    }
  );
  
};

const Contact = ({ contact }) => {

  var phoneNum= '';

  return (
    <Pressable onPress={() => {{loadSMS(phoneNum)}}} style={({pressed}) => [{backgroundColor: pressed ? AppStyles.colour.background: AppStyles.colour.white}]}>
    <View style={styles.contactCon}>
      
      <View style={styles.imgCon}>
        <View style={styles.placeholder}>
          <Text style={styles.txt}>{contact?.name[0]}</Text>
        </View>
      </View>

      <View style={styles.contactDat}>
      <Text style={styles.name}>{contact?.name} </Text>
      <Text style={styles.phoneNumber}>
          {phoneNum = retrieveNumber(contact, phoneNum)}
        </Text>
       
      </View>
      
    </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  contactCon: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: "#d9d9d9",
  },
  imgCon: {},
  placeholder: {
    width: 55,
    height: 55,
    borderRadius: 30,
    overflow: "hidden",
    backgroundColor: "#d9d9d9",
    alignItems: "center",
    justifyContent: "center",
  },
  contactDat: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5,
  },
  txt: {
    fontSize: 18,
  },
  name: {
    fontSize: 16,
  },
  phoneNumber: {
    color: "#888",
  },
});

export default Contact;