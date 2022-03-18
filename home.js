import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ReactNativeStyleAttributes from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import navbar from "./navbar"


// Survey box component
const SurveyOverlay = () => {

    // State for which survey is listed
    const [surveyNum, setSurveyNum] = useState(1);

    return (
        <View style = {styles.SurveyContainer} >
            <Text style={styles.SurveyText}>  Survey {surveyNum} </Text>
            <Button style={styles.button} title="Start Now" color= "#8BD272" /> 
        </View>
    )
}

export default function Home() {
    const [reward, setReward] = useState(0);

    return (
  
    <View
        style={{
            backgroundColor: "#fff",
            flex: 1,
        }}
    >

    <View
        style={{
            backgroundColor: "#fff",
            width: "100%",
            height: "8%",
            
            
        }}
    >

        <Text style = {styles.titleText}>RDS app</Text>
    </View>

    <View
        style={{
            backgroundColor: "#7879F1",
            justifyContent: "center",
            width: "100%",
            height: "25%",
            
        }}
        >
        <Text style={styles.text}>Total Rewards</Text>
        <Text style={styles.rewardText}> $ {reward} </Text>
        <Button style={styles.button} title="Configure" color= "#E59435" onPress={() => setReward(reward + 1)} /> 
    </View> 
    
      <SurveyOverlay />
    </View>



    );
    
  }
  

  function nav() {
    <navbar />
  }

  const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: "white",
        top: 50,
        fontSize: 18,
    },

    titleText: {
        position: 'absolute',
        width: 140,
        height: 42, 
        fontSize: 36,
        color: "#7879F1",
        fontFamily: "Roboto",
        fontWeight:  '300',
        // lineHeight: 42,
    },

    rewardText: {
        flex: 1,
        flexDirection: "column",
        textAlign: 'center',
        color: "#8BD272",
        top: 50, 
        fontSize: 64,
    
    },

    button: {
        flex: 1,
        position: "absolute",
        borderRadius: 20,
        flexDirection: "column",
        fontSize: 18,
    },

    SurveyContainer: {
        
        alignItems: "center",
        justifyContent: 'center',
        
        top: 50,
        //shadowRadius: 3,
        //shadowColor: "black",
        //shadowOpacity: 10,
        //shadowOffset: {
        //    height: 4,
        //    width: 0,
        //},
   
        elevation: 8,
        shadowColor: 'black',
        height: "30%",
        marginLeft: 10,
        marginRight: 10,

    },
    SurveyText: {
        flex: 1,
        textAlign: 'center',
        color: "black",
        top: 50,
        fontSize: 18,
    },
  });
