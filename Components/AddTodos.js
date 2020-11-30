import React,{useState} from 'react';
import { StyleSheet, View, Button,TextInput } from 'react-native';

export default function AddTodos({submitHandler}){
    const [text,setState]=useState('')

    const changeHandler =(val)=>{
        setState(val);
    }

    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='new item...'
        onChangeText={changeHandler}
        />

        <Button
          title="Add Item"
          onPress={() => submitHandler(text)
           
          }
        />
      </View>
    );
  }

  const styles=StyleSheet.create({
      input:{
          marginBottom:8,
          paddingHorizontal:8,
          paddingVertical:6,
          borderBottomWidth:1,
          borderBottomColor:'#bbb'

      }

  })

  


