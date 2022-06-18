import React, { useEffect, useRef, useState } from "react";
import { isUser } from "../utils/utils";
import styled from "styled-components";
import { GlobalContext } from "../utils/Context";
const Profile = () => {
  const { appState, overRideUserData, createUser, getUser, dispatch } =
    GlobalContext();
  const { currentUser, userDetails } = appState;
  const [updateModal, setUpdateModal] = useState(!userDetails);
  const [inputDetails, setInputDetails] = useState({
    firstname: "",
    surname: "",
    email: currentUser.email,
    dob: "",
    phone: "",
  });
  const bioRef = useRef(null);
  const btnRef = useRef(null);
  const errorRef = useRef(null);
  const closeUpdateModal = () => {
    if (!userDetails) return;
    setUpdateModal(false);
  };
  const handleUserDetails = (e) => {
    setInputDetails({
      ...inputDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdateUserDetails = async (e) => {
    e.preventDefault();
    const bioInput = bioRef.current;
    const btn = btnRef.current;
    for (const key in inputDetails) {
      if (inputDetails[key].trim() === "") {
        console.log(key, "empty");
        errorRef.current.textContent = "Please fill all fields";
        return false;
      }
    }
    if (
      bioInput.textContent.trim() === "" ||
      bioInput.textContent.trim() === "Please fill this field"
    ) {
      bioInput.textContent = "Please fill this field";
      return;
    }
    let inputObject = {
      ...inputDetails,
      bio: bioInput.textContent,
    };
    btn.textContent = "Please wait";
    errorRef.current.textContent = "";
    console.log(inputObject);
    // at this point all inputs are complete
    // flags
    if (userDetails) {
      await overRideUserData(userDetails.id, inputObject);
      const { success } = await isUser(currentUser.email, getUser, dispatch);
      btn.textContent = "Profile updated";
      setInputDetails({
        firstname: "",
        surname: "",
        email: currentUser.email,
        dob: "",
        phone: "",
      });
      bioInput.textContent = "";
    } else {
      await createUser(inputObject);
      const { success } = await isUser(currentUser.email, getUser, dispatch);
      if (success) {
        btn.textContent = "Profile updated";
        setInputDetails({
          firstname: "",
          surname: "",
          email: currentUser.email,
          dob: "",
          phone: "",
        });
        bioInput.textContent = "";
      } else {
      }
      return;
    }
    return setTimeout(() => {
      btn.textContent = "Submit";
    }, 2000);
  };
  useEffect(() => {
    document.title = "Profile | Light Academy";
  }, []);
  useEffect(() => {
    setUpdateModal(!userDetails);
  }, [userDetails]);

  return (
    <>
      <UpdateProfileWrapper updateModal={updateModal}>
        <div className="form-body">
          <form onSubmit={handleUpdateUserDetails} id="createUserForm">
            <div className="heading mb20">
              <h2>Update Profile</h2>
              <small style={{ color: "tomato" }} ref={errorRef}></small>
            </div>
            <div className="formControl">
              <label htmlFor="firstname">First Name</label>
              <input
                required={true}
                value={inputDetails.firstname}
                onChange={handleUserDetails}
                type="text"
                name="firstname"
                id="firstname"
              />
            </div>
            <div className="formControl">
              <label htmlFor="surname">Sur Name</label>
              <input
                value={inputDetails.surname}
                onChange={handleUserDetails}
                required={true}
                type="text"
                name="surname"
                id="surname"
              />
            </div>
            <div className="formControl">
              <label htmlFor="email">Email</label>
              <input
                value={inputDetails.email}
                required={true}
                type="email"
                name="email"
                id="email"
                readOnly
              />
            </div>
            <div className="formControl">
              <label htmlFor="dob">Date of Birth </label>
              <input
                value={inputDetails.dob}
                onChange={handleUserDetails}
                required={true}
                type="date"
                name="dob"
                id="dob"
              />
            </div>
            <div className="formControl">
              <label htmlFor="phone">Phone </label>
              <input
                value={inputDetails.phone}
                onChange={handleUserDetails}
                required={true}
                type="number"
                name="phone"
                id="phone"
              />
            </div>
            <div className="formControl">
              <label htmlFor="bio">Bio</label>
              <div
                ref={bioRef}
                id="bio"
                contentEditable="true"
                className="textarea"
              ></div>
            </div>
            <button ref={btnRef} className="btn" type="submit">
              Submit
            </button>
            <div className="cancel">
              <span onClick={closeUpdateModal}>Cancel</span>
            </div>
          </form>
        </div>
      </UpdateProfileWrapper>
      <ProfileWrapper>
        <section className="body">
          <div className="container">
            <div className="heading f">
              <h1>
                Welcome <span>{userDetails.firstname || "User"}...</span>
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
                  <span>{userDetails.firstname || "First name"}</span>
                </h3>
                <h3>
                  <span className="identifier">Second Name :</span>
                  <span>{userDetails.surname || " Second name"}</span>
                </h3>
              </div>
            </div>
            <div className="info mt20">
              <h2>Contact</h2>
              <div className="names mt20">
                <h3>
                  <span className="identifier">Email :</span>
                  <span>{currentUser.email || " User email"}</span>
                </h3>
                <h3>
                  <span className="identifier">Phone :</span>
                  <span>{userDetails.phone || " User phone"}</span>
                </h3>
              </div>
            </div>
            <div className="bio mt20">
              <h2>Bio</h2>
              <div className="names f mt20">
                <h3>
                  <span className="identifier">About-Bio :</span> <br />
                  <span className="mt10">
                    {userDetails.bio || " Say a few things about yourself"}
                  </span>
                </h3>
                <h3>
                  <span className="identifier">D.O.B :</span> <br />
                  <span className="mt10">
                    {userDetails.dob || " Year of Birth"}
                  </span>
                </h3>
              </div>
            </div>
          </div>
          <button onClick={() => setUpdateModal(true)} className="btn">
            Update profile
          </button>
        </section>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
const UpdateProfileWrapper = styled.main`
  display: ${({ updateModal }) => (updateModal ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.8);
  /* backdrop-filter: blur(10px); */
  .form-body {
    padding: 20px 10px;
    border: 2px solid pink;
    width: 88%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateX(-70%) translateY(-70%);
    opacity: 0;
    background: ${(props) => props.theme.kodecamp};
    color: black;
    border-radius: 15px;
    /* word-break: break-all; */
    word-wrap: break-word;
    animation: modal 0.3s linear forwards;
    .heading {
      text-align: center;
      color: white;
    }
    .btn {
      padding: 10px 20px;
      border: none;
      background: none;
      border-radius: 15px;
      cursor: pointer;
    }
    .formControl {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
    }
    .formControl label {
      width: 30%;
      padding: 10px;
      background-color: teal;
      height: max-content;
    }
    .formControl input,
    .formControl select {
      background-color: white;
      width: 65%;
      padding: 10px;
      border: none;
      outline: none;
    }
    .formControl .textarea {
      width: 65%;
      background-color: white;
    }
    form button {
      display: block;
      width: 90%;
      max-width: 300px;
      margin: 0 auto;
      background-color: tomato !important;
      text-align: center;
    }
    .cancel {
      color: tomato;
      text-align: center;
      margin-top: 10px;
      padding: 5px;
      span {
        cursor: pointer;
        padding: 5px;
      }
    }
  }
  @media screen and (min-width: 576px) {
    .form-body {
      width: 80%;
    }
  }
  @media screen and (min-width: 768px) {
    .form-body {
      width: 70%;
    }
  }
  @media screen and (min-width: 992px) {
    .form-body {
      width: 60%;
    }
  }
  @keyframes modal {
    100% {
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
    }
  }
`;
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
