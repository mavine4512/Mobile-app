import React from 'react';
import Home from './Components/HomeScreen';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
  
    <NavigationContainer>
       <Stack.Navigator
      initialRouteName="Login"
      headerMode="HomeScreen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'gold' },
      }}
    >
       <Stack.Screen

        name="Login"
        component={Login}
        options={{
          title: 'Awesome app',
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{
          title: 'Home page',
        }}
      /> 
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: 'SignUp page',
        }}
      /> 
    
      </Stack.Navigator>
   </NavigationContainer>
    
  );
}
