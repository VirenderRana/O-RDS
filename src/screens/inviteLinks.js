import { Center } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Email from './inviteEmail';

const Invite = () => {

  const navigation = useNavigation(); 

  // | New links can be added here |
  const inviteContactRouter = () => {
    navigation.navigate("Invite Contacts");
  }
  
  const inviteFacebookRouter = () => {
      navigation.navigate("Invite Facebook");
  }
  
  return (

       <ScrollView style={styles.background}>
 

         <Pressable 
            onPress={inviteContactRouter}
            style={({ pressed }) => [
            {
            backgroundColor: pressed ? 'lightgrey' :AppStyles.colour.white,
            }
            
            ]}>
        
            <View style={styles.row}>
                <FontAwesome5 style={styles.icon} name = 'address-book' /> 
                <Text style={styles.text}>Contact</Text>
                </View>
        </Pressable>

         <Pressable 
            onPress={Email}
            style={({ pressed }) => [
            {
            fontColor: pressed ? 'lightgrey' :AppStyles.colour.white,
            backgroundColor: pressed ? 'lightgrey' :AppStyles.colour.white,
            }
            
            ]}>
        
            <View style={styles.row}>
                <FontAwesome5 style={styles.icon} name = 'envelope' /> 
                <Text style={styles.text}>Email</Text>
                </View>
        </Pressable>
        
        <Pressable 
            onPress={inviteFacebookRouter}
            style={({ pressed }) => [
            {
            backgroundColor: pressed ? 'lightgrey' :AppStyles.colour.white,
            }
            
            ]}>
        
            <View style={styles.row}>
                <FontAwesome5 style={styles.icon} name = 'thumbs-up' /> 
                <Text style={styles.text}>Facebook</Text>
                </View>
        </Pressable>
         

        </ScrollView>
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
     flexDirection: 'row',
     borderColor: "#cccccc",
     borderBottomWidth: 1,
     marginBottom: 10,

   },
   text: {
     margin: 10,
     fontSize: 30,

   },
   icon: {
     fontSize: 38,
     color: AppStyles.colour.primary,
     margin: 10
   }
 
 });

export default Invite