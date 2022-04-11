import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import CheckBox from "expo-checkbox";
import Slider from '@react-native-community/slider';
import data from '../utils/ques.json';
import AppStyles from '../utils/globalStyles';

const StartSurvey = () => {
  const [survey, setSurvey] = useState({});
  const [checked, setChecked] = useState({});
  const [quesIndex, setQuesIndex] = useState(1);

  useEffect(() => {
    setSurvey(data);
        
  })

  const selectionGenerator = (currQuestion) => {
    if(currQuestion.selectionType === "check"){
      return(
        currQuestion.selections.map((item) => (
            
          <View key={item.index} style={styles.wrapper}>
            <CheckBox
              value={checked[item.index]}
              onValueChange={(newValue) => { setChecked({...checked, [item.index]: newValue}) }}
              color={checked[item.index] ? "#4630EB" : false}
            />
            <Text style={styles.text}>{item.content}</Text>
          </View>
        ))
      )
    }
    else if(currQuestion.selectionType === "single-check"){
      return(
        currQuestion.selections.map((item) => (
            
          <View key={item.index} style={styles.wrapper}>
            {setChecked([item.index])}
            <CheckBox
              value={checked[item.index]}
              onValueChange={(newValue) => { setChecked({...checked, [item.index]: newValue}) }}
              color={checked[item.index] ? "#4630EB" : false}
            />
            <Text style={styles.text}>{item.content}</Text>
          </View>
        ))
      )
    }
    else if(currQuestion.selectionType === "text"){
      return(
        <View style={styles.wrapper}>
          <TextInput style={styles.textInput} />
          {console.log(checked)}
        </View> 
      )
    }
    else if(currQuestion.selectionType === "slider"){
      return(
        <View style={styles.wrapper}>
          <Slider
            style={{width: "100%", height: 40}}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#bee6af"
            maximumTrackTintColor="#000000"
          />
        </View>
      )
    }
    else{
      <View>
        <Text>Invalid Selection type!</Text>
      </View>
    }
  }

  const nextQuesHandler = () => {
    if(quesIndex<data.numQues){
      setQuesIndex(quesIndex+1);
    }
  }

  
  return (
    <ScrollView>
      <View style={styles.questionContainer}>
        {data.questions.filter((qstn) => qstn.index===quesIndex).map((currQuestion)=>(
          <View key={currQuestion.index}>
            <Text style = {styles.question}>Q{currQuestion.index}: {currQuestion.question}</Text>
            {selectionGenerator(currQuestion)}
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
  questionContainer: {
    backgroundColor: AppStyles.colour.white,
    margin: 10
  },
  textInput: {
    flexGrow: 1,
    height: 40,
    margin: 15,
    borderWidth: 1,
    paddingLeft: 10
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
    marginLeft: 15,
    fontSize: 16
  },
  wrapper: {
    flexDirection: "row",
    alignContent: "center",
    padding: 15
  },
});

export default StartSurvey;