import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from "expo-font";
import {RegistrationScreen} from './Screens/RegistrationScreen'
import {LoginScreen} from './Screens/LoginScreen'
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <RegistrationScreen></RegistrationScreen>
      {/* <LoginScreen></LoginScreen> */}
      <StatusBar style="auto" />
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
