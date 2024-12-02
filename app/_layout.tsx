import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { Platform } from 'react-native';
import { LightNodeProvider } from "@waku/react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const content = (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );

  // Only use LightNodeProvider on native platforms
  if (Platform.OS === 'web') {
    return content;
  }

  return (
    <LightNodeProvider options={{ defaultBootstrap: true }}>
      {content}
    </LightNodeProvider>
  );
}
