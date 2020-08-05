import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    #root{
      font-size: 60%;
    }

    #root, body, html {
      height: 100vh;
    }

    body{
      background-color: ${(props) => props.theme.colors.background};   
    }

    body, input, button, textarea {
      font: 500 1.6rem Poppins;
    }
    
    button {
      cursor: pointer;
    }    
`;
