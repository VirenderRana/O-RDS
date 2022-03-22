import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView, Pressable} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const Home = () => {
    const [reward, setReward] = useState(0);

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
                               style={({ pressed }) => [
                                styles.startButton,
                                {
                                  backgroundColor: pressed ? '#bee6af' :'#8BD272',
                                }
                                
                               ]}>
                            <Text style = {{ color: 'white', fontSize: 20}} >Start</Text>
                        </Pressable>
                        {/** <Button title="Start" style={styles.startButton} color= "#8BD272"/> */ }
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
    
  }

  const styles = StyleSheet.create({
      background: {
          height: windowHeight,
          backgroundColor: '#F3F3F3',
          alignItems: 'center'
      },
      reward: {
          fontSize: 64,
          color: '#8BD272'
      },
      rewardBox: {
          width: '100%',
          height: windowHeight / 4.5, // 152
          backgroundColor: "#7879F1",
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
          height: windowHeight / 3, // 280
          width: windowWidth / 1.2, // 350
          margin: 20,
          backgroundColor: '#FFFFFF',
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
        fontSize: 24,
        position: "absolute",
        left: 15,
        top: 15
      },
      questionAmount: {
        fontSize: 24,
        position: "absolute",
        right: 15,
        top: 15
      }
      
  });

  export default Home