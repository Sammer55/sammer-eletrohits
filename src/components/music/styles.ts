import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const Wrapper = styled.TouchableOpacity`
  padding: 8px 16px;
  gap: 8px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  ${retroBorder}
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const WrapperText = styled.View`
  flex: 1;
`;

export const ChannelName = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-weight: 700;
  font-size: 10px;
`;

export const Name = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  font-size: 14px;
`;
