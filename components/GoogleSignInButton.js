import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
  const navigation = useNavigation();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '238565008877-j5tqhh85tqhd10tah7qkhlpohemtqh5.apps.googleusercontent.com',  // Your Web client ID
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      Alert.alert("Logged in with Google! 🎉");
      navigation.replace('ToDo');
    }
  }, [response]);

  return (
    <TouchableOpacity
      style={styles.button}
      disabled={!request}
      onPress={() => promptAsync()}
    >
      <Text style={styles.buttonText}>Sign in with Google</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4285F4',
    padding: 14,
    borderRadius: 8,
    marginTop: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
