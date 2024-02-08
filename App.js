import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "./src/styles/themeProvider";
import HomeScreen from "./src/screens/home";

export default function App() {
  return (
    <ThemeProvider>
      <StatusBar style="light" />
      <HomeScreen />
    </ThemeProvider>
  );
}
