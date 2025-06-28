import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/styles';

export default function NoteItem({ note, onDelete }) {
  return (
    <View style={styles.noteContainer}>
      <View style={styles.noteTextWrapper}>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text style={styles.noteDescription}>{note.description}</Text>
        <Text style={styles.noteDate}>{note.date}</Text>
      </View>
      <TouchableOpacity onPress={() => onDelete(note.id)}>
        <Text style={styles.deleteButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}
