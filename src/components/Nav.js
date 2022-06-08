import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <NavBar className="falign">
      <Logo />
      <button>
        <Link to="/login">Login</Link>
      </button>
    </NavBar>
  );
}

export default Nav;
const NavBar = styled.nav`
  background-color: #333351;

  overflow: hidden;
  height: 65px;
  box-shadow: 0px 1px 6px grey;
  justify-content: space-between;
  padding-right: 30px;
  button {
    color: rgba(255, 255, 255, 0.8);
    font: italic bold 18px Arial, sans-serif;
    border: 1px solid grey;
    border-radius: 20px;
    padding: 10px 15px;
  }
  /* border: 2px solid red; */
`;
