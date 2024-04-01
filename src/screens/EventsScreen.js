import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, Image } from 'react-native';
import eventsData from '../data/events.json';

const EventsScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const eventIds = Object.keys(eventsData.events);
  const eventList = eventIds.map(eventId => eventsData.events[eventId]);
  const [filteredEvents, setFilteredEvents] = useState(eventList);

  const handleSearch = () => {
    const filtered = eventList.filter(event =>
      event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEvents(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <Text>{item.name}</Text>
      <Image source={{ uri: item.images[0] }} style={styles.image} />
      <Text>Preço: {item.price}</Text>
      <Button
        title="Detalhes"
        onPress={() => navigation.navigate('EventDetails', { eventName: item.name, eventDescription: item.description, 
          eventLocation: item.location, eventDate: item.date, eventPrice: item.price, eventImage: item.images[0], eventImage2: item.images[1] })}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Procurar..."
        onChangeText={text => setSearchQuery(text)}
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={filteredEvents}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  eventItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default EventsScreen;
