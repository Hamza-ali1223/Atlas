import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../colors';

/**
 * 🎉 Welcome to Animation Palace! 🎉
 *
 * 🚀 Steps to Remember (with a pinch of humor!):
 */
export default function IntroductionScreen() {
  const navigation = useNavigation();
    const [duration,setDuration]=useState(5000)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 🌟 Screen Title 🌟 */}
        <Text style={styles.title}>Animation Palace</Text>

        {/* 📝 Detailed Funny Steps 📝 */}
        <View style={styles.stepsContainer}>
          <Text style={styles.step}><Text style={styles.stepEmoji}>1️⃣</Text> Initialize <Text style={styles.bold}>Animated.Value</Text> - <Text style={styles.chat}>'Hey buddy, meet your new value!'</Text></Text>
          <Text style={styles.step}><Text style={styles.stepEmoji}>2️⃣</Text> Animated.timing - <Text style={styles.chat}>'We're going from A to B, smooth like butter in {duration} ms.' </Text></Text>
          <Text style={styles.step}><Text style={styles.stepEmoji}>3️⃣</Text> Animated.spring - <Text style={styles.chat}>'Boing! Let’s defy gravity with tension and bounce.' </Text></Text>
          <Text style={styles.step}><Text style={styles.stepEmoji}>4️⃣</Text> <Text style={styles.highlight}>useNativeDriver</Text> - <Text style={styles.chat}>'Offload to native, because performance matters, my friend.' </Text></Text>
          <Text style={styles.step}><Text style={styles.stepEmoji}>5️⃣</Text> Chain & Sequence - <Text style={styles.chat}>'One after another or side by side, keep those animations in sync.' </Text></Text>
          <Text style={styles.tip}>💡 Pro Tip: Mix & match springs and timings for drama! 🎭</Text>
        </View>

        {/* 🔘 Button Container 🔘 */}
        <View style={styles.buttonContainer}>
          {/* ⬅️ Back Button ⬅️ */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? Colors.primaryDark : Colors.primaryLight },
            ]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>

          {/* ➡️ Next Button ➡️ */}
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? Colors.accentSecondary : Colors.accent },
            ]}
            onPress={() => navigation.navigate('AnimatedHome')}
          >
            <Text style={styles.buttonText}>Next</Text>
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
    marginBottom: 24,
  },
  stepsContainer: {
    marginBottom: 30,
    backgroundColor: Colors.surfaceVariant,
    borderRadius: 8,
    padding: 16,
  },
  step: {
    fontSize: 18,
    color: Colors.text,
    marginVertical: 8,
  },
  stepEmoji: {
    fontSize: 20,
    marginRight: 8,
  },
  bold: {
    fontWeight: 'bold',
    color: Colors.accent,
  },
  chat: {
    fontStyle: 'italic',
    color: Colors.textSecondary,
  },
  highlight: {
    backgroundColor: Colors.accentSecondary,
    paddingHorizontal: 4,
    borderRadius: 4,
    color: Colors.black,
    fontWeight: '600',
  },
  tip: {
    marginTop: 16,
    fontSize: 16,
    color: Colors.accent,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.45,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 2,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '600',
  },
});
