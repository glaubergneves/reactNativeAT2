import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.drawerItemText}>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Events')}
      >
        <Text style={styles.drawerItemText}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('AddEvent')}
      >
        <Text style={styles.drawerItemText}>Add Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('PhotoGallery')}
      >
        <Text style={styles.drawerItemText}>Photo Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.drawerItemText}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#fff', // Altere a cor de fundo conforme necessário
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
