import { useState } from "react";
import React from 'react';
import {Text,View,TextInput,StyleSheet} from "react-native";

export default function App() {
  const [task,setTask] = useState('');
  return(
    <View style={styles.container}>
      <Text style={styles.heading}>Be Productive my friend!</Text>
      <Textinput 
         style = {styles.input}
         placeholder = "Enter you goal,YOU CAN DO IT"
         value = {task}
         onChangeText = {setTask}
      />
    </View>
  );
}


const styles = StyleSheet.create({
       container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f4cc6e", 
    flex: 1,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "bold",
    color: "#41316F",
  },
  input: {
    borderWidth: 2,
    borderColor: '#b69ecf',
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#fff7e6', 
    color: '#41316F', 
    fontSize: 16,
    fontFamily: "Plus Jakarta Sans",
  },
  
})