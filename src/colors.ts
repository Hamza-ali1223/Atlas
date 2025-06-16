
export const Colors = {
  // Primary Colors
  primary: '#00C851',        // Bright green
  primaryDark: '#00A043',    // Darker green
  primaryLight: '#4CAF50',   // Lighter green
  
  // Background Colors
  background: '#121212',     // Dark background
  surface: '#1E1E1E',        // Card/surface background
  surfaceVariant: '#2D2D2D', // Alternative surface
  
  // Text Colors
  text: '#FFFFFF',           // Primary text (white)
  textSecondary: '#B3B3B3',  // Secondary text (light gray)
  textMuted: '#808080',      // Muted text (gray)
  
  // Accent Colors
  accent: '#00E676',         // Green accent
  accentSecondary: '#69F0AE', // Light green accent
  
  // Status Colors
  success: '#4CAF50',        // Success green
  warning: '#FF9800',        // Warning orange
  error: '#F44336',          // Error red
  info: '#2196F3',           // Info blue
  
  // Border & Divider
  border: '#333333',         // Border color
  divider: '#2D2D2D',        // Divider color
  
  // Interactive States
  ripple: 'rgba(0, 200, 81, 0.12)', // Green ripple effect
  overlay: 'rgba(0, 0, 0, 0.5)',    // Modal overlay
  
  // Input Colors
  inputBackground: '#2D2D2D',
  inputBorder: '#404040',
  inputFocused: '#00C851',
  
  // Navigation
  tabBarActive: '#00C851',
  tabBarInactive: '#808080',
  headerBackground: '#1E1E1E',
  
  // Utility
  transparent: 'transparent',
  white: '#FFFFFF',
  black: '#000000',
} as const;

// Type for color keys
export type ColorKey = keyof typeof Colors;

// Helper function to get color with opacity
export const getColorWithOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Theme object for easy integration with React Native Paper or other UI libraries
export const DarkTheme = {
  colors: {
    primary: Colors.primary,
    background: Colors.background,
    surface: Colors.surface,
    accent: Colors.accent,
    error: Colors.error,
    text: Colors.text,
    onSurface: Colors.text,
    disabled: Colors.textMuted,
    placeholder: Colors.textSecondary,
    backdrop: Colors.overlay,
    notification: Colors.accent,
  },
};
