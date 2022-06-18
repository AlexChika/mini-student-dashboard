import React, { useState } from "react";
import styled from "styled-components";
import { GlobalContext } from "../utils/Context";
import {
  Outlet,
  NavLink,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import Logo from "../components/Logo";
import Modal from "../components/Modal";
import { statusText } from "../utils/utils";
const Dashboard = () => {
  const navigate = useNavigate();
  const { logout, dispatch } = GlobalContext();
  const { pathname } = useLocation();
  const [sideBar, setSideBar] = useState(false);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState({ text1: "", text2: "" });
  const url = pathname.split("/");
  let isDashboard = url[url.length - 1];
  const handleLogout = async () => {
    setStatus({
      text1: statusText.logoutWaiting1,
      text2: "",
    });
    setModal(true);
    try {
      await logout();
      dispatch({ type: "NO_USER" });
      setModal(true);
      setStatus({
        text1: statusText.logoutSuccess1,
        text2: "",
      });
      navigate("/");
    } catch (error) {
      setStatus({
        text1: error.message,
        text2: "Please Try Again",
      });
      setModal(true);
    }
  };
  // const handleTheme = () => {
  //   dispatch({ type: "THEME" });
  // };
  return (
    <DashboardWrapper className="f">
      <Modal modal={modal} setModal={setModal}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1 className="mb10">{status.text1}</h1>
          <h2>{status.text2}</h2>
        </div>
      </Modal>
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
            onClick={() => setSideBar(false)}
            className={isDashboard === "dashboard" ? "active" : ""}
            to="/dashboard"
          >
            <span className="icon">
              <i className="bi bi-grid-fill"></i>
            </span>
            <span className="text">DashBoard</span>
          </Link>
          <NavLink onClick={() => setSideBar(false)} to="/dashboard/courses">
            <span className="icon">
              <i className="bi bi-book-fill"></i>
            </span>
            <span className="text">Courses</span>
          </NavLink>
          <NavLink onClick={() => setSideBar(false)} to="/dashboard/profile">
            <span className="icon">
              <i className="bi bi-person-lines-fill"></i>
            </span>
            <span className="text">Profile</span>
          </NavLink>
          <div style={{ cursor: "pointer" }} onClick={handleLogout}>
            <span className="icon">
              <i className="bi bi-box-arrow-in-right"></i>
            </span>
            <span className="text">Logout</span>
          </div>
        </div>
        {/* <button onClick={handleTheme}>click me</button> */}
      </section>
      <section className="content">
        <button
          onClick={() => setSideBar(!sideBar)}
          className={`navigation ${sideBar ? "hide" : ""}`}
        >
          <span className="icon">
            <i className="bi bi-list"></i>{" "}
          </span>
        </button>
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
  .navigation {
    position: fixed;
    color: ${(props) => props.theme.color};
    top: 5px;
    font-size: 30px;
    color: chocolate;
  }
  .navigation.hide {
    display: none;
  }
  @keyframes blink {
    50% {
      color: tomato;
    }
  }
  .sideBar {
    background: ${(props) => props.theme.kodecamp};
    transform: translateX(0px);
    border-top-right-radius: 50px;
    width: 100%;
    position: fixed;
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
      a,
      div {
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
    transform: translateX(-100%);
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
    // overflow-y: auto;
    width: 100%;
  }
  @media screen and (min-width: 548px) {
    .sideBar {
      max-width: 500px;
      width: 80%;
      min-width: 300px;
    }
  }
  @media screen and (min-width: 768px) {
    .navigation {
      display: none;
    }
    .sideBar {
      max-width: 500px;
      width: 30%;
      min-width: 300px;
      position: sticky;
    }
    .sideBar.close {
      transform: translateX(0px);
      width: 120px;
      min-width: 120px;
      .linkCon {
        .text {
          display: none;
        }
      }
    }
  }
`;
