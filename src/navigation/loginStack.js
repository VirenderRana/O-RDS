// import React from 'react';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import 'react-native-gesture-handler';
// import { createStackNavigator } from '@react-navigation/stack';
// import Help from '../screens/help';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import AppStyles from '../utils/globalStyles';
// import HomeStack from './homeStack';
// import MoreStack from './moreStack';
// import InviteStack from './inviteStack';
// import { Root } from './root';
// import Login from '../screens/login'


// const Stack = createStackNavigator();

// const getHeaderTitle = (route) => {
//     if(route.name === 'login')
//     {
//         return("Login");
//     }
//     else if(route.name === 'root')
//     {
//         return("root");
//     }
// }

// export const LoginStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={({route})=>({
//         headerTitle: "login"
//       })}
//     >
//       <Stack.Screen options={{headerShown : false}} name="login" component={Login} />
//       <Stack.Screen options={{headerShown : false}} name="root" component={Root} />
//     </Stack.Navigator>
//   )
// }
