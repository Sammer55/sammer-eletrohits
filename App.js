import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./src/styles/themeProvider";
import HomeScreen from "./src/screens/home";
import React, { useEffect } from "react";
import { TouchableOpacity, Text } from "react-native";
import handleConfigureAudio from "./src/utils/handleConfigureAudio";
import setGlobalFontFamily from "./src/utils/setGlobalFontFamily";

import { LogBox } from "react-native";
import { useFonts } from "expo-font";

LogBox.ignoreAllLogs();

TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.activeOpacity = 0.5;

export default function App() {
  const [fontsLoaded] = useFonts({
    MS: require("./assets/ms-sans-serif-1.ttf"),
  });

  useEffect(() => {
    handleConfigureAudio();
    setGlobalFontFamily();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <HomeScreen />
    </ThemeProvider>
  );
}
