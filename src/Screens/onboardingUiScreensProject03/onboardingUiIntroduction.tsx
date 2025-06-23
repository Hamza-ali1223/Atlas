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
 * 🌟 Welcome to Onboarding Journey! 🌟
 *
 * 🚀 Create smooth user onboarding experiences
 *    Learn to build engaging welcome flows that guide new users
 */
export default function OnboardingUiIntroduction() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 🌟 Title 🌟 */}
        <Text style={styles.title}>Onboarding Studio</Text>
        <Text style={styles.subtitle}>Welcome Flow Mastery</Text>

        {/* 📝 Core Onboarding Concepts 📝 */}
        <View style={styles.conceptsContainer}>
          {/* 1️⃣ User Journey Design */}
          <Text style={styles.conceptHeader}>
            <Text style={styles.conceptEmoji}>1️⃣</Text> User Journey Planning
          </Text>
          <Text style={styles.conceptDetails}>
            • Design <Text style={styles.bold}>3-step welcome flow</Text> that introduces your app's value
          </Text>
          <Text style={styles.conceptDetails}>
            • Create <Text style={styles.bold}>smooth transitions</Text> between onboarding screens
          </Text>
          <Text style={styles.codeBlock}>
            {`// Onboarding flow structure
const onboardingSteps = [
  { id: 1, title: 'Welcome', content: 'App introduction' },
  { id: 2, title: 'Features', content: 'Key features showcase' },
  { id: 3, title: 'Get Started', content: 'Ready to begin' }
];`}
          </Text>

          {/* 2️⃣ Navigation Flow */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>2️⃣</Text> Smart Navigation
          </Text>
          <Text style={styles.conceptDetails}>
            • Implement <Text style={styles.bold}>step-by-step progression</Text> with next/previous buttons
          </Text>
          <Text style={styles.conceptDetails}>
            • Handle <Text style={styles.bold}>completion flow</Text> that returns to main app
          </Text>
          <Text style={styles.codeBlock}>
            {`const handleNext = () => {
  if (currentStep < totalSteps) {
    setCurrentStep(currentStep + 1);
  } else {
    navigation.navigate('Home'); // Return to main app
  }
};`}
          </Text>

          {/* 3️⃣ Visual Engagement */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>3️⃣</Text> Engaging Visuals
          </Text>
          <Text style={styles.conceptDetails}>
            • Add <Text style={styles.bold}>progress indicators</Text> to show user's journey
          </Text>
          <Text style={styles.conceptDetails}>
            • Use <Text style={styles.bold}>animations and illustrations</Text> to make it memorable
          </Text>
          <Text style={styles.codeBlock}>
            {`<View style={styles.progressContainer}>
  {steps.map((_, index) => (
    <View 
      key={index}
      style={[
        styles.progressDot,
        index <= currentStep && styles.progressDotActive
      ]} 
    />
  ))}
</View>`}
          </Text>

          {/* 4️⃣ User Persistence */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>4️⃣</Text> Smart Storage
          </Text>
          <Text style={styles.conceptDetails}>
            • Save <Text style={styles.bold}>onboarding completion status</Text> to prevent repeated flows
          </Text>
          <Text style={styles.conceptDetails}>
            • Use <Text style={styles.bold}>AsyncStorage</Text> for persistent user preferences
          </Text>

          {/* 5️⃣ User Experience */}
          <Text style={[styles.conceptHeader, { marginTop: 16 }]}>
            <Text style={styles.conceptEmoji}>5️⃣</Text> Seamless Experience
          </Text>
          <Text style={styles.conceptDetails}>
            • Provide <Text style={styles.bold}>skip option</Text> for returning users
          </Text>
          <Text style={styles.conceptDetails}>
            • Ensure <Text style={styles.bold}>responsive design</Text> across different devices
          </Text>

          {/* Pro Tip */}
          <Text style={styles.tip}>
            💡 Pro Tip: Keep onboarding concise and focused - show value quickly and let users explore naturally! 🎯
          </Text>
        </View>

        {/* 🎯 What You'll Build */}
        <View style={styles.buildContainer}>
          <Text style={styles.buildTitle}>🚀 Your Onboarding Journey</Text>
          <Text style={styles.buildItem}>
            📱 Screen 1: Welcome & App Introduction
          </Text>
          <Text style={styles.buildItem}>
            🎨 Screen 2: Key Features Showcase
          </Text>
          <Text style={styles.buildItem}>
            ⚡ Screen 3: Ready to Start Experience
          </Text>
          <Text style={styles.buildItem}>
            🏠 Smooth Return to Main Home Screen
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
            onPress={() => navigation.navigate('OnboardingUiHome')}
          >
            <Text style={styles.buttonText}>Start Onboarding</Text>
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
