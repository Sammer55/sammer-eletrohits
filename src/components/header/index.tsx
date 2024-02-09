import { MaterialIcons } from "@expo/vector-icons";
import * as C from "./styles";
import { BackHandler } from "react-native";
import { useTheme } from "styled-components";
import { memo } from "react";

type Props = {
  title: string;
};

const Header = memo(({ title }: Props) => {
  const { colors } = useTheme();

  const handleExitApp = () => BackHandler.exitApp();

  return (
    <C.Wrapper style={{ paddingTop: 16 }}>
      <C.Content>
        <C.Title>{title}</C.Title>
        <C.Actions>
          <C.Action onPress={handleExitApp}>
            <MaterialIcons name="minimize" size={20} color={colors.black} />
          </C.Action>
          <C.Action onPress={handleExitApp}>
            <MaterialIcons name="close" size={20} color={colors.black} />
          </C.Action>
        </C.Actions>
      </C.Content>
    </C.Wrapper>
  );
});

export default Header;
