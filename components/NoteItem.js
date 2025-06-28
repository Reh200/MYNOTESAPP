import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

export default function NoteItem({ title, description, date, onDelete }) {
  const renderRightActions = () => (
    <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
      <Text style={styles.deleteText}>Excluir</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.noteContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description.length > 50 ? description.slice(0, 50) + '...' : description}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  description: {
    marginVertical: 4,
    color: '#555',
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
  deleteButton: {
    backgroundColor: '#ff3b30',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    borderRadius: 8,
    marginVertical: 8,
  },
  deleteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
