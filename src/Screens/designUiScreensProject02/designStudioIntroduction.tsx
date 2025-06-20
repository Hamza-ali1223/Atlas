import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../colors';

/**
 * 🎨 Welcome to Design Studio! 🎨
 *
 * 🚀 Master UI Design fundamentals - from Figma to React Native
 *    Learn to transform designs into beautiful, responsive screens
 */
export default function DesignStudioIntroduction() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 🌟 Title 🌟 */}
        <Text style={styles.title}>Design Studio</Text>
        <Text style={styles.subtitle}>Figma to React Native Mastery</Text>

        {/* 📝 Core UI Design Concepts 📝 */}
        <View style={styles.conceptsContainer}>
          {/* 1️⃣ Figma to Code */}
          <Text style={styles.conceptHeader}>
            <Text style={styles.conceptEmoji}>1️⃣</Text> Figma Design Analysis
          </Text>
          <Text style={styles.conceptDetails}>
            • Break down <Text style={styles.bold}>Figma components</Text> into
            React Native elements
          </Text>
          <Text style={styles.conceptDetails}>
            • Identify{' '}
            <Text style={styles.bold}>spacing, colors, and typography</Text>{' '}
            from design specs
          </Text>
          <Text style={styles.codeBlock}>
            {`// Extract design tokens from Figma
const designTokens = {
  spacing: { xs: 4, sm: 8, md: 16, lg: 24 },
  colors: { primary: '#00C851', surface: '#1E1E1E' },
  typography: { h1: 32, body: 16 }
};`}
          </Text>

          {/* 2️⃣ Responsive Layouts */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>2️⃣</Text> Responsive Screen
            Building
          </Text>
          <Text style={styles.conceptDetails}>
            • Use <Text style={styles.bold}>Flexbox</Text> for adaptive layouts
            across different screen sizes
          </Text>
          <Text style={styles.conceptDetails}>
            • Implement <Text style={styles.bold}>SafeAreaView</Text> and proper
            spacing for iOS/Android
          </Text>
          <Text style={styles.codeBlock}>
            {`<View style={{ flex: 1, padding: 16 }}>
  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    {/* Your responsive content */}
  </ScrollView>
</View>`}
          </Text>

          {/* 3️⃣ Component Structure */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>3️⃣</Text> Reusable Components
          </Text>
          <Text style={styles.conceptDetails}>
            • Create <Text style={styles.bold}>modular components</Text> for
            buttons, cards, and inputs
          </Text>
          <Text style={styles.conceptDetails}>
            • Follow{' '}
            <Text style={styles.bold}>consistent styling patterns</Text> across
            your app
          </Text>
          <Text style={styles.codeBlock}>
            {`const CustomButton = ({ title, onPress, variant = 'primary' }) => (
  <Pressable style={[styles.button, styles[variant]]} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </Pressable>
);`}
          </Text>

          {/* 4️⃣ Image Handling */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>4️⃣</Text> Asset Management
          </Text>
          <Text style={styles.conceptDetails}>
            • Optimize <Text style={styles.bold}>images and icons</Text> for
            different screen densities
          </Text>
          <Text style={styles.conceptDetails}>
            • Use <Text style={styles.bold}>require()</Text> for local assets
            and proper image sizing
          </Text>

          {/* 5️⃣ Styling Best Practices */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>5️⃣</Text> Professional Styling
          </Text>
          <Text style={styles.conceptDetails}>
            • Apply <Text style={styles.bold}>consistent color schemes</Text>{' '}
            and maintain design system
          </Text>
          <Text style={styles.conceptDetails}>
            • Use <Text style={styles.bold}>StyleSheet.create()</Text> for
            optimized performance
          </Text>

          {/* Pro Tip */}
          <Text style={styles.tip}>
            💡 Pro Tip: Always start with the design breakdown - identify
            components, spacing, and interactions before coding! 🎯
          </Text>
        </View>

        {/* 🎯 What You'll Build */}
        <View style={styles.buildContainer}>
          <Text style={styles.buildTitle}>🚀 What You'll Master</Text>
          <Text style={styles.buildItem}>
            📱 Transform Figma designs into pixel-perfect screens
          </Text>
          <Text style={styles.buildItem}>
            🎨 Build responsive layouts for iOS and Android
          </Text>
          <Text style={styles.buildItem}>⚡ Create reusable UI components</Text>
          <Text style={styles.buildItem}>
            🔥 Add smooth animations and interactions
          </Text>
        </View>

        {/* 🔘 Navigation Buttons 🔘 */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? Colors.primaryDark
                  : Colors.primaryLight,
              },
            ]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              {
                backgroundColor: pressed
                  ? Colors.accentSecondary
                  : Colors.accent,
              },
            ]}
            onPress={() => navigation.navigate('DesignUiMainIntro')}
          >
            <Text style={styles.buttonText}>Start Building</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.accent,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    fontStyle: 'italic',
  },
  conceptsContainer: {
    marginBottom: 24,
    backgroundColor: Colors.surfaceVariant,
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: Colors.accent,
  },
  conceptHeader: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.accent,
    marginVertical: 6,
  },
  conceptDetails: {
    fontSize: 16,
    color: Colors.text,
    marginLeft: 28,
    marginVertical: 3,
    lineHeight: 22,
  },
  conceptEmoji: {
    fontSize: 20,
    marginRight: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: Colors.accent,
  },
  codeBlock: {
    fontFamily: 'monospace',
    backgroundColor: Colors.surface,
    padding: 12,
    marginVertical: 8,
    marginLeft: 28,
    borderRadius: 6,
    color: Colors.textSecondary,
    fontSize: 14,
    borderLeftWidth: 3,
    borderLeftColor: Colors.accent,
  },
  tip: {
    marginTop: 20,
    fontSize: 16,
    color: Colors.accent,
    textAlign: 'center',
    backgroundColor: Colors.surface,
    padding: 16,
    borderRadius: 8,
    fontWeight: '500',
  },
  buildContainer: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  buildTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.accent,
    marginBottom: 12,
    textAlign: 'center',
  },
  buildItem: {
    fontSize: 16,
    color: Colors.text,
    marginVertical: 4,
    paddingLeft: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: Colors.accent,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
