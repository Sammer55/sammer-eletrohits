import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  gap: 4px;
`;

export const Bar = styled.View`
  flex-direction: row;
  gap: 1px;
  padding: 1px;
  height: 24px;
  overflow: hidden;
  ${retroBorder};
`;

export const BarItem = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 12px;
`;
