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
        <div>
          <h2 className="mb30">
            Hello <span>{currentUser.email}</span>
          </h2>
          <h3>Please I dont wanna miss the internship</h3>
          <h3>Page under construction</h3>
          <h3>still learnig databases to populate this page</h3>
        </div>
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
    display: grid;
    place-items: center;
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
    span {
      color: teal;
    }
  }
  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;
