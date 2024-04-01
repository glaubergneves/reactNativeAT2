import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.text}>Desenvolvedor:</Text>
      <Text style={styles.text}>Glauber Lucas dos Santos Neves</Text>
      <Text style={styles.text}>Contatos:</Text>
      <Text style={styles.text}>glaubergneves@gmail.com</Text>
      <Text style={styles.text}>(21) 12345-1234</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AboutScreen;
