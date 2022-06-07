import { createGlobalStyle } from "styled-components";
const Theme = {
  Light: {
    bg: "teal",
  },
  Dark: {
    bg: "grey",
  },
};
const GlobalStyle = createGlobalStyle`

body{
    background-color:${(props) => props.theme.bg}
}



`;

export { Theme, GlobalStyle };
