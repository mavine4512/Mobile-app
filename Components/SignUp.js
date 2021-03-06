import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,StatusBar} from 'react-native';


const userInfo={username:'admin',password:'pass123456'}

export default class SignUp extends Component {

    static navigationOptions={
        header:'null'
    }
    constructor(props){
        super(props);
        this.state={
            username:'',
            email:'',
            setPassword:'',
            password:''
        }
    }
    render() {
        return (
            <View style={styles.container}>
             <StatusBar
             backgroundColor='#1e90ff'
             barStyle='light-content'
             />
             
             <Text style={styles.welcome}>SignUp</Text>

             <TextInput style={styles.input} placeholder='Username' 
             onChangeText={(username)=>this.setState({username})}
             value={this.state.username}
             autoCapitalize='none'
             />
              <TextInput style={styles.input} placeholder='email' 
             onChangeText={(email)=>this.setState({email})}
             value={this.state.email}
             autoCapitalize='none'
             />
             <TextInput style={styles.input} placeholder='Password' 
             onChangeText={(setPassword)=>this.setState({setPassword})}
             value={this.state.setPassword}
             autoCapitalize='none'
             />

             <TextInput style={styles.input} placeholder='Password' secureTextEntry
              onChangeText={(password)=>this.setState({password})}
              value={this.state.password}
              autoCapitalize='none'
              />

               <View style={styles.btnContainer}>
                     <TouchableOpacity style={styles.userBtn} onPress={()=>this.props.navigation.navigate('Login')}>
                         <Text style={styles.btnTxt}>Sign up</Text>
                     </TouchableOpacity>
                </View>
            </View>
        )
    }
   
}
const styles=StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#1e90ff',
      justifyContent:'center',
      alignItems:'center'
      
    },
    welcome:{
        textAlign:'center',
        margin: 20,
        fontSize:30,
        color:'#fff',
        fontFamily:'DancingScrip-Bold'
    },
    credentials:{
        margin: 10,
        fontSize:15,
        fontWeight:'bold',
        color:'#c0c0c0',
    },
    input:{
        backgroundColor:'#fff',
        padding:10,
        // borderRadius:30,
        marginBottom:10,
        width:'90%'
    },
    btnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    userBtn:{
        backgroundColor:'#FFD700', 
        margin:2,
        padding:15,
        borderRadius:30, 
        width:'45%' 

    },
    btnTxt:{
    fontSize:18,
    textAlign:"center"
    }
  });
