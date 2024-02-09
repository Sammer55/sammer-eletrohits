import Modal from "react-native-modal";
import * as C from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { memo } from "react";

type Props = {
  title: string;
  question: string;
  isVisible: boolean;
  image?: any;
  handleClose: () => void;
  handleConfirm: () => void;
};

const Alert = memo(
  ({
    title,
    question,
    isVisible,
    image,
    handleClose,
    handleConfirm,
  }: Props) => {
    return (
      <Modal
        isVisible={isVisible}
        animationIn="zoomIn"
        animationOut="zoomOut"
        backdropOpacity={0.3}
      >
        <C.Wrapper>
          <C.WrapperTitle>
            <C.Title>{title}</C.Title>
            <C.Action onPress={handleClose}>
              <MaterialIcons name="close" size={20} color="black" />
            </C.Action>
          </C.WrapperTitle>
          <C.Content>
            <C.WrapperQuestion>
              {!!image && <C.Image source={image} />}
              <C.Question>{question}</C.Question>
            </C.WrapperQuestion>
            <C.WrapperButtons>
              {!!handleConfirm && (
                <C.Button onPress={handleConfirm}>
                  <C.TextButton>Sim</C.TextButton>
                </C.Button>
              )}
              <C.Button onPress={handleClose}>
                <C.TextButton>Não</C.TextButton>
              </C.Button>
            </C.WrapperButtons>
          </C.Content>
        </C.Wrapper>
      </Modal>
    );
  }
);

export default Alert;
