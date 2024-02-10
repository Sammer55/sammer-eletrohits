import { retroBorder } from "@/utils/retroBorder";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: ${(StatusBar.currentHeight || 0) + 16}px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px 8px 16px;
  gap: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const Action = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  ${retroBorder};
`;
