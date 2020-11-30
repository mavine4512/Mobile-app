import React from 'react';
import { StyleSheet,Text, View,TouchableOpacity } from 'react-native';

export default function Todoitem({item,pressHandler}){
    return(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
           <View style={styles.item}>
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
        marginLeft:'left'
    }
})
