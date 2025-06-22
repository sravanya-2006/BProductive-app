import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from 'react';

export default function ToDoItem({ title, id, onDelete }) {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>📝 {title}</Text>
      <TouchableOpacity onPress={() => onDelete(id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>❌</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#F5F5F5',           // White Smoke for the card
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  text: {
    color: '#4B0082',                     // Indigo / Dark Violet
    fontSize: 16,
    fontFamily: 'Plus Jakarta Sans',
    flex: 1,
    paddingRight: 10,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#B22222',           // Firebrick Red (better contrast on F5F5F5)
  },
  deleteText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
