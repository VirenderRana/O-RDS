import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Modal, Alert, TouchableOpacity, Button, Dimensions, ScrollView, Pressable} from 'react-native';
import AppStyles from '../utils/globalStyles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const [reward, setReward] = useState(0);
    const [code, setCode] = useState('');
    const [start, setStart] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation(); 

    useEffect(() => {
        setStart(false)
    },[]);
    const startSurveyHandler = () => {
        if(code==="WSTM"){
            setModalVisible(true);
            if(start === true){
                navigation.navigate("Start");
                
            }
        }
        else{
            alert("This survey code is incorrect!")
        }
        
    }

    return (
        <View style={styles.background}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ScrollView>
                        <Text style={styles.modalText}>  RESEARCH PARTICIPANT NOTIFICATION  

    1. Virender Singh is inviting you to participate in this research study.  
 
2. The title of this study is “Increasing the Effectiveness of Respondent-Driven Sampling by 
Surveying the Experiences of Women in STEM”. The purpose of this study is to gain 
knowledge of experiences of women in stem and to examine different strategies for 
increasing the length of referral chains, improving the effectiveness of respondent-driven 
sampling, and to test a mobile app for taking surveys.  
 
3. Your participation in this study will involve taking a survey, and, optionally, inviting 
your friends and acquaintances to take part in the survey. The survey should take 
approximately 10 to 15 minutes to complete.  
 
4. The risks to you as a participant are minimal. These include stress from taking a survey, 
although help is available if you need it.  
 
5. The results of this study may be published in scientific research journals or presented at 
professional conferences. However, your name and identity will not be revealed and your 
record will remain confidential. At the end of the survey, identifying information 
gathered electronically will be destroyed and replaced with numerical IDs.  
 
6. Participation in this study will not benefit you directly. Your participation may benefit 
others by improving the development of software.  
 
7. You can choose not to participate. If you decide not to participate, there will not be a 
penalty to you or loss of any benefits to which you are otherwise entitled. You may 
withdraw from this study at any time.  
 
8. If you have questions about this research study, you can call Virender Singh at 618-420- 
1698. If you have questions about your rights as a research participant, you can call the 
SIUE Institutional Review Board at 618-650-3010 or email at irbtraining@siue.edu.  </Text>
                    </ScrollView>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => {setStart(!start); startSurveyHandler()}}>
                    <Text style={styles.textStyle}>Go to Survey!</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <View style={styles.rewardBox}>
                <Text style = {{ color: 'white', fontSize: 20}}>Total Rewards</Text>
                <Text style={styles.reward}>${reward}</Text> 

            </View>
            
            <ScrollView
            showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.surveyCard}>
                        <View style={styles.inputContainer}>
                            <TextInput
                            placeholderTextColor="grey"
                            placeholder="Enter Survey Code"
                            value={code}
                            onChangeText={text => setCode(text)}
                            style={styles.input}
                            />
                        </View>
                        <Pressable 
                        onPress = {startSurveyHandler}
                        style={({ pressed }) => [
                        styles.startButton,
                        {backgroundColor: pressed ? '#bee6af' :AppStyles.colour.secondary}
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        backgroundColor: '#FFFDD0',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        
    },
    inputContainer:{
        width: '80%',
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#9CD289',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor:'#9CD289'
    },
    buttonOutlineText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonText:{
        color: '#9CD289',
        fontWeight: '700',
        fontSize: 16,
    },
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
      },
      modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        height: "90%",
        width: "90%",
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
      },
      buttonClose: {
        backgroundColor: '#2196F3',
      },
      textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      modalText: {
        marginBottom: 15,
        textAlign: 'center',
      },
      
  });

  export default Home