import React from "react";
import styled from "styled-components";
import { GlobalContext } from "../utils/Context";
const Dashboard = () => {
  const { dispatch } = GlobalContext();
  const handleTheme = () => {
    dispatch({ type: "THEME" });
  };
  return (
    <DashboardWrapper>
      <h1>Welcome To Dashboard</h1>
      <p>we are doing it </p>
      <button onClick={handleTheme}>click me</button>
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.main`
  color: red;
  p {
    background-color: ${(props) => props.theme.bg};
  }
`;
