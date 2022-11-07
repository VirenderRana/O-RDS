import React, { useState, useEffect } from 'react';
import AppStyles from '../utils/globalStyles';
import { StyleSheet, Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Button, Dimensions, ScrollView, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigation = useNavigation(); 

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("root");
            }
        })
        return unsubscribe;
    }, [])

    const handleSignup = () => {
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log(user.email);
            alert(user.email+' is registered!')
        })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with ', user.email);
        })
        .catch(error => alert(error.message))
    }
    return(
        <KeyboardAvoidingView
          style={styles.container}
          behavior="padding"
        >
            <View style={styles.inputContainer}>
                <TextInput
                  placeholder="Email"
                  value={email}
                  onChangeText={text => setEmail(text)}
                  style={styles.input}
                />
                <TextInput
                  placeholder="Password"
                  value={password}
                  onChangeText={text => setPassword(text)}
                  style={styles.input}
                  secureTextEntry
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={handleLogin}
                  style={[styles.button]}>
                      <Text style={styles.buttonOutlineText}>Login</Text>
                  </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSignup}
                  style={[styles.button, styles.buttonOutline]}>
                      <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
    

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

export default Login