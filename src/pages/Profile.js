import React, { useEffect } from "react";
import styled from "styled-components";
const Profile = () => {
  useEffect(() => {
    document.title = "Profile | Light Academy";
  }, []);
  return (
    <ProfileWrapper>
      <section className="body">
        <h1>Hello from profile</h1>
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
  }
  @media screen and (min-width: 768px) {
    width: 95%;
  }
`;
