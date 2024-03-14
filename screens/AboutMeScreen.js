import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/angel.jpeg')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Angel Francisco Garcia Cabrera</Text>
      <Text style={styles.contact}>Escribeme:</Text>
      <Text style={styles.contactInfo}>Correo electrónico: angelgarciacabrera11@gmail.com</Text>
      <Text style={styles.contactInfo}>Teléfono: 809-876-5665</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contact: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default AboutMeScreen;
