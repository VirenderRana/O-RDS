import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import CheckBox from "expo-checkbox";
import Slider from '@react-native-community/slider';
import data from '../utils/ques.json';
import AppStyles from '../utils/globalStyles';

const StartSurvey = () => {
  const [checked, setChecked] = useState({});
  const [quesIndex, setQuesIndex] = useState(0);
  const [text, setText] = useState("Enter");

  const onChangeText = () => {

  }

  const selectionGenerator = (data, selectionType) => {
    if(selectionType === "check"){
      return(
        data.questions[quesIndex].selections.map((item) => (
            
          <View key={item.index} style={styles.wrapper}>
            <CheckBox
              value={checked[item.index]}
              onValueChange={(newValue) => { setChecked({...checked, [item.index]: newValue}) }}
              color={checked[item.index] ? "#4630EB" : undefined}
            />
            <Text style={styles.text}>{item.content}</Text>
          </View>
        ))
      )
    }
    else if(selectionType === "text"){
      return(
        <View style={styles.wrapper}>
          <TextInput style={styles.textInput} />
        </View>
      )
    }
    else if(selectionType === "slider"){
      return(
        <View style={styles.wrapper}>
          <Slider
            style={{width: "90%", height: 40}}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor="#bee6af"
            maximumTrackTintColor="#000000"
          />
        </View>
      )
    }
  }

  const nextQuesHandler = () => {
    if(quesIndex<data.numQues-1){
      setQuesIndex(quesIndex+1);
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style = {styles.question}>Q{data.questions[quesIndex].index}: {data.questions[quesIndex].question}</Text>
        {selectionGenerator(data, data.questions[quesIndex].selectionType)}
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
  textInput: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
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