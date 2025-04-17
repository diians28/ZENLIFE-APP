import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    console.log('Iniciando sesión con:', { email, password });
    setError('');
    Alert.alert('Inicio de sesión exitoso');
  };

  return (
    <View style={styles.container}>
      {/* Logo encima del título */}
      <Image
        source={require('@/assets/images/zenlife-logo.png')} // Cambia la ruta según tu proyecto
        style={styles.logo}
      />
      <Text style={styles.title}>Iniciar Sesión</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo Electrónico:</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="Ingresa tu correo"
          placeholderTextColor="#666"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Contraseña:</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Ingresa tu contraseña"
          placeholderTextColor="#666"
        />
      </View>
      {/* Botón personalizado */}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e8f5e9', // Fondo verde claro
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20, // Espacio entre el logo y el título
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2e7d32', // Verde oscuro para el texto
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    color: '#000', // Texto negro
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff', // Fondo blanco para el input
    color: '#000', // Texto negro
  },
  button: {
    backgroundColor: '#4caf50', // Fondo blanco
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#4caf50', // Borde verde oscuro
    
  },
  buttonText: {
    color: '#000', // Texto verde oscuro
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Login;