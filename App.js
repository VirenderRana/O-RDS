import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/home';
import { Root } from './src/navigation/root';import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar Auto />
        <Root />
      </NavigationContainer>
  );
}
