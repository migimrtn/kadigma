import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Image, Pressable } from 'react-native';
import 'react-native-get-random-values';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
console.log('jayson');
const SignUpForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('SignIn')
  }

  const handleSignUp = async () => {
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert('Success', 'User successfully created!')
        navigation.navigate('Dashboard')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert('Error', errorMessage)
      });
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles?.title}>Sign Up</Text>
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
      <Pressable style={styles.buttonContainer} onPress={handleSignUp} >
        <Text style={{ color: 'white'}}>Submit</Text>
      </Pressable>
      <Pressable onPress={handleLogin}>
        <Text style={{ color: 'orange', marginTop: 20 }}>Already have an account? Sign In Here.</Text>
      </Pressable>
      <Image 
        source={require('./assets/bg3x.png')}
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '100%',
          height: '40%',
          resizeMode: 'cover',
          zIndex: -1,
          aspectRatio: 1 / 1,
          backgroundColor: '#F5F5F5',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    aspectRatio: 4 / 3,
    height: 200,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
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
    width: '80%',
    backgroundColor: '#D10003',
    borderRadius: 5,
    height: 40,
  }
});

export default SignUpForm;