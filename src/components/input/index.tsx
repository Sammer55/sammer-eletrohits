import { TextInputProps } from "react-native";
import { TextInput } from "./styles";
import { useTheme } from "styled-components";

type Props = {
  editable?: boolean;
} & TextInputProps;

const Input = ({ editable = true, ...rest }: Props) => {
  const { colors } = useTheme();

  return (
    <TextInput
      editable={editable}
      placeholderTextColor={editable ? colors.placeholder : colors.black}
      {...rest}
    />
  );
};

export default Input;
