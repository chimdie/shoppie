import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body{
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
