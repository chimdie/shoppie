import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,*::before, *::after {
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

  .wrapper{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export default GlobalStyle;
