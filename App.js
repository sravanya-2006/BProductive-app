import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  FlatList,
} from "react-native";

import ToDoItem from './components/ToDoItem';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleDeleteTask = (id) => {
    const updatedTasks = taskList.filter(task => task.id !== id);
    setTaskList(updatedTasks);  
  };

  const handleAddTask = () => {
    if (task.trim() === '') {
      Alert.alert("Stop making fun! Just enter the task!!");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: task,
    };  

    setTaskList([...taskList, newTask]);
    setTask('');

    Alert.alert("Woah Task added", `✅ Lets work on "${task}"`);
    setTask('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Be Productive ☁️</Text>

      <TextInput 
        style={styles.input}
        placeholder="What’s your next big move?"
        placeholderTextColor="#B0BEC5"
        value={task}
        onChangeText={setTask}
      />

      <View style={styles.buttonContainer}>
        <Button title="Add Task" onPress={handleAddTask} color="#4FC3F7" />
      </View>

      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ToDoItem
            title={item.title}
            id={item.id}
            onDelete={handleDeleteTask}
          />
        )}
        style={styles.taskList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#E0F7FA', // Light sky/cyan blue
  },
  heading: {
    fontSize: 26,
    marginBottom: 20,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "bold",
    color: '#2C3E50', // Deep slate blue/gray for text
    textAlign: 'center',
  },
  input: {
    borderWidth: 1.8,
    borderColor: '#B2EBF2', // Light pastel blue
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#FFFFFF',
    color: '#2C3E50',
    fontSize: 16,
    fontFamily: "Plus Jakarta Sans",
  },
  buttonContainer: {
    marginTop: 15,
    borderRadius: 8,
    overflow: 'hidden',
  },
  taskList: {
    marginTop: 25,
  },
});
