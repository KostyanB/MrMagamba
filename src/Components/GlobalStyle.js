import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
   }
   *,
   *::before,
   *::after {
     box-sizing: inherit;
   }

   body {
     margin: 0;
     background-color: #f0f0f0;
     font-family: Roboto, sans-serif;
     font-size: 20px;
     color: black
   }
   img {
     max-width: 100%;
     height: auto;
   }
   a {
     text-decoration: none;
     color: inherit;
   }
   ul {
     list-style: none;
     padding: 0;
     margin: 0;
   }
   h1, h2, h3 {
    font-family: Pacifico;
    padding: 0;
    margin: 0;
   }
   p {
    padding: 0;
    margin: 0;
   }
   button {
    cursor: pointer;
    text-decoration: none;
    border-radius: 30px;
    background-image: linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%);
    background-position: 100% 0;
    background-size: 200% 200%;
    color: #002878;
    box-shadow: 0 16px 32px 0 rgba(0, 40, 120, .35);
    transition: .5s;
    :hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
    }
   }
   input, button {
     font-family: inherit;
   }

`;