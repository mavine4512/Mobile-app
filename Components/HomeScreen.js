import React,{useState} from 'react';
import { StyleSheet,Text, View,FlatList,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './Header';
import TodoItem from './TodoItem';
import AddTodos from './AddTodos';


export default function HomeScreen(){
  const [users,setUser]= useState([
    {name:'Bread',id:1},
    {name:'Milk',id:2},
    {name:'Eggs',id:3},
    {name:'Butter',id:4},
    {name:'cheese',id:5},
    {name:'Yogurt',id:6},
    {name:'Chicken',id:7},
    {name:'Meat',id:8},
    {name:'Fish',id:9},
    {name:'Charcuterie',id:10},
    {name:'potetoes',id:11},
    {name:'Carrot',id:12},
    
  ]);
  

  const pressHandler=(id)=>{
    setUser((delTodos)=>{
       return delTodos.filter(todo => todo.id != id)
    })
   }

  const submitHandler=(name)=>{
    if(name.length>3){
      setUser((todos)=>{
        return [
          {name:name,id:Math.random().toString()},
          ...todos
        ];
     })
    }else{
       Alert.alert('Sorry','length must be over three charactor',[{
         name:'understood', onPress:()=>console.log('alert closed')
       }]);
    }
    
  }
  
 return(
 
   <TouchableWithoutFeedback onPress={()=>{
     Keyboard.dismiss()
    console.log('Keyboard Dismiss')
   }}>
      <View style={styles.container}>
        <Header/>
         <View style={styles.content}>
          <AddTodos submitHandler={submitHandler}/>
          <View style={styles.list}>
          
             <FlatList
             keyExtractor={(item)=>item.id.toString()}
              data={users}
               renderItem={({item})=>(
                <Text>{item.name}</Text>
              //  <TodoItem item={item} pressHandler={pressHandler} />
              )}
            /> 
         </View>
       </View> 
     </View>
    </TouchableWithoutFeedback>  
 )
   }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  content:{
    flex:1,
    padding:40,

  },
  list:{
    flex:1,
    marginTop:20,
  
  },
  
});

