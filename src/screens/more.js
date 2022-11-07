import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';

const More = () => {
  const navigation = useNavigation(); 
  const paymentInfoRouter = () => {
    navigation.navigate("Payment Info");
  }
  const myProfileRouter = () => {
    navigation.navigate("My Profile");
  }
  const TermsAndConditionsRouter = () => {
    navigation.navigate("Terms");
  }
  return (
   // <MenuProvider>
      <ScrollView style={styles.background}>


        <Pressable 
          onPress={paymentInfoRouter}
          style={({ pressed }) => [
          styles.shareButton,
          {
            backgroundColor: pressed ? 'lightgrey' :AppStyles.colour.white,
          }
          
          ]}>
        
          <View style={styles.row}>
            <FontAwesome5 style={styles.icon} name = 'credit-card' /> 
            <Text style={styles.text}>Payment Info </Text>
            </View>
        </Pressable>
        
        <Pressable 
            onPress={TermsAndConditionsRouter}
            style={({ pressed }) => [
            styles.shareButton,
            {
              //Style change here
              backgroundColor: pressed ? 'lightgrey' :AppStyles.colour.white,
            }
            
            ]}>
          <View style={styles.row}>
            <FontAwesome5 style={styles.icon} name = 'list-alt' /> 
            <Text style={styles.text}>Terms and Conditions</Text>
          </View>
        </Pressable>
        

      </ScrollView>
  //  </MenuProvider>
  )
}

const styles = StyleSheet.create({
  background: {
    
    // top: 20,
    // left: 10,
    backgroundColor: AppStyles.colour.white
  },
  row: {
    top: 8,
    flexDirection: "row",
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
    
  },
  text: {
    margin: 10,
    fontSize: 20,
  },
  icon: {
    fontSize: 28,
    color: AppStyles.colour.primary,
    margin: 10
  }

});

export default More