import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 8px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.black};
`;
