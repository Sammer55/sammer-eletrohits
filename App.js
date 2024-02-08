import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./src/styles/themeProvider";
import HomeScreen from "./src/screens/home";
import { useEffect } from "react";
import handleConfigureAudio from "./src/utils/handleConfigureAudio";

export default function App() {
  useEffect(() => {
    handleConfigureAudio();
  }, []);

  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <HomeScreen />
    </ThemeProvider>
  );
}
