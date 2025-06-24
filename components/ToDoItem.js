import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ToDoItem({
  title,
  id,
  isCompleted,
  onDelete,
  onToggle,
  onEdit,
  dueDate
}) {
  return (
    <View style={[styles.item, isCompleted && styles.completed]}>
      <TouchableOpacity
        onPress={() => onToggle(id)}
        onLongPress={() => onEdit(id, title)}
        style={{ flex: 1 }}
      >
        <Text style={styles.text}>
          {isCompleted ? '✅' : '⬜️'} {title}
        </Text>
        {dueDate && (
          <Text style={styles.dueDate}>
             Due Date: {new Date(dueDate).toDateString()}
          </Text>
        )}
      </TouchableOpacity>

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
    alignItems: 'flex-start',
    shadowColor: '#B0BEC5',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  completed: {
    backgroundColor: '#E0F2F1',
  },
  text: {
    color: '#2C3E50',
    fontSize: 16,
    fontFamily: 'Plus Jakarta Sans',
    paddingRight: 10,
  },
  dueDate: {
    fontSize: 13,
    color: '#607D8B',
    fontStyle: 'italic',
    marginTop: 4,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#FF8A80',
    alignSelf: 'center',
  },
  deleteText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
});
