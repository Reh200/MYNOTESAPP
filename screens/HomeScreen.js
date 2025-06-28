import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../styles/styles';
import notesData from '../data/notesData';

export default function HomeScreen() {
  const [notes, setNotes] = useState(notesData);

  const handleDelete = (id) => {
    Alert.alert('Excluir Nota', 'Tem certeza que deseja excluir esta nota?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.noteContainer}>
      <View style={styles.noteTextWrapper}>
        <Text style={styles.noteTitle}>{item.title}</Text>
        <Text style={styles.noteDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={styles.noteDate}>{item.date}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButton}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/anotando.jpg')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginBottom: 20,
          borderRadius: 12,
        }}
        resizeMode="cover"
      />
      <Text style={styles.title}>Minhas Anotações</Text>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}
