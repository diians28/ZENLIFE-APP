import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useRouter } from 'expo-router';

export default function ChatScreen() {
  const router = useRouter();

  const handleNavigateToChatbot = () => {
    router.push('/chatbot'); // Navega a la pantalla del chatbot
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <ThemedView style={styles.header}>
        <ThemedText style={styles.headerText}>⚠ Aviso Importante</ThemedText>
      </ThemedView>

      {/* Warning Section */}
      <ThemedView style={styles.warningBox}>
        <ThemedText style={styles.warningTitle}>Esta aplicación no puede:</ThemedText>
        <ThemedText style={styles.warningItem}>• Proporcionar diagnósticos médicos o psicológicos</ThemedText>
        <ThemedText style={styles.warningItem}>• Reemplazar la terapia profesional</ThemedText>
        <ThemedText style={styles.warningItem}>• Brindar servicios de emergencia en salud mental</ThemedText>
        <ThemedText style={styles.warningItem}>• Prescribir medicamentos o planes de tratamiento</ThemedText>
      </ThemedView>

      {/* Additional Information */}
      <ThemedText style={styles.infoText}>
        El chat y los recursos proporcionados son <ThemedText style={styles.boldText}>solo para información y apoyo general.</ThemedText> Si estás experimentando una crisis de salud mental o necesitas ayuda profesional, contacta a un profesional de salud mental calificado o servicios de emergencia.
      </ThemedText>

      {/* Continue Button */}
      <Pressable style={styles.continueButton} onPress={handleNavigateToChatbot}>
        <ThemedText style={styles.continueButtonText}>Entiendo - Continuar al Chat</ThemedText>
      </Pressable>

      {/* Footer */}
      <ThemedText style={styles.footerText}>
        Al continuar, confirmas que has leído y entendido este aviso.
      </ThemedText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9f4', // Fondo verde claro (igual que en index.tsx)
    padding: 16,
    marginTop: 1,
  },
  header: {
    backgroundColor: '#a5d6a7', // Verde claro para el encabezado
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  headerText: {
    color: '#2e7d32', // Verde oscuro para el texto del encabezado
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8, // Baja la palabra añadiendo margen superior
  },
  warningBox: {
    backgroundColor: '#ffffff', // Fondo blanco para la caja de advertencias
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#c8e6c9', // Verde claro para el borde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#2e7d32', // Verde oscuro para el título
  },
  warningItem: {
    fontSize: 14,
    color: '#4caf50', // Verde intermedio para los ítems
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#2e7d32', // Verde oscuro para el texto informativo
    marginBottom: 16,
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2e7d32', // Verde oscuro para el texto en negrita
  },
  continueButton: {
    backgroundColor: '#4caf50', // Verde intermedio para el botón
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  continueButtonText: {
    color: '#ffffff', // Texto blanco para el botón
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 14,
    color: '#2e7d32', // Verde oscuro para el texto del pie de página
    textAlign: 'center',
  },
});
