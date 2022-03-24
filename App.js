import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
import { Root } from './src/navigation/root';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar Auto />
        <Root />
      </NavigationContainer>
  );
}
