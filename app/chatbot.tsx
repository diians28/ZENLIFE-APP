import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function ChatbotScreen() {
  const [messages, setMessages] = useState<{ id: string; text: string; sender: 'user' | 'bot' }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    // Agrega el mensaje del usuario
    const userMessage: { id: string; text: string; sender: 'user' | 'bot' } = { id: Date.now().toString(), text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    // Respuesta del chatbot (puedes personalizar esta lógica)
    const botMessage = {
      id: (Date.now() + 1).toString(),
      text: `Entendido, dijiste: "${input}"`,
      sender: 'bot',
    };
    setMessages((prev) => [...prev, botMessage]);

    setInput(''); // Limpia el campo de entrada
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('@/assets/images/zenlife-logo.png')} // Cambia esto por el ícono que desees
          style={styles.headerIcon}
        />
        <Text style={styles.headerText}>ZenLife</Text>
      </View>

      {/* Chat Area */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={[styles.message, item.sender === 'user' ? styles.userMessage : styles.botMessage]}>
            {item.text}
          </Text>
        )}
        contentContainerStyle={styles.messagesContainer}
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu mensaje..."
          value={input}
          onChangeText={setInput}
        />
        <Pressable style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15, // Aumentado para mover el logo y texto más abajo
    backgroundColor: '#f0f9f4',
    borderBottomWidth: 1,
    borderColor: '#d4d4d4',
  },
  headerIcon: {
    width: 60, // Aumentado para hacer el logo más grande
    height: 60, // Aumentado para hacer el logo más grande
    marginRight: 15,
  },
  headerText: {
    fontSize: 28, // Aumentado para hacer el texto más grande
    fontWeight: 'bold',
    color: '#1e9d55',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d4f8e8', // Verde claro
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#f1f1f1',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#1e9d55', // Color de fondo del botón
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#ffffff', // Color del texto del botón
    fontSize: 16,
    fontWeight: 'bold',
  },
});