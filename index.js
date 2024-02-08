import { registerRootComponent } from "expo";
import { TouchableOpacity } from "react-native";
import "react-native-gesture-handler";

import App from "./App";

registerRootComponent(App);

TouchableOpacity.defaultProps = {};
TouchableOpacity.defaultProps.activeOpacity = 0.5;
