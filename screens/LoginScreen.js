import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Cute Cloud Icon */}
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/414/414927.png' }}
        style={styles.cloudIcon}
      />

      <Text style={styles.title}>Cloud ToDo</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Username"
          placeholderTextColor="#666"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#666"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation.navigate('ToDo')}
      >
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aee2ff', // sky blue
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  cloudIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#f0f8ff',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#d6f0ff',
  },
  loginButton: {
    backgroundColor: '#5ec8f2',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 3,
  },
  loginText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
