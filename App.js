import { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { RegistrationScreen } from './Screens/RegistrationScreen.jsx';
import { LoginScreen } from './Screens/LoginScreen.jsx';

export default function App() {
  const [isUserRegistered, setIsUserRegistered] = useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./fonts/Roboto-Medium.ttf'),
    'Roboto-700': require('./fonts/Roboto-Bold.ttf'),
  });
  if (!fontsLoaded) { return null; }

  return (
    // <KeyboardAvoidingView>
      <View style={styles.container}>
        <Image
          style={styles.background}
          source={require('./Images/background-image-min.jpg')}
        />
        {!isUserRegistered && <RegistrationScreen userRegistered={setIsUserRegistered} />}
        {isUserRegistered && <LoginScreen userRegistered={setIsUserRegistered} />}
        <StatusBar style='auto' />
      </View>
    // </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
  },

  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});