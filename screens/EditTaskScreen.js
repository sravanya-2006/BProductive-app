import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EditTaskScreen({ route, navigation }) {
  const { id, title } = route.params;
  const [updatedTitle, setUpdatedTitle] = useState(title);

  const handleSave = async () => {
    try {
      const stored = await AsyncStorage.getItem('@bproductive_tasks');
      const tasks = stored ? JSON.parse(stored) : [];

      const updatedTasks = tasks.map(task =>
        task.id === id ? { ...task, title: updatedTitle } : task
      );

      await AsyncStorage.setItem('@bproductive_tasks', JSON.stringify(updatedTasks));

      Alert.alert("Updated ✅");
      navigation.goBack();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Edit Task</Text>
      <TextInput
        style={styles.input}
        value={updatedTitle}
        onChangeText={setUpdatedTitle}
        placeholder="Edit here..."
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#E0F7FA'
  },
  label: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2C3E50',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 12,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 16
  }
});
