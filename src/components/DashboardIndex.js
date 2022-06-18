import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GlobalContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
const DashboardIndex = () => {
  const navigate = useNavigate();
  const { appState } = GlobalContext();
  const { currentUser, userDetails } = appState;
  const [detailsModal, setDetailsModal] = useState(!userDetails);
  useEffect(() => {
    document.title = "Dashboard | Light Academy";
  }, []);
  const setCloseDetailsModal = () => {
    setDetailsModal(true);
  };
  useEffect(() => {
    setDetailsModal(!userDetails);
  }, [userDetails]);
  return (
    <DashboardIndexWrapper>
      <Modal modal={detailsModal} setModal={setCloseDetailsModal}>
        <div className="modalBody">
          <div className="heading">
            <h2>Hello !!! {currentUser.email}</h2>
          </div>
          <div className="mt20">
            <h3>
              Welcome to <span className="logo">Light Academy</span> we are
              deligted to have you.
            </h3>
          </div>
          <div className="mt20">
            <h3>
              Your profile is Incomplete, Please Click the below buttons to
              Update or cancel
            </h3>
          </div>
          <div className="mt20">
            <button
              onClick={() => navigate("/dashboard/profile")}
              className="btn"
            >
              Update Now
            </button>
            <button onClick={() => setDetailsModal(false)} className="btn">
              Update Later
            </button>
          </div>
        </div>
      </Modal>
      <section className="content f">
        <div className="a">
          <div className="heading">
            <h1>Welcome Back</h1>
            <h2>{userDetails.firstname || currentUser?.email}</h2>
          </div>
          <div className="bio">{userDetails.bio || ""}</div>
          <div>
            <Link to="/dashboard/courses">Continue Learning</Link>
          </div>
        </div>
        <div className="b">
          <img
            className="fwh"
            src={require("../Assets/girlaptop.png")}
            alt=""
          />
        </div>
      </section>
    </DashboardIndexWrapper>
  );
};

export default DashboardIndex;
const DashboardIndexWrapper = styled.main`
  display: grid;
  height: 100%;
  place-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.color};
  .content {
    flex-direction: column;
    width: 98%;
    margin: 0 auto;
    min-height: 40vh;
    border-radius: 25px;
    background: rgb(255, 74, 0);
    background: linear-gradient(
      to left,
      rgba(255, 74, 0, 1) 35%,
      rgba(255, 155, 0, 1) 100%
    );
    .a {
      display: grid;
      place-items: center;
      color: white;
      text-align: center;
      h1 {
        font-size: 40px;
        color: teal;
      }
      h2 {
        font-size: 30px;
      }
      .bio {
        color: teal;
        font-style: italic;
        width: 80%;
        margin: 0 auto;
      }
      a {
        display: block;
        width: 280px;
        padding: 15px 0px;
        background: skyblue;
        border-radius: 20px;
      }
    }
    .a,
    .b {
      height: 45vh;
      width: 100%;
    }
  }
  .modalBody {
    text-align: center;
    .heading {
      color: teal;
    }
    .logo {
      font-family: "Oleo Script", cursive;
    }
    .btn {
      border: 1px solid white;
      padding: 10px 20px;
      background-color: teal;
      border-radius: 15px;
      margin: 0px 5px;
    }
  }
  @media screen and (min-width: 768px) {
    width: 95%;
    .content {
      flex-direction: row;
      .a,
      .b {
        width: 50%;
        height: auto;
        min-height: 40vh;
        max-height: 78vh;
      }
    }
  }
`;
