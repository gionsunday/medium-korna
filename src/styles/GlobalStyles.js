import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: #fff;
    color: ${({ theme }) => theme.colors.primary};
    line-height: 1.5;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
