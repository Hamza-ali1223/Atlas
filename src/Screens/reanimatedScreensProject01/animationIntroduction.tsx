import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../colors';

/**
 * 🎉 Welcome to Animation Palace! 🎉
 *
 * 🚀 In this introduction, we’ll dive deep into each animation concept, 
 *    explaining how and why to use them, with fun examples to solidify understanding.
 */
export default function IntroductionScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

        {/* 🌟 Title 🌟 */}
        <Text style={styles.title}>Animation Palace</Text>

        {/* 📝 In-Depth Steps 📝 */}
        <View style={styles.stepsContainer}>

          {/* 1️⃣ Fade */}
          <Text style={styles.stepHeader}><Text style={styles.stepEmoji}>1️⃣</Text> Fade Animations (Opacity)</Text>
          <Text style={styles.stepDetails}>
            • Create an <Text style={styles.bold}>Animated.Value</Text> initialized to your starting opacity (e.g., <Text style={styles.code}>new Animated.Value(1)</Text>).
          </Text>
          <Text style={styles.stepDetails}>
            • Use <Text style={styles.bold}>Animated.timing</Text> to animate to a new opacity value:
          </Text>
          <Text style={styles.codeBlock}>
{`Animated.timing(opacityValue, {
  toValue: 0,
  duration: 500,
  useNativeDriver: true,
}).start();`}
          </Text>
          <Text style={styles.stepDetails}>
            • Result: element will fade out over the duration. Reverse to fade in. Handy for smooth transitions.
          </Text>

          {/* 2️⃣ Rotate */}
          <Text style={[styles.stepHeader, { marginTop: 16 }]}><Text style={styles.stepEmoji}>2️⃣</Text> Rotate Animations</Text>
          <Text style={styles.stepDetails}>
            • Initialize <Text style={styles.bold}>new Animated.Value(0)</Text> to represent rotation progress.
          </Text>
          <Text style={styles.stepDetails}>
            • Use <Text style={styles.bold}>interpolate</Text> to map numeric values to degree strings (e.g., "0deg" to "360deg").
          </Text>
          <Text style={styles.codeBlock}>
{`const rotation = new Animated.Value(0);
const rotInterpolate = rotation.interpolate({
  inputRange: [0, 1],
  outputRange: ['0deg', '360deg'],
});
// Animate:
Animated.timing(rotation, {
  toValue: 1,
  duration: 1000,
  useNativeDriver: true,
}).start();`}
          </Text>
          <Text style={styles.stepDetails}>
            • Attach <Text style={styles.bold}>{`transform: [{ rotate: rotInterpolate }]`}</Text> to style. Perfect for spinning loaders or playful icons.
          </Text>

          {/* 3️⃣ Color */}
          <Text style={[styles.stepHeader, { marginTop: 16 }]}><Text style={styles.stepEmoji}>3️⃣</Text> Color Animations</Text>
          <Text style={styles.stepDetails}>
            • Start with <Text style={styles.bold}>new Animated.Value(0)</Text>. This numeric value will drive color changes.
          </Text>
          <Text style={styles.stepDetails}>
            • Define an <Text style={styles.bold}>interpolate</Text> mapping:
          </Text>
          <Text style={styles.codeBlock}>
{`const colorAnim = new Animated.Value(0);
const bgColor = colorAnim.interpolate({
  inputRange: [0, 1],
  outputRange: ['red', 'green'],
});`}
          </Text>
          <Text style={styles.stepDetails}>
            • Animate with timing (native driver not supported for color):
          </Text>
          <Text style={styles.codeBlock}>
{`Animated.timing(colorAnim, {
  toValue: 1,
  duration: 2000,
  useNativeDriver: false,
}).start();`}
          </Text>
          <Text style={styles.stepDetails}>
            • Use <Text style={styles.bold}>{`backgroundColor: bgColor`}</Text> in style. Great for attention-grabbing highlights!
          </Text>

          {/* 4️⃣ Size */}
          <Text style={[styles.stepHeader, { marginTop: 16 }]}><Text style={styles.stepEmoji}>4️⃣</Text> Size Animations (Height & Width)</Text>
          <Text style={styles.stepDetails}>
            • Use separate <Text style={styles.bold}>Animated.Value</Text> instances for height and width.
          </Text>
          <Text style={styles.stepDetails}>
            • Animate with <Text style={styles.bold}>Animated.timing</Text> or <Text style={styles.bold}>spring</Text>:
          </Text>
          <Text style={styles.codeBlock}>
{`Animated.spring(widthValue, {
  toValue: 200,
  friction: 5,
  useNativeDriver: false,
}).start();`}
          </Text>
          <Text style={styles.stepDetails}>
            • Bind values in style: <Text style={styles.bold}>{`style={{ width: widthValue, height: heightValue }}`}</Text>. Ideal for interactive cards or reveal animations.
          </Text>

          {/* 5️⃣ timing vs spring */}
          <Text style={[styles.stepHeader, { marginTop: 16 }]}><Text style={styles.stepEmoji}>5️⃣</Text> timing vs. spring</Text>
          <Text style={styles.stepDetails}>
            • <Text style={styles.bold}>Animated.timing</Text>: precise control over duration and easing. Use for predictable, uniform motions.
          </Text>
          <Text style={styles.stepDetails}>
            • <Text style={styles.bold}>Animated.spring</Text>: physics-based bounce with friction/damping. Use for lively, organic feedback.
          </Text>

          {/* 6️⃣ useNativeDriver */}
          <Text style={[styles.stepHeader, { marginTop: 16 }]}><Text style={styles.stepEmoji}>6️⃣</Text> useNativeDriver</Text>
          <Text style={styles.stepDetails}>
            • Setting <Text style={styles.bold}>useNativeDriver: true</Text> offloads animation calculations to native side, reducing JS thread load.
          </Text>
          <Text style={styles.stepDetails}>
            • Only supports <Text style={styles.bold}>opacity</Text> and <Text style={styles.bold}>transform</Text>. Color & layout require JS driver (<Text style={styles.bold}>useNativeDriver: false</Text>).
          </Text>

          {/* 7️⃣ Sequence & Parallel */}
          <Text style={[styles.stepHeader, { marginTop: 16 }]}><Text style={styles.stepEmoji}>7️⃣</Text> Sequence & Parallel</Text>
          <Text style={styles.stepDetails}>
            • <Text style={styles.bold}>Animated.sequence</Text>: runs animations one after another, like chapters in a story.
          </Text>
          <Text style={styles.stepDetails}>
            • <Text style={styles.bold}>Animated.parallel</Text>: runs multiple animations at the same time, like a synchronized dance troupe.
          </Text>

          {/* Pro Tip */}
          <Text style={styles.tip}>💡 Pro Tip: Don’t be shy—combine fades, spins, color shifts, and size tweaks to craft unforgettable UI moments! 🎭</Text>
        </View>

        {/* 🔘 Buttons 🔘 */}
        <View style={styles.buttonContainer}>
          <Pressable
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? Colors.primaryDark : Colors.primaryLight },
            ]}
            onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
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
  container: { flex: 1, backgroundColor: Colors.background },
  scrollContent: { padding: 20, justifyContent: 'center' },
  title: { fontSize: 36, fontWeight: 'bold', color: Colors.accent, textAlign: 'center', marginBottom: 24 },
  stepsContainer: { marginBottom: 30, backgroundColor: Colors.surfaceVariant, borderRadius: 8, padding: 16 },
  stepHeader: { fontSize: 20, fontWeight: '600', color: Colors.accent, marginVertical: 4 },
  stepDetails: { fontSize: 16, color: Colors.text, marginLeft: 28, marginVertical: 2 },
  stepEmoji: { fontSize: 20, marginRight: 8 },
  bold: { fontWeight: 'bold', color: Colors.accent },
  codeBlock: { fontFamily: 'mono', backgroundColor: Colors.surface, padding: 8, marginVertical: 4, borderRadius: 4, color: Colors.text },
  code: { fontFamily: 'mono', backgroundColor: Colors.surface, paddingHorizontal: 4, borderRadius: 2 },
  tip: { marginTop: 16, fontSize: 16, color: Colors.accent, textAlign: 'center' },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  button: { flex: 0.45, paddingVertical: 12, borderRadius: 8, alignItems: 'center', elevation: 2 },
  buttonText: { color: Colors.white, fontSize: 20, fontWeight: '600' },
});
