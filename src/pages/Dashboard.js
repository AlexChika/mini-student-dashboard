import React, { useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../utils/Context";
import { Outlet, NavLink, useLocation, Link } from "react-router-dom";
import Logo from "../components/Logo";
const Dashboard = () => {
  const { dispatch } = GlobalContext();
  const { pathname } = useLocation();
  const [sideBar, setSideBar] = useState(true);
  const url = pathname.split("/");
  let isDashboard = url[url.length - 1];
  const handleTheme = () => {
    dispatch({ type: "THEME" });
  };
  return (
    <DashboardWrapper className="f">
      <section className={`sideBar ${sideBar ? "" : "close"}`}>
        <span onClick={() => setSideBar(!sideBar)} className="arrow">
          {sideBar ? (
            <i className="bi bi-arrow-left"></i>
          ) : (
            <i className="bi bi-arrow-right"></i>
          )}
        </span>
        <div className="heading">
          <span className="logo">
            {sideBar ? (
              <Logo />
            ) : (
              <Link to="/">
                <img
                  className="img"
                  src={require("../Assets/icon.png")}
                  alt=""
                />
              </Link>
            )}
          </span>
        </div>
        <div className="linkCon">
          <Link
            className={isDashboard === "dashboard" ? "active" : ""}
            to="/dashboard"
          >
            <span className="icon">
              <i className="bi bi-grid-fill"></i>
            </span>
            <span className="text">DashBoard</span>
          </Link>
          <NavLink to="/dashboard/courses">
            <span className="icon">
              <i className="bi bi-book-fill"></i>
            </span>
            <span className="text">Courses</span>
          </NavLink>
          <NavLink to="/dashboard/profile">
            <span className="icon">
              <i className="bi bi-person-lines-fill"></i>
            </span>
            <span className="text">Profile</span>
          </NavLink>
          <NavLink to="/">
            <span className="icon">
              <i className="bi bi-box-arrow-in-right"></i>
            </span>
            <span className="text">Logout</span>
          </NavLink>
        </div>
        {/* <button onClick={handleTheme}>click me</button> */}
      </section>
      <section className="content">
        <Outlet />
      </section>
    </DashboardWrapper>
  );
};

export default Dashboard;

const DashboardWrapper = styled.main`
  background-color: ${(props) => props.theme.bg};
  color: white;
  min-height: 100vh;
  position: relative;
  .icon {
    font-size: 50px;
    color: inherit;
  }
  .arrow {
    padding: 10px;
    display: block;
    width: 100%;
    text-align: center;
    font-size: 30px;
    animation: blink 2s linear infinite;
  }
  @keyframes blink {
    50% {
      color: tomato;
    }
  }
  .sideBar {
    background: ${(props) => props.theme.kodecamp};
    border-top-right-radius: 50px;
    max-width: 500px;
    width: 30%;
    min-width: 300px;
    position: sticky;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    .heading {
      .logo {
        img {
          display: block;
          height: 6em;
          margin: 0 auto;
        }
      }
    }
    .linkCon {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: calc(100% - 212px);
      margin-top: 50px;
      a {
        padding: 5px 10px;
        display: block;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .text {
        font-size: 30px;
        flex: 0.8;
      }
      .icon {
        padding-left: 10px;
      }
      .active {
        color: ${(props) => props.theme.color};
        background-color: ${(props) => props.theme.bg};
        border-bottom-left-radius: 30px;
        border-top-left-radius: 30px;
      }
    }
  }
  .sideBar.close {
    width: 120px;
    min-width: 120px;
    .linkCon {
      .text {
        display: none;
      }
    }
  }
  .content {
    padding: 50px 10px;
    /* background: linear-gradient(
      to right,
      #a080a0,
      ${(props) => props.theme.kodecamp}
    ); */
    overflow-y: auto;
    width: 100%;
  }
`;
