import React, { useState } from 'react';
import { StyleSheet, ScrollView, Pressable, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function RecursosScreen() {
  const resourceCategories = [
    {
      id: 'mental',
      title: '🧠 Salud Mental',
      color: '#1e90ff',
      resources: [
        {
          title: 'Entendiendo la Ansiedad',
          description: 'Aprende sobre las causas comunes de la ansiedad y estrategias efectivas para manejarla.',
          duration: '5 min',
          type: 'Artículo',
        },
        {
          title: 'Técnicas de Mindfulness',
          description: 'Prácticas simples para estar presente y reducir el estrés diario.',
          duration: '8 min',
          type: 'Guía',
        },
      ],
    },
    {
      id: 'sleep',
      title: '🌙 Sueño y Descanso',
      color: '#4b0082',
      resources: [
        {
          title: 'La Importancia del Sueño',
          description: 'Descubre cómo el sueño de calidad impacta tu bienestar mental.',
          duration: '4 min',
          type: 'Artículo',
        },
        {
          title: 'Meditación para Dormir',
          description: 'Audio guiado para ayudarte a conciliar el sueño de forma natural.',
          duration: '10 min',
          type: 'Audio',
        },
      ],
    },
    {
      id: 'resilience',
      title: '🔥 Resiliencia',
      color: '#ffa500',
      resources: [
        {
          title: 'Construyendo Resiliencia',
          description: 'Estrategias para desarrollar fortaleza emocional ante los desafíos.',
          duration: '6 min',
          type: 'Artículo',
        },
        {
          title: 'Superando la Adversidad',
          description: 'Historias inspiradoras y técnicas prácticas para momentos difíciles.',
          duration: '12 min',
          type: 'Video',
        },
      ],
    },
    {
      id: 'daily',
      title: '📅 Prácticas Diarias',
      color: '#ff6347',
      resources: [
        {
          title: 'Guía de Meditación',
          description: 'Una introducción simple a las prácticas de mindfulness.',
          duration: '7 min',
          type: 'Guía',
        },
        {
          title: 'Ejercicios de Gratitud',
          description: 'Prácticas sencillas para cultivar la gratitud en tu vida diaria.',
          duration: '3 min',
          type: 'Ejercicio',
        },
      ],
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(resourceCategories[0].id);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <ThemedText style={styles.headerText}>Recursos</ThemedText>

      {/* Category Tabs */}
      <View style={styles.categoriesContainer}>
        {resourceCategories.map((category) => (
          <Pressable
            key={category.id}
            style={[
              styles.categoryButton,
              selectedCategory === category.id && { backgroundColor: category.color },
            ]}
            onPress={() => setSelectedCategory(category.id)}
          >
            <ThemedText
              style={[
                styles.categoryText,
                selectedCategory === category.id && { color: '#ffffff' },
              ]}
            >
              {category.title}
            </ThemedText>
          </Pressable>
        ))}
      </View>

      {/* Resources List */}
      {resourceCategories
        .find((cat) => cat.id === selectedCategory)
        ?.resources.map((resource, index) => (
          <ThemedView key={index} style={styles.resourceCard}>
            <ThemedText style={styles.resourceTitle}>{resource.title}</ThemedText>
            <ThemedText style={styles.resourceDescription}>{resource.description}</ThemedText>
            <ThemedText style={styles.resourceType}>
              {resource.type} • {resource.duration}
            </ThemedText>
          </ThemedView>
        ))}

      {/* Featured Resource */}
      <ThemedView style={styles.featuredResource}>
        <ThemedText style={styles.featuredTitle}> Recurso Destacado</ThemedText>
        <ThemedText style={styles.featuredDescription}>
          🧘‍♂️ Meditación guiada para reducir la ansiedad en momentos de estrés
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
  categoryText: {
    fontSize: 14,
    color: '#636e72',
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
