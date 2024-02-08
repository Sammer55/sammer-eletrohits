import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const TextInput = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  padding: 0 16px 0 16px;
  color: ${({ editable, theme }) =>
    !editable ? theme.colors.border : theme.colors.black};
  ${retroBorder}
`;
