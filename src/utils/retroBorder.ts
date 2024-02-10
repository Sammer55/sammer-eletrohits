import { css } from "styled-components";

export const retroBorder = css`
  border-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.white};
  border-left-color: ${({ theme }) => theme.colors.white};
  border-right-color: ${({ theme }) => theme.colors.black};
  border-bottom-color: ${({ theme }) => theme.colors.black};
`;
