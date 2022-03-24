import { Center } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable} from 'react-native';
import { styleProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Invite = () => {
  return (
    <View style={styles.background}>
        <Text style={styles.titleText}>Invite Friends to join this Survey</Text>
        <Pressable 
            style={({ pressed }) => [
            styles.shareButton,
            {
              backgroundColor: pressed ? '#bee6af' :AppStyles.colour.secondary,
            }
            
            ]}>
          <Text style = {{ color: 'white', fontSize: 20}} >Share your invite link</Text>
        </Pressable>
        <Text style={styles.usedCounter}>0/4 used</Text> 
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
      top: 20,
      //height: windowHeight / 2,
      backgroundColor: AppStyles.colour.background,
      alignItems: 'center'
  },
  titleText: {
    color: AppStyles.colour.primary,
    fontSize: 32,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 30
  },
  shareButton: {
    backgroundColor: AppStyles.colour.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: windowWidth / 1.2,
    borderRadius: 20,
    elevation: 3,
    padding: 30
  },
  usedCounter: {
    padding: 30,
    fontSize: 24
  }

});

export default Invite