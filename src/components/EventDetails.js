import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const EventDetails = ({ route }) => {
  const { event } = route.params;

  return (
    <ScrollView>
      <Image source={{ uri: event.images[0] }} style={{ width: '100%', height: 200 }} />
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{event.name}</Text>
        <Text style={{ fontSize: 18, marginTop: 10 }}>{event.location}</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>{new Date(event.date).toLocaleDateString()}</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>Price: ${event.price}</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>Description: {event.description}</Text>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>Hotels Near By:</Text>
        {event.hotels.map((hotel, index) => (
          <View key={index} style={{ marginTop: 10, borderWidth: 1, padding: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{hotel.name}</Text>
            <Text style={{ fontSize: 16 }}>Address: {hotel.address}</Text>
            <Text style={{ fontSize: 16 }}>Daily Rate: ${hotel.dailyRate}</Text>
            <Text style={{ fontSize: 16 }}>Proximity: {hotel.proximity} meters</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default EventDetails;
