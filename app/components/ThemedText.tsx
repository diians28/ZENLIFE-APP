import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({ type = 'default', style, ...rest }: ThemedTextProps) {
  const color = useThemeColor({}, 'text');

  return (
    <Text
      style={[
        { color, backgroundColor: 'transparent' }, // Set transparent background
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    fontWeight: '400',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  defaultSemiBold: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  link: {
    fontSize: 16,
    fontWeight: '400',
    textDecorationLine: 'underline',
  },
});

export default ThemedText;