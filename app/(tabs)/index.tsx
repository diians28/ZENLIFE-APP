import React, { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, Text, View, Image } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const moods = [
    { emoji: "🙂", value: "good", label: "Bien" },
    { emoji: "😊", value: "happy", label: "Feliz" },
    { emoji: "😔", value: "sad", label: "Triste" },
  ];

  const handleMoodSelection = async (mood: typeof moods[0]) => {
    setSelectedMood(mood.value);

    // Guardar el estado de ánimo
    await saveMoodToStorage(mood.value);

    // Mostrar feedback
    setShowFeedback(true);

    // Ocultar el feedback después de 3 segundos
    setTimeout(() => {
      setShowFeedback(false);
    }, 3000);

    // Mostrar recomendaciones
    setTimeout(() => {
      setSelectedMood(null); // Ocultar las recomendaciones después de 3 segundos
    }, 3000);
  };

  const saveMoodToStorage = async (mood: string) => {
    try {
      const today = new Date().toISOString().split("T")[0]; // Formato YYYY-MM-DD
      const storedData = await AsyncStorage.getItem("moodHistory");
      const moodHistory = storedData ? JSON.parse(storedData) : {};

      // Guardar el estado de ánimo de hoy
      moodHistory[today] = mood;

      // Guardar en AsyncStorage
      await AsyncStorage.setItem("moodHistory", JSON.stringify(moodHistory));
    } catch (error) {
      console.error("Error al guardar el estado de ánimo:", error);
    }
  };

  const getMoodRecommendations = (mood: string) => {
    switch (mood) {
      case "sad":
        return [
          { title: "Meditación para momentos difíciles", duration: "5 minutos" },
          { title: "Ejercicios de respiración", duration: "3 minutos" },
          { title: "Música relajante", duration: "15 minutos" },
          { title: "Contactar a un amigo", duration: "Ahora" },
        ];
      case "neutral":
        return [
          { title: "Caminata consciente", duration: "10 minutos" },
          { title: "Ejercicio de gratitud", duration: "5 minutos" },
          { title: "Meditación de atención plena", duration: "7 minutos" },
        ];
      case "good":
      case "happy":
        return [
          { title: "Meditación de alegría", duration: "5 minutos" },
          { title: "Registro de momentos positivos", duration: "3 minutos" },
          { title: "Compartir tu bienestar", duration: "Ahora" },
        ];
      default:
        return [];
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Logo and Header */}
      <View style={styles.logoContainer}>
        <Image
          source={require('@/assets/images/zenlife-logo.png')} // Cambia la ruta según tu proyecto
          style={styles.logo}
        />
        <Text style={styles.appName}>ZENLIFE</Text>
      </View>

      {/* Header Section */}
      <View style={styles.headerSection}>
        <Text style={styles.greeting}>¡Bienvenido de nuevo!</Text>
        <Text style={styles.welcomeText}>¿Cómo te sientes hoy?</Text>

        {/* Mood Selection */}
        <View style={styles.moodContainer}>
          {moods.map((mood, index) => (
            <MotiView
              key={index}
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Pressable
                style={[
                  styles.moodButton,
                  selectedMood === mood.value && styles.selectedMoodButton,
                ]}
                onPress={() => handleMoodSelection(mood)}
              >
                <Text style={styles.moodEmoji}>{mood.emoji}</Text>
                <Text style={styles.moodLabel}>{mood.label}</Text>
              </Pressable>
            </MotiView>
          ))}
        </View>
      </View>

      {/* Feedback */}
      <AnimatePresence>
        {showFeedback && (
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0 }}
            style={styles.feedbackBox}
          >
            <Text style={styles.feedbackText}>
              {selectedMood === "sad" &&
                "Lamento que no te sientas bien. ¿Quieres explorar algunos recursos que podrían ayudarte?"}
              {selectedMood === "neutral" &&
                "Gracias por compartir. Hay actividades que podrían mejorar tu día."}
              {selectedMood === "good" &&
                "¡Me alegra que te sientas bien! Mantén ese estado con algunas actividades."}
              {selectedMood === "happy" &&
                "¡Fantástico! Es genial verte tan feliz hoy."}
            </Text>
          </MotiView>
        )}
      </AnimatePresence>

      {/* Recommendations */}
      {selectedMood && (
        <View style={styles.recommendationsContainer}>
          <Text style={styles.recommendationsTitle}>Recomendado para ti hoy:</Text>
          {getMoodRecommendations(selectedMood).map((rec, index) => (
            <View key={index} style={styles.recommendationCard}>
              <Text style={styles.recommendationTitle}>{rec.title}</Text>
              
            </View>
          ))}
        </View>
      )}

      {/* Crisis Help */}
      <Pressable style={styles.crisisContainer}>
        <View style={styles.crisisBox}>
          <Text>
            <Text style={styles.crisisText}>⚠︎ Línea de Crisis </Text>
            <Text style={styles.crisisText2}>
              - Si necesitas ayuda inmediata, llama al 988 - Línea Nacional de Prevención del Suicidio
            </Text>
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9f4', // Fondo verde claro y relajante
    padding: 16,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24, // Margen superior para bajar el logo y el texto
    marginBottom: 32, // Margen adicional entre el logo y el texto
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 12,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e7d32', // Verde oscuro para el texto principal
    letterSpacing: 1,
  },
  headerSection: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#e8f5e9', // Verde claro para destacar
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
  },
  welcomeText: {
    fontSize: 16,
    color: '#4caf50', // Verde medio para el subtítulo
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moodButton: {
    backgroundColor: '#e8f5e9',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#c8e6c9',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  selectedMoodButton: {
    backgroundColor: '#a5d6a7',
    borderColor: '#2e7d32',
  },
  moodEmoji: {
    fontSize: 28,
  },
  moodLabel: {
    fontSize: 12,
    color: '#4caf50',
    marginTop: 4,
    textAlign: 'center',
  },
  feedbackBox: {
    backgroundColor: '#c8e6c9', // Verde claro para feedback positivo
    padding: 16,
    borderRadius: 12,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  feedbackText: {
    textAlign: 'center',
    color: '#2e7d32', // Verde oscuro para texto positivo
    fontSize: 14,
    fontWeight: '600',
  },
  recommendationsContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2e7d32',
  },
  recommendationCard: {
    marginBottom: 12,
    padding: 16,
    backgroundColor: '#e8f5e9',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2e7d32',
  },
  crisisContainer: {
    marginTop: 24,
    padding: 16,
  },
  crisisBox: {
    backgroundColor: '#ffcdd2', // Rojo claro para destacar la importancia
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  crisisText: {
    textAlign: 'center',
    color: '#d32f2f', // Rojo oscuro para el texto
    fontSize: 16,
    fontWeight: 'bold',
  },
  crisisText2: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
    marginTop: 4,
  },
});