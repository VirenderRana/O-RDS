import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button, Dimensions, ScrollView } from 'react-native';
import CheckBox from "expo-checkbox";
import data from '../utils/ques.json';
import AppStyles from '../utils/globalStyles';

const StartSurvey = () => {
  const [checked, setChecked] = useState({});
  const [quesIndex, setQuesIndex] = useState(0);

  const nextQuesHandler = () => {
    if(quesIndex<data.numQues-1){
      setQuesIndex(quesIndex+1);
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
          <Text style = {styles.question}>Q{data.questions[quesIndex].index}: {data.questions[quesIndex].question}</Text>
          {data.questions[quesIndex].selections.map((item) => (
            <View key={item.index} style={styles.wrapper}>
            <CheckBox
              value={checked[item.index]}
              onValueChange={(newValue) => { setChecked({...checked, [item.index]: newValue}) }}
              color={checked[item.index] ? "#4630EB" : undefined}
            />
            <Text style={styles.text}>{item.content}</Text>
          </View>
            
          ))}
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable 
          onPress = {nextQuesHandler}
          style={({ pressed }) => [
          styles.nextButton,
          {
            backgroundColor: pressed ? '#bee6af' :AppStyles.colour.secondary,
          }
          
          ]}>
            <Text style = {{ color: 'white', fontSize: 20}} >Next question</Text>
        </Pressable>
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: "flex-end",
    paddingRight: 10,
  },
  container: {
    backgroundColor: AppStyles.colour.white,
    margin: 10
  },
  nextButton: {
    width: "50%",
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 20,
    elevation: 3
  },
  question:{
    fontSize: 20,
    margin: 15
  },
  text: {
    marginLeft: 10,
    fontSize: 16
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    paddingVertical: 15,
    paddingLeft: 15
  },
});

export default StartSurvey