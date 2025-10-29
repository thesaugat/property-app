import { Image } from 'expo-image';
import { StyleSheet, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const iconColor = isDark ? '#9BA1A6' : '#687076';
  const tintColor = isDark ? '#4A90E2' : '#2563eb';

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#4A90E2', dark: '#1a4d7a' }}
      headerImage={
        <View style={styles.headerContent}>
          <Ionicons name="map" size={80} color="rgba(255,255,255,0.9)" />
          <ThemedText type="title" style={styles.headerTitle}>Suburb Scout</ThemedText>
          <ThemedText style={styles.headerSubtitle}>NSW Property Insights</ThemedText>
        </View>
      }>

      {/* Hero Section */}
      <ThemedView style={styles.heroContainer}>
        <ThemedText type="subtitle" style={styles.heroText}>
          Compare suburbs. Make smarter decisions.
        </ThemedText>
        <ThemedText style={styles.heroDescription}>
          All the insights you need—price trends, safety, schools, commute times, and nearby development—in one place.
        </ThemedText>
      </ThemedView>

      {/* Search Bar */}
      <ThemedView style={styles.searchContainer}>
        <View style={[styles.searchBar, { backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5' }]}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput
            placeholder="Search suburbs in NSW..."
            placeholderTextColor="#999"
            style={[styles.searchInput, { color: isDark ? '#fff' : '#333' }]}
          />
        </View>
      </ThemedView>

      {/* Quick Compare CTA */}
      <TouchableOpacity style={[styles.compareButton, { backgroundColor: tintColor }]}>
        <Ionicons name="git-compare-outline" size={24} color="#fff" />
        <ThemedText style={styles.compareButtonText}>Compare 3 Suburbs</ThemedText>
      </TouchableOpacity>

      {/* Features Grid */}
      <ThemedView style={styles.featuresContainer}>
        <ThemedText type="subtitle" style={styles.sectionTitle}>What You'll Discover</ThemedText>

        <View style={styles.featureGrid}>
          <FeatureCard
            icon="trending-up"
            title="Price Trends"
            description="Recent sales & median prices"
            color="#4CAF50"
            isDark={isDark}
          />
          <FeatureCard
            icon="shield-checkmark"
            title="Safety"
            description="Crime data & ratings"
            color="#FF9800"
            isDark={isDark}
          />
          <FeatureCard
            icon="school"
            title="Schools"
            description="Catchments & ratings"
            color="#2196F3"
            isDark={isDark}
          />
          <FeatureCard
            icon="car"
            title="Commute"
            description="Travel times & access"
            color="#9C27B0"
            isDark={isDark}
          />
          <FeatureCard
            icon="hammer"
            title="Development"
            description="DAs & new builds"
            color="#F44336"
            isDark={isDark}
          />
          <FeatureCard
            icon="water"
            title="Environment"
            description="Flood risk & elevation"
            color="#00BCD4"
            isDark={isDark}
          />
        </View>
      </ThemedView>

      {/* Smart Alerts Section */}
      <ThemedView style={styles.alertsContainer}>
        <View style={[styles.alertsBox, { backgroundColor: isDark ? '#1a2f3f' : '#f0f7ff' }]}>
          <View style={styles.alertsHeader}>
            <Ionicons name="notifications" size={24} color={tintColor} />
            <ThemedText type="subtitle" style={styles.alertsTitle}>Smart Alerts</ThemedText>
          </View>
          <ThemedText style={styles.alertsDescription}>
            Get notified when new Development Applications (DAs) are lodged within 500m of your saved addresses or favorite suburbs.
          </ThemedText>
          <TouchableOpacity style={styles.alertsButton}>
            <ThemedText style={[styles.alertsButtonText, { color: tintColor }]}>
              Set Up Alerts →
            </ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      {/* CTA Section */}
      <ThemedView style={styles.ctaContainer}>
        <ThemedText type="subtitle">Ready to explore?</ThemedText>
        <ThemedText style={styles.ctaDescription}>
          Tap the map icon below to start exploring suburbs or use the compare tool to see how areas stack up side-by-side.
        </ThemedText>
      </ThemedView>

    </ParallaxScrollView>
  );
}

function FeatureCard({ icon, title, description, color, isDark }: {
  icon: any;
  title: string;
  description: string;
  color: string;
  isDark: boolean;
}) {
  return (
    <View style={[styles.featureCard, { backgroundColor: isDark ? '#1a1a1a' : '#f8f9fa' }]}>
      <View style={[styles.featureIconContainer, { backgroundColor: color + '20' }]}>
        <Ionicons name={icon} size={28} color={color} />
      </View>
      <ThemedText type="defaultSemiBold" style={styles.featureTitle}>{title}</ThemedText>
      <ThemedText style={styles.featureDescription}>{description}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  headerTitle: {
    color: '#fff',
    marginTop: 12,
    fontSize: 32,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 16,
    marginTop: 4,
  },
  heroContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  heroText: {
    textAlign: 'center',
    marginBottom: 12,
  },
  heroDescription: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    paddingHorizontal: 20,
    opacity: 0.8,
  },
  searchContainer: {
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  compareButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    marginBottom: 24,
  },
  compareButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  featureGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },
  featureCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    gap: 8,
  },
  featureIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  featureTitle: {
    fontSize: 15,
  },
  featureDescription: {
    fontSize: 13,
    opacity: 0.7,
    lineHeight: 18,
  },
  alertsContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  alertsBox: {
    padding: 20,
    borderRadius: 12,
  },
  alertsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  alertsTitle: {
    fontSize: 18,
  },
  alertsDescription: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
    marginBottom: 12,
  },
  alertsButton: {
    alignSelf: 'flex-start',
  },
  alertsButtonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  ctaContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
  },
  ctaDescription: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.7,
    marginTop: 8,
  },
});