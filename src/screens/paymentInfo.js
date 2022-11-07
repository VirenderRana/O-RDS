import React, { useState, useEffect } from 'react';
import AppStyles from '../utils/globalStyles';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Button, Dimensions, ScrollView, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

const PaymentInfo = () => {
  return (
    <View style={styles.container}>
      <Text>PaymentInfo</Text>
      <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Email address"
                  //value={}
                  //onChangeText={}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Phone number"
                  //value={}
                  //onChangeText={}
                  style={styles.input}
                  secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                  //onPress={}
                  style={[styles.button]}>
                      <Text style={styles.buttonOutlineText}>Submit</Text>
                  </TouchableOpacity>
            </View>
    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  input: {
      backgroundColor: 'grey',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
  },
  inputContainer:{
      width: '80%',
  },
  buttonContainer:{
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40
  },
  button: {
      backgroundColor: '#9CD289',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center'
  },
  buttonOutline:{
      backgroundColor: 'white',
      marginTop: 5,
      borderColor:'#9CD289'
  },
  buttonOutlineText:{
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
  buttonText:{
      color: '#9CD289',
      fontWeight: '700',
      fontSize: 16,
  }
  
})

export default PaymentInfo