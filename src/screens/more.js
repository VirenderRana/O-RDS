import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';

const More = () => {
  return (
   // <MenuProvider>
      <View style={styles.background}>

      <View style={styles.row}>
      <FontAwesome5 style={styles.icon} name = 'credit-card' /> 
         <Pressable style={({ pressed }) => [
            styles.shareButton,
            {
              backgroundColor: pressed ? 'lightgrey' :'#F3F3F3',
            }
            
            ]}>
          
            
            <Text style={styles.text}>Payment Info </Text>
          
          </Pressable>
        </View>
        {/**   <Menu>
            <MenuTrigger text='Select action' />
            <MenuOption>
              <MenuOption onSelect={() => alert('Save')} text='Save' />
            </MenuOption>
          </Menu>
        */}
        <View style={styles.row}>
          <FontAwesome5 style={styles.icon} name='user'/> 
          <Pressable style={({ pressed }) => [
              styles.shareButton,
              {
                //Style change here
                backgroundColor: pressed ? 'lightgrey' :'#F3F3F3',
              }
              
              ]}>
            
              
              <Text style={styles.text}>My Profile</Text>
            
            </Pressable>
          </View>

        <View style={styles.row}>
          <FontAwesome5 style={styles.icon} name = 'list-alt' /> 
          <Pressable style={({ pressed }) => [
              styles.shareButton,
              {
                //Style change here
                backgroundColor: pressed ? 'lightgrey' :'#F3F3F3',
              }
              
              ]}>
            
            <Text style={styles.text}>Terms and Conditions</Text>
          </Pressable>
        </View>
  
        <View style={styles.row}>
          <FontAwesome5 style={styles.icon} name = 'window-close' /> 
          <Pressable style={({ pressed }) => [
              styles.shareButton,
              {
                //Style change here
                backgroundColor: pressed ? 'lightgrey' :'#F3F3F3',
              }
              
              ]}>
            
            <Text style={styles.text}>Log Out</Text>
          </Pressable>
        </View>

      </View>
  //  </MenuProvider>
  )
}

const styles = StyleSheet.create({
  background: {
    
    top: 20,
    left: 10,
    backgroundColor: '#F3F3F3'
  },
  row: {

    flexDirection: "row",
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
    
  },
  text: {
    margin: 8,
    fontSize: 32,
  },
  icon: {
    fontSize: 32,
    color: "#7879F1",
  }

});

export default More