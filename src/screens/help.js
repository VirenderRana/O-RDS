import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import * as MailComposer from "expo-mail-composer";

const Help = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedError, setSelectedError] = useState();

  const SendEmail = () => {
    MailComposer.composeAsync({
        recipients: [], // array of email addresses
        subject: "RDS survey inquiry",
        body: ""
    });
    setModalVisible(!modalVisible);
  }

//   const handleEmail = () => {
//     const to = ['visingh@siue.edu', 'visingh97@outlook.com'] // string or array of email addresses
//     email(to, {
//         // Optional additional arguments
//         cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
//         bcc: 'mee@mee.com', // string or array of email addresses
//         subject: 'Show how to use',
//         body: 'Some body right here',
//         checkCanOpen: false // Call Linking.canOpenURL prior to Linking.openURL
//     }).catch(console.error)
// }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={SendEmail}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable 
        onPress={() => setModalVisible(true)}
        style={({ pressed }) => [
        styles.nextButton,
        { borderRadius: 20, width: "80%", padding: 10,
          backgroundColor: pressed ? '#bee6af' :AppStyles.colour.secondary,
        }
        
        ]}>
          <Text style = {{ color: 'white', fontSize: 28, alignSelf: "center"}} >Send Inquiry Email</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
centeredView: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
modalView: {
  margin: 20,
  backgroundColor: 'white',
  borderRadius: 20,
  height: "90%",
  width: "90%",
  padding: 20,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
},
buttonClose: {
  backgroundColor: '#2196F3',
},
textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
},
modalText: {
  marginBottom: 15,
  textAlign: 'center',
},
});

export default Help