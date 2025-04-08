import { StyleSheet, ScrollView, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function RecursosScreen() {
  const categories = [
    { label: 'Salud Mental', active: true },
    { label: 'Sueño y Descanso', active: false },
    { label: 'Resiliencia', active: false },
    { label: 'Prácticas Diarias', active: false },
  ];

  const resources = [
    {
      title: 'Entendiendo la Ansiedad',
      description: 'Aprende sobre las causas comunes de la ansiedad y estrategias efectivas para manejarla.',
      type: 'Artículo',
    },
    {
      title: 'Técnicas de Mindfulness',
      description: 'Prácticas simples para estar presente y reducir el estrés diario.',
      type: 'Guía',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <ThemedText style={styles.headerText}>Recursos</ThemedText>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            style={[styles.categoryButton, category.active && styles.activeCategoryButton]}>
            <ThemedText
              style={[styles.categoryText, category.active && styles.activeCategoryText]}>
              {category.label}
            </ThemedText>
          </Pressable>
        ))}
      </View>

      {/* Resources List */}
      {resources.map((resource, index) => (
        <ThemedView key={index} style={styles.resourceCard}>
          <ThemedText style={styles.resourceTitle}>{resource.title}</ThemedText>
          <ThemedText style={styles.resourceDescription}>{resource.description}</ThemedText>
          <ThemedText style={styles.resourceType}>{resource.type}</ThemedText>
        </ThemedView>
      ))}

      {/* Featured Resource */}
      <ThemedView style={styles.featuredResource}>
        <ThemedText style={styles.featuredTitle}>Recurso Destacado</ThemedText>
        <ThemedText style={styles.featuredDescription}>
          Meditación guiada para reducir la ansiedad en momentos de estrés
        </ThemedText>
        <Pressable style={styles.playButton}>
          <ThemedText style={styles.playButtonText}>▶ Reproducir ahora</ThemedText>
        </Pressable>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e9d55',
    marginBottom: 16,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  categoryButton: {
    backgroundColor: '#f1f1f1',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  activeCategoryButton: {
    backgroundColor: '#1e9d55',
  },
  categoryText: {
    fontSize: 14,
    color: '#636e72',
  },
  activeCategoryText: {
    color: '#ffffff',
  },
  resourceCard: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2d3436',
    marginBottom: 4,
  },
  resourceDescription: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 8,
  },
  resourceType: {
    fontSize: 12,
    color: '#1e9d55',
    fontWeight: 'bold',
  },
  featuredResource: {
    backgroundColor: '#1e9d55',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  featuredTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
  },
  featuredDescription: {
    fontSize: 14,
    color: '#ffffff',
    marginBottom: 16,
  },
  playButton: {
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  playButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e9d55',
  },
});
