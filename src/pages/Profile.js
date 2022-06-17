import React, { useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../utils/Context";
const Profile = () => {
  const { appState } = GlobalContext();
  const { currentUser } = appState;
  useEffect(() => {
    document.title = "Profile | Light Academy";
  }, []);
  return (
    <ProfileWrapper>
      <section className="body">
        <div className="container">
          <div className="heading f">
            <h1>
              Welcome <span> {"Alex"}...</span>
            </h1>
            <div className="imgCon">
              <img
                className="fwh"
                src={require("../Assets/girlaptop.png")}
                alt=""
              />
            </div>
          </div>
          <div className="info mt20">
            <h2>Info</h2>
            <div className="names mt20">
              <h3>
                <span className="identifier">First Name :</span>
                <span>{" Alex"}</span>
              </h3>
              <h3>
                <span className="identifier">Second Name :</span>
                <span>{" Chika"}</span>
              </h3>
            </div>
          </div>
          <div className="info mt20">
            <h2>Contact</h2>
            <div className="names mt20">
              <h3>
                <span className="identifier">Email :</span>
                <span>{" mcluckey1@gmail.com"}</span>
              </h3>
              <h3>
                <span className="identifier">Phone :</span>
                <span>{" 09024783759"}</span>
              </h3>
            </div>
          </div>
          <div className="bio mt20">
            <h2>Bio</h2>
            <div className="names f mt20">
              <h3>
                <span className="identifier">About-Bio :</span> <br />
                <span className="mt10">
                  {" I am alex, a dev engineer and developer of javascript"}
                </span>
              </h3>
              <h3>
                <span className="identifier">D.O.B :</span> <br />
                <span className="mt10">{" 2023 12 1999"}</span>
              </h3>
            </div>
          </div>
        </div>
        <button className="btn">Update profile</button>
      </section>
    </ProfileWrapper>
  );
};

export default Profile;
const ProfileWrapper = styled.main`
  display: grid;
  height: 100%;
  place-items: center;
  margin: 0 auto;
  color: white;
  .body {
    width: 98%;
    margin: 0 auto;
    min-height: 90vh;
    border-radius: 25px;
    background: rgb(255, 74, 0);
    background: linear-gradient(
      to left,
      rgba(255, 74, 0, 1) 35%,
      rgba(255, 155, 0, 1) 100%
    );
    .container {
      max-width: 768px;
      margin: 0 auto;
      padding-left: 50px;
    }
    /* ,............., */
    .heading {
      height: 100px;
      justify-content: space-between;
      align-items: center;
      padding: 60px 10px;
      h1 {
        font-size: 40px;
      }
      span {
        color: teal;
      }
      .imgCon {
        height: 100px;
      }
    }
    .info,
    .bio {
      padding: 30px 0px;
      border-bottom: 1px solid grey;
      h2 {
        text-decoration: underline;
      }
      .names {
        .identifier {
          display: inline-block;
          color: grey;
          font-size: 14px;
          margin-right: 20px;
          width: 7em;
        }
      }
    }
    .bio .names {
      justify-content: space-between;
      h3 {
        width: 50%;
        border-right: 1px solid grey;
      }
      h3:last-of-type {
        border-left: 1px solid grey;
        padding-left: 20px;
      }
      span {
        display: inline-block;
        width: 90%;
      }
    }
    button {
      display: block;
      padding: 10px;
      color: teal;
      text-align: center;
      margin: 0 auto;
      min-width: 7em;
    }
  }
  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;
