import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.BtnContainer}>
            
            <TouchableOpacity style={styles.userBtn}
                     onPress={()=>alert("Coming Soon")}
                      >
                     <Text style={styles.btnTxt}>About Us</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.userBtn}
                     onPress={()=>alert("Coming Soon")}
                      >
                     <Text style={styles.btnTxt}>About Us</Text>
                     </TouchableOpacity>
                    
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:70,
        paddingTop:10,
        backgroundColor:'coral'
    },
    // text:{
    //     textAlign:'center',
    //     color:'#fff',
    //     fontSize:25,
    //     fontWeight:'bold',
      
    // },
    BtnContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    userBtn:{
        backgroundColor:'#ffffff', 
        borderStyle: 'solid',
        margin:5,
        padding:10,
        borderRadius:30, 
        width:'45%' ,
       
    },
    btnTxt:{
        fontSize:10,
        textAlign:"center"
        }
})