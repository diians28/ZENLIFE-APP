import { StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const moods = [
    { emoji: "😔", label: "Triste" },
    { emoji: "😐", label: "Normal" },
    { emoji: "😊", label: "Bien" },
    { emoji: "😃", label: "Excelente" }
  ];

  const quickActions = [
    { title: "Meditación", icon: "🧘‍♀️", duration: "5 min" },
    { title: "Respiración", icon: "🫁", duration: "3 min" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <ThemedView style={styles.headerSection}>
        <ThemedView style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/zenlife-logo.png')}
            style={styles.logo}
          />
          <ThemedText style={styles.appName}>ZENLIFE</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.header}>
          <ThemedView>
            <ThemedText style={[styles.greeting]}>¡Bienvenido de nuevo!</ThemedText>
            <ThemedText style={[styles.welcomeText]}>¿Cómo te sientes hoy?</ThemedText>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.moodContainer}>
          {moods.map((mood, index) => (
            <Pressable key={index} style={styles.moodButton}>
              <ThemedText style={styles.moodEmoji}>{mood.emoji}</ThemedText>
            </Pressable>
          ))}
        </ThemedView>
      </ThemedView>

      {/* Quick Actions Widget */}
      <ThemedView style={styles.widgetContainer}>
        <ThemedText style={styles.widgetTitle}>Actividades sugeridas</ThemedText>
        <ThemedView style={styles.quickActionsGrid}>
          {quickActions.map((action, index) => (
            <Pressable key={index} style={styles.actionCard}>
              <ThemedText style={styles.actionIcon}>{action.icon}</ThemedText>
              <ThemedText style={styles.actionTitle}>{action.title}</ThemedText>
              <ThemedText style={styles.actionDuration}>{action.duration}</ThemedText>
            </Pressable>
          ))}
        </ThemedView>
      </ThemedView>

      {/* Crisis Help */}
      <Pressable style={styles.crisisContainer}>
        <ThemedView style={styles.crisisBox}>
          <ThemedText>
            <ThemedText style={styles.crisisText}>⚠︎Línea de Crisis </ThemedText>
            <ThemedText style={styles.crisisText2}> - Si necesitas ayuda inmediata, llama al 988 - Línea Nacional de Prevención del Suicidio</ThemedText>
          </ThemedText>
        </ThemedView>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerSection: {
    backgroundColor: 'rgba(26, 171, 92, 0.1)',
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 8,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e9d55',
    letterSpacing: 1,
    backgroundColor: 'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
    backgroundColor: 'transparent',
  },
  welcomeText: {
    fontSize: 16,
    color: '#000000',
    backgroundColor: 'transparent',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1e9d55',
    borderRadius: 20,
    marginHorizontal: 16,
    padding: 12,
  },
  moodButton: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#dfe6e9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moodEmoji: {
    fontSize: 22,
  },
  widgetContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  widgetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2d3436',
  },
  quickActionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
        backgroundColor: '#f1f9f5',
    padding: 15,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
  },
  actionIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 28,
    marginBottom: 2,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
  },
  actionDuration: {
    fontSize: 12,
    color: '#636e72',
    marginTop: 4,
  },
  crisisContainer: {
    margin: 16,
    marginBottom: 32,
  },
  crisisBox: {
    backgroundColor: '#ffd3d3',
    padding: 16,
    borderRadius: 15,
  },
  crisisText: {
    textAlign: 'center',
    color: '#ff0000',
    fontSize: 16,
    fontWeight: '600',
  },
  crisisText2: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
  },
});