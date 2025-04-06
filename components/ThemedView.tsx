import { View, StyleSheet, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const themeBackgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  const flattenedStyle = StyleSheet.flatten(style);
  const hasCustomBackground = flattenedStyle && 'backgroundColor' in flattenedStyle;

  const finalStyle = hasCustomBackground
    ? style
    : [{ backgroundColor: themeBackgroundColor }, style];

  return <View style={finalStyle} {...otherProps} />;
}
