import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      background-color: #1875d2;
      -webkit-font-smoothing: antialiased;
      height: 100vh;
    }

    body, input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
