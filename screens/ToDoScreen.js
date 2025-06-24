import React, { useState, useEffect, useCallback } from "react";
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  Platform,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ToDoItem from '../components/ToDoItem';

export default function ToDoScreen() {
  const TASKS_KEY = '@bproductive_tasks';
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const navigation = useNavigation();

  const [dueDate, setDueDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  // ✅ Load tasks when screen gains focus
  useFocusEffect(
    useCallback(() => {
      const loadTasks = async () => {
        try {
          const storedTasks = await AsyncStorage.getItem(TASKS_KEY);
          if (storedTasks) {
            setTaskList(JSON.parse(storedTasks));
          }
        } catch (e) {
          console.error("Failed to load tasks", e);
        }
      };
      loadTasks();
    }, [])
  );

  // ✅ Save tasks when list updates
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(taskList));
      } catch (e) {
        console.error("Failed to save tasks", e);
      }
    };
    saveTasks();
  }, [taskList]);

  // ✅ Add Task
  const handleAddTask = () => {
    if (task.trim() === '') {
      Alert.alert("Stop making fun! Just enter the task!!");
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: task,
      isCompleted: false,
      dueDate: dueDate.toISOString()
    };

    setTaskList([...taskList, newTask]);
    Alert.alert("Woah Task added", `✅ Let's work on "${task}"`);
    setTask('');
  };

  // ✅ Toggle Task Completion
  const handleToggleComplete = (id) => {
    const updated = taskList.map(task =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTaskList(updated);
  };

  // ✅ Delete Task
  const handleDeleteTask = (id) => {
    const updatedTasks = taskList.filter(task => task.id !== id);
    setTaskList(updatedTasks);
  };

  // ✅ Edit Task (navigate to screen)
  const handleEditTask = (id, title) => {
    navigation.navigate('EditTask', { id, title });
  };

  // ✅ Handle Date Picker
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || dueDate;
    setShowDatePicker(Platform.OS === 'ios');
    setDueDate(currentDate);
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

      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
        <Text style={styles.dateText}>📅 Due: {dueDate.toDateString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={dueDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

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
            isCompleted={item.isCompleted}
            onDelete={handleDeleteTask}
            onToggle={handleToggleComplete}
            onEdit={handleEditTask}
            dueDate={item.dueDate}
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
    backgroundColor: '#E0F7FA', // Cloudy sky blue
  },
  heading: {
    fontSize: 26,
    marginBottom: 20,
    fontFamily: "Plus Jakarta Sans",
    fontWeight: "bold",
    color: '#2C3E50',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1.8,
    borderColor: '#B2EBF2',
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
  dateButton: {
    marginTop: 15,
    backgroundColor: '#B2EBF2',
    padding: 12,
    borderRadius: 8,
  },
  dateText: {
    fontSize: 16,
    color: '#2C3E50',
    textAlign: 'center',
  },
});
