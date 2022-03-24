import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Help from '../screens/help';
import Invite from '../screens/invite';
import More from '../screens/more';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AppStyles from '../utils/globalStyles';

const Tab = createBottomTabNavigator();

export const Root = () => {
  return (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon: ({focused, size, color}) => {
                let iconName;
                if(route.name==='Surveys') {
                    iconName = "poll-h";
                }
                else if (route.name === 'Invite Friends') {
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
            }
        })   
        }
        >
        <Tab.Screen
            name="Surveys"
            component={Home}
        />
        <Tab.Screen
            name="Invite Friends"
            component={Invite}
        />
        <Tab.Screen
            name="Get Help"
            component={Help}
        />
        <Tab.Screen
            name="More"
            component={More}
        />
    </Tab.Navigator>
  )
}
