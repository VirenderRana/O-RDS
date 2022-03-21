import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Dimensions, ScrollView } from 'react-native';

const windowHeight = Dimensions.get('window').height;


const Home = () => {
    const [reward, setReward] = useState(0);

    return (
        <View style={styles.background}>
            <View style={styles.rewardBox}>
                <Text>Rewards</Text>
                <Text style={styles.reward}>${reward}</Text>
            </View>
            
            <ScrollView
        showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.surveyCard}>
                    <Text style={{fontSize: 32}}>Survey 1</Text>
                    <Button title="Start" style={styles.startButton} />
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
          height: 152,
          backgroundColor: "#7879F1",
          justifyContent: 'center',
          alignItems: 'center'
      },
      startButton: {
          backgroundColor: '#8BD272',
          color: 'red'
      },
      surveyCard: {
          height: 280,
          width: 350,
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
      }
  });

  export default Home