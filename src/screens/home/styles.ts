import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperSearch = styled.View`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px 16px;
  gap: 8px;
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  ${retroBorder}
`;
