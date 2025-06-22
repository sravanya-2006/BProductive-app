import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react';

export default function ToDoItem({ title, id, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>📝 {title}</Text>
      <TouchableOpacity onPress={() => onDelete(id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>✖</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#B0BEC5',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    color: '#2C3E50',
    fontSize: 16,
    fontFamily: 'Plus Jakarta Sans',
    flex: 1,
    paddingRight: 10,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#FF8A80', // Soft coral red
  },
  deleteText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
