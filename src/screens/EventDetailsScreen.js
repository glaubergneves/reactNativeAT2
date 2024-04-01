import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

const EventDetailsScreen = ({ route, navigation }) => {
  const { eventName, eventDescription, eventLocation, eventDate, eventPrice, eventImage, eventImage2 } = route.params;

  const handleGoBack = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Events' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{eventName}</Text>
      <Image source={{ uri: eventImage }} style={styles.image} />
      <Image source={{ uri: eventImage2 }} style={styles.image} />
      <Text style={styles.description}>{eventDescription}</Text>
      <Text style={styles.info}>Location: {eventLocation}</Text>
      <Text style={styles.info}>Date: {new Date(eventDate).toLocaleDateString()}</Text>
      <Text style={styles.info}>Price: ${eventPrice}</Text>
      <Button title="Voltar" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 300,
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default EventDetailsScreen;
