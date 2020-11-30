import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen'
import AddItemsScreen from './Components/AddItemsScreen';
import Login from './Components/Login'

const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <HomeScreen/>
      // <NavigationContainer>
      //   <Stack.Navigator>
      //   {/* <Stack.Screen
      //       name=" "
      //       component={Login}
      //     /> */}
      //   <Stack.Screen
      //       name="Home"
      //       component={HomeScreen}
      //     />
      //     <Stack.Screen
      //       name="AddItems"
      //       component={AddItemsScreen}
      //     />
      //   </Stack.Navigator>
      // </NavigationContainer>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;