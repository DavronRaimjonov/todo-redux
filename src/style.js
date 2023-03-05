import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
  body{
    background-color: #181824;
  }
  ::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background-color: #1f2936;
  border-radius: 5px;
}
`;
