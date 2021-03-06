import { createGlobalStyle } from "styled-components";
const Theme = {
  Light: {
    kodecamp: "#333351",
    bg: "#d9d9d9",
    color: "black",
    secBg: "white",
  },
  Dark: {
    bg: "grey",
    color: "white",
    secBg: "black",
  },
};
const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style:none;
  transition: all 0.3s linear;
}
button,input{
border:none;
outline:none;
background:transparent;
cursor: pointer;
color:inherit;
}
a{
    text-decoration:none;
    color:inherit;
}
body{
    background-color:${(props) => props.theme.bg}
}
/* utility Classes */
.first {
  color: teal;
}
.second {
  color: chocolate;
}
.firstbg {
   background-color: teal;
}
.secondbg {
   background-color: chocolate;
}
.f{
  display:flex;
}
.falign{
  display:flex;
  align-items:center;
}
.fcenter{
    display:flex;
    justify-content:center;
    align-items:center;
}
.mt30{
    margin-top:30px;
}
.mt20{
    margin-top:20px;
}
.mt10{
    margin-top:10px;
}
.mb30{
    margin-bottom:30px;
}
.mb20{
    margin-bottom:20px;
}
.mb10{
    margin-bottom:10px;
}
.fwh{
   width: 100%;
      height: 100%;
}
`;

export { Theme, GlobalStyle };
