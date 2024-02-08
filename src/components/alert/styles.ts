import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 4px;
  ${retroBorder}
`;

export const WrapperTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 4px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
`;

export const Action = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  ${retroBorder};
`;

export const WrapperQuestion = styled.View`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
`;

export const Question = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  flex: 1;
`;

export const Content = styled.View`
  padding: 16px;
  gap: 16px;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.background};
  ${retroBorder};
`;

export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  border-bottom-width: 1px;
`;
