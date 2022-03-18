import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./home"
import navbar from "./navbar"

export default function App() {
  //return (
    //<View style={styles.container}>
    //  <Text>Hello World!</Text>
    //  <StatusBar style="auto" />
    //</View>
  //);
  return <Home />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f99',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
