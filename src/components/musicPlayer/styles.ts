import { retroBorder } from "@/utils/retroBorder";
import styled from "styled-components/native";

export const Wrapper = styled.View<{ isHidden?: boolean }>`
  display: ${({ isHidden }) => (isHidden ? "none" : "flex")};
  background-color: ${({ theme }) => theme.colors.background};
  position: absolute;
  bottom: 0;
  padding: 8px;
  align-self: center;
  ${retroBorder}
`;

export const WrapperSound = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const WrapperMusic = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  gap: 8px;
  padding-right: 8px;
`;

export const Image = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: contain;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.Text.attrs(() => ({
  numberOfLines: 1,
}))`
  color: ${({ theme }) => theme.colors.black};
`;

export const PlayerButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${retroBorder}
`;

export const Actions = styled.View`
  margin-top: 16px;
`;

export const WrapperSlider = styled.View`
  flex-direction: row;
`;

export const Time = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-size: 16px;
  width: 40px;
  text-align: center;
`;
