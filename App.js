



import { StatusBar } from 'expo-status-bar';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import { getAuth, signOut } from 'firebase/auth';
import { Button, Text, View } from 'react-native';
import Chatbot from './Chatbot';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DrawerPage from './Dashboard';
import Dashboard from './Dashboard';
import Directories from './Directories';
import UniversityMap from './UniversityMap';


const Stack = createNativeStackNavigator();

export default function App() {
    
  
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user)
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator >
        <Stack.Screen
          name="SignIn"
          component={SignInForm}
          options={{title: 'Sign In', headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpForm}
          options={{title: 'Sign Up', headerShown: false}}
        /> 
        <Stack.Screen 
          name="Dashboard"
          component={Dashboard}
          options={{title: 'Dashboard', headerShown: false }}
        />
        <Stack.Screen
          name="Chatbot"
          component={Chatbot}
          options={({ navigation }) => ({
            title: 'Chatbot', 
          })}
        />
        <Stack.Screen 
          name="Directories"
          component={Directories}
          options={{title: 'Directories' }}
        />
        <Stack.Screen 
          name="UniversityMap"
          component={UniversityMap}
          options={{title: 'University Map' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
