import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function ChatScreen() {
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
      <Pressable style={styles.continueButton}>
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
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  header: {
    backgroundColor: '#1e9d55',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  warningBox: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1e9d55',
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1e9d55',
  },
  warningItem: {
    fontSize: 14,
    color: '#2d3436',
    marginBottom: 4,
  },
  infoText: {
    fontSize: 14,
    color: '#2d3436',
    marginBottom: 16,
  },
  boldText: {
    fontWeight: 'bold',
  },
  emergencyBox: {
    backgroundColor: '#ffd3d3',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  emergencyText: {
    fontSize: 14,
    color: '#ff0000',
    textAlign: 'center',
  },
  emergencyTitle: {
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#1e9d55',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    fontSize: 12,
    color: '#636e72',
    textAlign: 'center',
  },
});
