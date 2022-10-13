import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import fonts from '@theme/fonts';

import { typography } from './typography';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: ${({ theme }) => theme.palette.bgColor};
    ${typography.body}
    color: ${({ theme }) => theme.palette.fontColor};
    letter-spacing: ${fonts.letterSpacing.base};
  }

  button {
    margin: 0;
    padding: 0;
    border: none;
    background-color: inherit;
    border-radius: inherit;
    cursor: pointer;
  }

  input {
    margin: 0;
    padding: 0;
    border: none;
    border-radius: inherit;
    :focus-visible{
      outline: none;
    }
  }

  textarea {
    max-width: 100%;
    height: auto;
    margin: 0;
    padding: 0;
    border: none;
    background-color: inherit;
    border-radius: inherit;
    color: inherit;
    :focus-visible{
      outline:none;
    }
  }

  a {
    font: inherit;
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
