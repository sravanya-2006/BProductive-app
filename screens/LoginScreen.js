import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { auth } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
} from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "238565008877-j5tqhh85tqlhd10tah7qkhlpohemtqh5.apps.googleusercontent.com",
    androidClientId: "238565008877-j5tqhh85tqlhd10tah7qkhlpohemtqh5.apps.googleusercontent.com", // Add this line
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then(() => {
          Alert.alert('Signed in with Google ☁️');
          navigation.replace('ToDo');
        })
        .catch((error) => {
          Alert.alert('Google Sign-In Error', error.message);
        });
    }
  }, [response]);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      Alert.alert('Welcome back! 🎉', `You're now logged in as ${email}`);
      navigation.replace('ToDo');
    } catch (error) {
      Alert.alert('Login Error', error.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Account created 🎉', 'Now you can log in!');
    } catch (error) {
      Alert.alert('Signup Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>☁️ BProductive</Text>
      <Text style={styles.subtitle}>Peek Inside!!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#B0C4DE"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#B0C4DE"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>☁️ Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleSignup}>
        <Text style={styles.signupText}>Don’t have an account? Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#DB4437' }]}
        onPress={() => promptAsync()}
        disabled={!request}
      >
        <Text style={styles.buttonText}>Sign in with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 70,
    backgroundColor: '#E6ECF0',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E4057',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#2E4057',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#B0C4DE',
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#F8FBFF',
    color: '#2E4057',
  },
  button: {
    backgroundColor: '#7BAFD4',
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: 16,
  },
  signupText: {
    marginTop: 18,
    color: '#2E4057',
    fontSize: 14,
    textAlign: 'center',
  },
});
