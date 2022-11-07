import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';

const Profile = () => {
  const [reward, setReward] = useState(0);
  // return (
  //   // <View style={styles.container}>
  //   //   <Text>User: {auth.currentUser?.email}</Text>
  //   //   <Text>Reward: {reward}$</Text>
  //   // </View>

    
  // )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingStart: 100
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

export default Profile