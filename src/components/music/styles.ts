import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  padding: 8px 16px;
  gap: 8px;

  ${retroBorder}
`;

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;

export const WrapperImage = styled.View`
  position: relative;
`;

export const Check = styled.Image`
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: -6px;
  right: -10px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const WrapperText = styled.View`
  flex: 1;
`;

export const WrapperTextContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  gap: 8px;
`;

export const ChannelName = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-weight: 700;
  font-size: 12px;
`;

export const Name = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: 14px;
`;

export const DeleteButton = styled.TouchableOpacity``;

export const DeleteIcon = styled.Image`
  width: 22px;
  height: 22px;
`;
