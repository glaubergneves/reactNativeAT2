import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import * as FileSystem from 'expo-file-system';

const AddEventScreen = ({ navigation }) => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventPrice, setEventPrice] = useState('');

  const handleAddEvent = async () => {
    // Cria um objeto com os detalhes do evento
    const newEvent = {
      name: eventName,
      description: eventDescription,
      location: eventLocation,
      date: eventDate,
      price: eventPrice,
    };

    try {
      const fileInfo = await FileSystem.getInfoAsync(FileSystem.documentDirectory + 'events.json');
      let events = [];

      if (fileInfo.exists) {
        const fileContent = await FileSystem.readAsStringAsync(FileSystem.documentDirectory + 'events.json');
        events = JSON.parse(fileContent);
      }

      events.push(newEvent);

      await FileSystem.writeAsStringAsync(FileSystem.documentDirectory + 'events.json', JSON.stringify(events));

      navigation.navigate('Events');
    } catch (error) {
      console.error('Erro ao adicionar evento:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome do evento:</Text>
      <TextInput
        style={styles.input}
        value={eventName}
        onChangeText={setEventName}
        placeholder="Nome"
      />

      <Text style={styles.label}>Descrição do Evento:</Text>
      <TextInput
        style={styles.input}
        value={eventDescription}
        onChangeText={setEventDescription}
        placeholder="Descrição"
      />

      <Text style={styles.label}>Localização do Evento:</Text>
      <TextInput
        style={styles.input}
        value={eventLocation}
        onChangeText={setEventLocation}
        placeholder="Localização"
      />

      <Text style={styles.label}>Data do Evento:</Text>
      <TextInput
        style={styles.input}
        value={eventDate}
        onChangeText={setEventDate}
        placeholder="Data"
      />

      <Text style={styles.label}>Preço do Evento:</Text>
      <TextInput
        style={styles.input}
        value={eventPrice}
        onChangeText={setEventPrice}
        placeholder="Preço"
      />

      <Button title="Adicionar Evento" onPress={handleAddEvent} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddEventScreen;
