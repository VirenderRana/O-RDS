import React, {useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Help from '../screens/help';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AppStyles from '../utils/globalStyles';
import HomeStack from './homeStack';
import MoreStack from './moreStack';
import InviteStack from './inviteStack';

const Tab = createBottomTabNavigator();

export const Root = () => {
    const [reward, setReward] = useState(0);
  return (
    <Tab.Navigator
    initialRouteName="Surveys"
    
        screenOptions={({route})=>({
            tabBarIcon: ({focused, size, color}) => {
                let iconName;
                if(route.name==='Surveys') {
                    iconName = "poll-h";
                }
                else if (route.name === 'Invite Others') {
                    iconName = "user-plus";
                }
                else if (route.name === 'Get Help') {
                    iconName = "info-circle";
                }
                else if (route.name === 'More') {
                    iconName = "angle-double-right";
                }
                return (
                    <FontAwesome5 
                        name={iconName}
                        color={AppStyles.colour.primary}
                        size={20}
                    />
                )    
            },
            headerShown: false
        })   
        }
        >
        <Tab.Screen
            name="Surveys"
            component={HomeStack}
        />
        <Tab.Screen
            name="Invite Others"
            component={InviteStack}
        />
        <Tab.Screen
            name="Get Help"
            component={Help}
        />
        <Tab.Screen
            name="More"
            component={MoreStack}
        />
    </Tab.Navigator>
  )
}
