import React from 'react';
import { StyleSheet,Text, View,TouchableOpacity } from 'react-native';
// import { MaterialIcons } from 'react-native-vector-icons';

export default function TodoItem({item,pressHandler}){
    
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
           <View style={styles.item}>
               {/* <MaterialIcons name='delete' size={12} color='#333'/> */}
               <Text style={styles.itemText}>
                  {item.name}
                </Text>
           </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    item:{
        padding:16,
        marginTop:16,
        flexDirection:'row',
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:12,
    },
    itemText:{
        marginLeft:10
        
    }

})


