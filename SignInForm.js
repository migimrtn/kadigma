import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Image, Pressable } from 'react-native';

//import { getDatabase, set, ref } from "firebase/database";
import 'react-native-get-random-values';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import fb from './fb';

fb()

const SignInForm = ({ navigation }) => {
  const [email, setEmail] = useState('juan@yopmail.com');
  const [password, setPassword] = useState('Abc@1234');

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  const handleLogin = async () => {
    
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate('Dashboard')
        
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        Alert.alert('Error', errorMessage)
        setEmail('')
        setPassword('')
      });
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Kadigma5by2.png')} style={styles.logo} />
      <Text style={styles?.title}>Sign In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Pressable style={styles.buttonContainer} onPress={handleLogin} >
        <Text style={{ color: 'white'}}>Sign In</Text>
      </Pressable>
      <Pressable onPress={handleSignUp}>
        <Text style={{ color: 'gray', marginTop: 20 }}>New User? Register Now.</Text>
      </Pressable>
      <Image 
        source={require('./assets/bg app.png')}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: '100%',
          resizeMode: 'cover',
          zIndex: -1,
        //  aspectRatio: 1 / 1,
          backgroundColor: 'white',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    aspectRatio: 5 / 2,
    height: 170,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: -20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    height: 50,
    borderRadius: 50,
    paddingLeft: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '30%',
    backgroundColor: '#ff0000',
    borderRadius: 50,
    height: 40,
  }
});

export default SignInForm;