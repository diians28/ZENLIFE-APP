import React, { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, Text, View, Image } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const moods = [
    { emoji: "😊", value: "happy", label: "Feliz" }, // Ahora está antes que "Bien"
    { emoji: "🙂", value: "good", label: "Bien" },
    { emoji: "😔", value: "sad", label: "Triste" },
    { emoji: "😰", value: "stressed", label: "Estresado" },
  ];

  const handleMoodSelection = async (mood: typeof moods[0]) => {
    if (selectedMood === mood.value) {
      // Si el mismo emoji ya está seleccionado, deselecciona
      setSelectedMood(null);
      setShowFeedback(false);
    } else {
      // Si es un emoji diferente, selecciona y muestra feedback
      setSelectedMood(mood.value);

      // Guardar el estado de ánimo
      await saveMoodToStorage(mood.value);

      // Mostrar feedback
      setShowFeedback(true);
    }
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
          { title: "🌿 Meditación para momentos difíciles", duration: "5 minutos" },
          { title: "🌬️ Ejercicios de respiración", duration: "3 minutos" },
          { title: "🎵 Música relajante", duration: "15 minutos" },
          { title: "🤝 Contactar a un amigo", duration: "Ahora" },
        ];
      case "good":
        return [
          { title: "🚶 Caminata consciente", duration: "10 minutos" },
          { title: "🙏 Ejercicio de gratitud", duration: "5 minutos" },
          { title: "🧘 Meditación de atención plena", duration: "7 minutos" },
        ];
     
      case "happy":
        return [
          { title: "🌞 Meditación de alegría", duration: "5 minutos" },
          { title: "📖 Registro de momentos positivos", duration: "3 minutos" },
          { title: "💌 Compartir tu bienestar", duration: "Ahora" },
        ];
      case "stressed":
        return [
          { title: "🛑 Pausa consciente: respira profundamente", duration: "2 minutos" },
          { title: "🧖 Relájate con un baño caliente", duration: "15 minutos" },
          { title: "📚 Lee algo inspirador", duration: "10 minutos" },
          { title: "🌳 Sal a caminar y conecta con la naturaleza", duration: "20 minutos" },
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
              {selectedMood === "good" &&
                "¡Me alegra que te sientas bien! Mantén ese estado con algunas actividades."}
              {selectedMood === "happy" &&
                "¡Fantástico! Es genial verte tan feliz hoy."}
              {selectedMood === "stressed" &&
                "Parece que estás estresado. Tómate un momento para relajarte con estas actividades."}
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
              <Text style={styles.recommendationTitle}>
                {rec.title} {/* Eliminado el emoji de la estrella */}
              </Text>
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
    flexWrap: 'wrap', // Permite que los botones se distribuyan en varias filas
    justifyContent: 'center', // Centra los botones horizontalmente
    alignItems: 'center', // Centra los botones verticalmente
    marginTop: 12, // Reducido para hacer el contenedor más compacto
    paddingVertical: 8, // Reducido para disminuir el espacio interno
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
    padding: 12, // Reducido para hacer los botones más pequeños
    borderRadius: 16, // Ajustado para mantener proporción
    borderWidth: 1,
    borderColor: '#c8e6c9',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60, // Reducido para hacer los botones más pequeños
    height: 60, // Reducido para hacer los botones más pequeños
    margin: 6, // Espacio entre botones ajustado
  },
  selectedMoodButton: {
    backgroundColor: '#a5d6a7',
    borderColor: '#2e7d32',
  },
  moodEmoji: {
    fontSize: 24, // Reducido para que el emoji se ajuste al botón más pequeño
  },
  moodLabel: {
    fontSize: 10, // Reducido para que el texto se ajuste al botón más pequeño
    color: '#4caf50',
    marginTop: 4,
    textAlign: 'center',
  },
  feedbackBox: {
    backgroundColor: '#c8e6c9', // Verde claro para feedback positivo
    padding: 16,
    borderRadius: 12,
    marginVertical: 8, // Reducido para subir el feedback (Fantástico)
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
    marginTop: 5, // Reducido para subir el apartado de crisis
    marginBottom: 16, // Agregado para mostrar el fondo verde debajo
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