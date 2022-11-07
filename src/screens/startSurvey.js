import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Pressable, ScrollView, TextInput } from 'react-native';
import CheckBox from "expo-checkbox";
import Slider from '@react-native-community/slider';
import data from '../utils/ques.json';
import AppStyles from '../utils/globalStyles';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { v4 as uuidv4 } from 'uuid';



import { useNavigation } from '@react-navigation/native';

const StartSurvey = () => {
  const [survey, setSurvey] = useState({});
  const [checked, setChecked] = useState({});
  const [quesIndex, setQuesIndex] = useState(1);
  const navigation = useNavigation(); 

  useEffect(() => {
    const docRef = doc(firestore, "Surveyques", "WSTM");
    //const sdata = await getDoc(docRef);
    //const user = firestore().collection('Surveyques').doc('WSTM').get();

    async function asyncCall() {
      //console.log('calling');
      const sdata = await getDoc(docRef);
      //console.log(sdata);
      // expected output: "resolved"
    }
    asyncCall();
    //console.log(user);
    setSurvey(data);
    console.log(survey);
        
  })

  const selectionGenerator = (currQuestion) => {
    if(currQuestion.selectionType === "check"){
      return(
        currQuestion.selections.map((item) => (
            
          <View key={item.indexsel} style={styles.wrapper}>
            <CheckBox
              value={checked[item.indexsel]}
              onValueChange={(newValue) => { setChecked({...checked, [item.indexsel]: newValue}) }}
              color={checked[item.indexsel] ? "#4630EB" : false}
            />
            <Text style={styles.text}>{item.content}</Text>
          </View>
        ))
      )
    }
    else if(currQuestion.selectionType === "single-check"){
      return(
        currQuestion.selections.map((item) => (
            
          <View key={item.indexsel} style={styles.wrapper}>
            {setChecked([item.indexsel])}
            <CheckBox
              value={checked[item.indexsel]}
              onValueChange={(newValue) => { setChecked({...checked, [item.indexsel]: newValue}) }}
              color={checked[item.indexsel] ? "#4630EB" : false}
            />
            <Text style={styles.text}>{item.content}</Text>
          </View>
        ))
      )
    }
    else if(currQuestion.selectionType === "text"){
      return(
        <View style={styles.wrapper}>
          <TextInput style={styles.textInput}
          value = {checked[currQuestion.index]}
            onChangeText={(newValue) => { setChecked({...checked, [currQuestion.index]: newValue}) }}
          />
          
        </View> 
      )
    }
    else if(currQuestion.selectionType === "slider"){
      return(
        <View>
            <View style={styles.wrapper}>
          
          <Slider
            style={{width: "100%", height: 40}}
            minimumValue={0}
            maximumValue={10}
            step={1}
            onSlidingComplete = {(newValue) => { setChecked({...checked, [currQuestion.index]: newValue}) }}
            minimumTrackTintColor="#bee6af"
            maximumTrackTintColor="#000000"
          />
          
        </View>
        <Text style={styles.sliderText}>     Disagree                                                               Agree</Text>
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
    console.log(checked);
    if(quesIndex<data.numQues){
      setQuesIndex(quesIndex+1);
    }
    else{
     // let uuid = uuidv4(); uuid.slice(0,8)
      // async function asyncCal() {
      // await SecureStore.setItemAsync('secure_deviceid', JSON.stringify(uuid));
      // }
      // asyncCal();
      // let fetchUUID;
      // async function asyncCall() {
      //   fetchUUID = await SecureStore.getItemAsync('secure_deviceid');
      //   // expected output: "resolved"
      // }
      // asyncCall();
      
      //console.log(uuid);
      setDoc(doc(firestore, "User_responses", "${Math.random()}"), {
        checked
      });
      //setReward(10);
      navigation.navigate("Home", { Screen: 'Surveys', params:{ Screen: "Invite Others"} });
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
            <Text style = {{ color: 'white', fontSize: 20}} >{(quesIndex<data.numQues)? "Next question":"Submit"}</Text>
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
  sliderText: {
    display: "flex",
    flexGrow: 1
  },
  wrapper: {
    flexGrow: 1,
    flexDirection: "row",
    alignContent: "center",
    padding: 15
  },
});

export default StartSurvey;