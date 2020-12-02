import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { View,Text,StyleSheet,TextInput,TouchableOpacity,StatusBar} from 'react-native';

const userInfo={username:'admin',password:'pass123456'}

export default class Login extends Component {

    static navigationOptions={
        header:'null'
    }
    constructor(props){
        super(props);
        this.state={
            username:'',
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
             <Text style={styles.welcome}>LogIn</Text>

             <TextInput style={styles.input} placeholder='Username' 
             onChangeText={(username)=>this.setState({username})}
             value={this.state.username}
             autoCapitalize='none'
             />

             <TextInput style={styles.input} placeholder='Password' secureTextEntry
              onChangeText={(password)=>this.setState({password})}
              value={this.state.password}/>

               <View style={styles.btnContainer}>
                     <TouchableOpacity style={styles.userBtn}
                     onPress={this._login}
                    //  onPress={()=>this.props.navigation.navigate('HomeScreen')}
                      >
                         <Text style={styles.btnTxt}>Login</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.userBtn} onPress={()=>alert("signup work's")}>
                         <Text style={styles.btnTxt}>Sign up</Text>
                     </TouchableOpacity>
                </View>
            </View>
        )
    }
    _login= async()=>{
        if(userInfo.username === this.state.username && userInfo.password === this.state.password){
            // alert('Logged In');
            await AsyncStorage.setItem('isLoggedIn','1');
            this.props.navigation.navigate('HomeScreen');
        }else{
            alert('User Name or Password is incorrect.')
        }
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
    input:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:30,
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
