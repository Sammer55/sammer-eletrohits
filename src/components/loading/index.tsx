import * as C from "./styles";

type Props = {
  text?: string;
};

const Loading = ({ text = "Carregando..." }: Props) => {
  return (
    <C.Wrapper>
      <C.Image source={require("assets/loading.gif")} />
      <C.Text>{text}</C.Text>
    </C.Wrapper>
  );
};

export default Loading;
