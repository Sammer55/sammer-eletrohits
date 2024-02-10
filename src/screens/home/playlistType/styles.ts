import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 56px;
  margin: 8px 16px 16px 16px;
  padding: 8px;
  gap: 16px;
  ${retroBorder}
`;

export const Computer = styled.Image`
  width: 40px;
  height: 40px;
`;

export const DownloadMusics = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  flex: 1;
`;
