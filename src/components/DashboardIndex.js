import React from "react";
import styled from "styled-components";

const DashboardIndex = () => {
  return (
    <DashboardIndexWrapper>
      <h1>Welcome to dashboard index content</h1>
    </DashboardIndexWrapper>
  );
};

export default DashboardIndex;
const DashboardIndexWrapper = styled.main`
  color: ${(props) => props.theme.color};
`;
/* border: 2px solid white; 
  color: ${(props) => props.theme.color};



*/
// ${(props) => props.theme.kodecamp}
// font: italic bold 18px Arial, sans-serif;

/* border: 2px solid red; */
/* background: url(${require("../Assets/boysmall.png")});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center -100px; */
