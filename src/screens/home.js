import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable} from 'react-native';
import AppStyles from '../utils/globalStyles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [reward, setReward] = useState(0);
    const navigation = useNavigation(); 
    const startSurveyHandler = () => {
        navigation.navigate("Start");
    }

    return (
        <View style={styles.background}>
            <View style={styles.rewardBox}>
                <Text style = {{ color: 'white', fontSize: 20}}>Total Rewards</Text>
                <Text style={styles.reward}>${reward}</Text> 

            </View>
            
            <ScrollView
        showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.surveyCard}>
                        <Text style={styles.staticReward} >$10</Text>
                        <Text style={styles.questionAmount}>25 Questions</Text>
                        <Text style={{fontSize: 32}}>Survey 1</Text>
                        <Pressable 
                        onPress = {startSurveyHandler}
                               style={({ pressed }) => [
                                styles.startButton,
                                {
                                  backgroundColor: pressed ? '#bee6af' :AppStyles.colour.secondary,
                                }
                                
                               ]}>
                            <Text style = {{ color: 'white', fontSize: 20}} >Start</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
    
  }

  const styles = StyleSheet.create({
      background: {
          height: windowHeight,
          backgroundColor: AppStyles.colour.background,
          alignItems: 'center'
      },
      reward: {
          fontSize: 64,
          color: AppStyles.colour.secondary
      },
      rewardBox: {
          width: '100%',
          height: windowHeight / 4.5, // 152
          backgroundColor: AppStyles.colour.primary,
          justifyContent: 'center',
          alignItems: 'center'
      },
      startButton: {
          top: 15,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 8,
          width: windowWidth / 1.5,
          borderRadius: 20,
          elevation: 3
      },
      surveyCard: {
          height: 280, // 280 windowHeight / 3
          width: 370, // 350 windowWidth / 1.2
          margin: 10,
          backgroundColor: AppStyles.colour.white,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 20,
          shadowColor: '#000000',
          shadowOffset: {width: -2, height: 4},
          shadowOpacity: 0.2,
          shadowRadius: 3,
          elevation: 5
      },
      staticReward: {
        fontSize: 16,
        position: "absolute",
        left: 15,
        top: 15
      },
      questionAmount: {
        fontSize: 16,
        position: "absolute",
        right: 15,
        top: 15
      }
      
  });

  export default Home