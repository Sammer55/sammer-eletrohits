import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex-direction: row;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  width: 40px;
  text-align: center;
`;
