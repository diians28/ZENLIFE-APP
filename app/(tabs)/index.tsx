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

  const resources = [
    { type: "Podcast", title: "Mindfulness diario", duration: "15 min", icon: "🎧" },
    { type: "Video", title: "Ejercicios de calma", duration: "8 min", icon: "🎥" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <ThemedView style={styles.headerSection}>
        <ThemedView style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/zenlife-logo.jpeg')}
            style={styles.logo}
          />
          <ThemedText style={styles.appName}>ZENLIFE</ThemedText>
        </ThemedView>
        
        <ThemedView style={styles.header}>
          <ThemedView>
            <ThemedText style={[styles.greeting, { backgroundColor: 'transparent' }]}>¡Bienvenido de nuevo!</ThemedText>
            <ThemedText style={[styles.welcomeText, { backgroundColor: 'transparent' }]}>¿Cómo te sientes hoy?</ThemedText>
          </ThemedView>
         {/* <Image
            source={require('@/assets/images/profile-placeholder.png')}
            style={styles.profilePic}
          />*/}
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

      {/* Resources Section */}
      <ThemedView style={styles.widgetContainer}>
        <ThemedText style={styles.widgetTitle}>Recursos</ThemedText>
        {resources.map((resource, index) => (
          <Pressable key={index} style={styles.resourceCard}>
            <ThemedView style={styles.resourceIcon}>
              <ThemedText style={styles.resourceEmoji}>{resource.icon}</ThemedText>
            </ThemedView>
            <ThemedView style={styles.resourceInfo}>
              <ThemedText style={styles.resourceType}>{resource.type}</ThemedText>
              <ThemedText style={styles.resourceTitle}>{resource.title}</ThemedText>
              <ThemedText style={styles.resourceDuration}>{resource.duration}</ThemedText>
            </ThemedView>
          </Pressable>
        ))}
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
    width: 40,
    height: 40,
    marginRight: 8,
  },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    letterSpacing: 1,
    backgroundColor:'transparent',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
   
    backgroundColor: 'transparent', // Fondo transparente
  },
  welcomeText: {
    fontSize: 16,
    
    backgroundColor: 'transparent', // Fondo transparente
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#1e9d55', // Fondo verde
    borderRadius: 20, // Opcional: redondear bordes
    marginHorizontal: 16, // Opcional: agregar margen lateral
    padding: 12, // Opcional: ajustar el relleno
  },
  moodButton: {
    backgroundColor: '#ffffff', // Fondo blanco
    padding: 12,
    borderRadius: 20,
    borderWidth: 1, // Agregar borde
    borderColor: '#dfe6e9', // Color del borde
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  moodEmoji: {
    fontSize: 30,
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
    padding: 16,
    borderRadius: 15,
    width: '48%',
    alignItems: 'center',
  },
  actionIcon: {
    fontSize: 32,
    marginBottom: 8,
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
  resourceCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f9f5',
    padding: 12,
    borderRadius: 15,
    marginBottom: 12,
  },
  resourceIcon: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 12,
    marginRight: 12,
  },
  resourceEmoji: {
    fontSize: 24,
  },
  resourceInfo: {
    flex: 1,
  },
  resourceType: {
    fontSize: 12,
    color: '#636e72',
    textTransform: 'uppercase',
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2d3436',
  },
  resourceDuration: {
    fontSize: 12,
    color: '#636e72',
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