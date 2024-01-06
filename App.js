import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  } from 'react-native';
import Demo from './Components/Demo';
import Login from './Pages/Login/login';
import Register from './Pages/Regsiter/Register';

export default function App() {
  return (
    <View style={styles.container}>
     <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
