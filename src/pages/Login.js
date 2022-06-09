import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
// fire Base
import { app, auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const Login = () => {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const handleLoginDetails = (e) => {
    e.preventDefault();
    navigate("/dashboard");
    return;
    signInWithEmailAndPassword(auth, userDetails.email, userDetails.password)
      .then((response) => {
        const user = response.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log(userDetails);
  };
  const loginHandler = () => {
    // navigate("/dashboard");
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    console.log("Auth with google");
  };
  useEffect(() => {
    document.title = "Login | Light Academy";
  }, []);

  return (
    <>
      <Nav url={"/"} link={"Home"} />
      <LoginWrapper className="fcenter">
        <div className="container f">
          <section className="a f">
            <div className="heading">
              <h1>Student Login</h1>
              <p>Login To Continue your account</p>
            </div>
            <div className="sticker">
              <img src={require("../Assets/loginicon.png")} alt="login icon" />
            </div>
          </section>
          <section className="b f">
            <div className="heading fcenter">
              <img
                className="logo"
                src={require("../Assets/icon.png")}
                alt="light academy logo"
              />
              <span className="logoText">Light Academy</span>
            </div>
            <form onSubmit={handleLoginDetails}>
              <div className="formControl">
                <label htmlFor="email">
                  <input
                    onChange={(e) =>
                      setUserDetails({ ...userDetails, email: e.target.value })
                    }
                    placeholder="Enter a correct email"
                    type="email"
                    required
                    value={userDetails.email}
                    id="email"
                  />
                  <span>
                    <img
                      src={require("../Assets/gmail.png")}
                      alt="email icon"
                    />
                  </span>
                </label>
              </div>
              <div className="formControl">
                <label htmlFor="password">
                  <input
                    onChange={(e) =>
                      setUserDetails({
                        ...userDetails,
                        password: e.target.value,
                      })
                    }
                    placeholder="Please enter correct password"
                    type="text"
                    value={userDetails.password}
                    id="passsword"
                    required
                  />
                  <span>
                    <img src={require("../Assets/key.png")} alt=" key icon" />
                  </span>
                </label>
              </div>
              <div className="formControl">
                <button
                  onClick={handleLoginDetails}
                  className="mt30"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </section>
        </div>
        <span style={{ color: "grey", fontSize: "20px" }} className="mt30">
          Or
        </span>
        <button onClick={loginHandler} className="google mt30 mb30 f">
          <span>Continue with Google</span>
          <img src={require("../Assets/google.png")} alt=" google icon" />
        </button>
      </LoginWrapper>
    </>
  );
};

export default Login;
const LoginWrapper = styled.main`
  color: ${(props) => props.theme.color};
  background: ${(props) => props.theme.bg};
  flex-direction: column;
  width: 100vw;
  margin: 0 auto;
  min-height: calc(100vh);
  .container {
    max-width: 1040px;
    margin-top: 50px;
    flex-direction: column;
    width: 95vw;
    background-color: ${(props) => props.theme.secBg};
    box-shadow: 1px 1px 20px ${(props) => props.theme.color};
    padding-bottom: 50px;
    section {
      width: 100%;
    }
    .a {
      flex-direction: column;
      justify-content: space-around;
      .heading {
        margin: 20px 0px;
        text-align: center;
        h1 {
          font: italic bold 35px Arial, sans-serif;
          color: grey;
        }
      }
      .sticker {
        padding: 10px;
        img {
          display: block;
          width: 100%;
          max-width: 400px;
          max-height: 350px;
          margin: 0 auto;
        }
      }
    }
    .b {
      flex-direction: column;
      justify-content: space-around;
      .heading {
        margin: 20px 0px;
        flex-direction: column;
        .logo {
          height: 6em;
          width: 6em;
        }
        .logoText {
          font-family: "Oleo Script", cursive;
          font-size: 35px;
        }
      }
      form {
        label {
          width: 90%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          border-bottom: 2px solid ${(props) => props.theme.color};
        }
        input {
          flex: 0.9;
          padding: 20px 0px;
        }
        button {
          display: block;
          margin: 0 auto;
          margin-top: 30px;
          width: 90%;
          text-align: center;
          font: italic bold 22px Arial, sans-serif;
          padding: 15px 20px;
          background-color: ${(props) => props.theme.kodecamp};
          border-radius: 20px;
          color: white;
        }
      }
    }
  }
  .google {
    justify-content: space-between;
    align-items: center;
    width: 15.5em;
    background-color: white;
    padding: 10px 10px;
    color: grey;
  }
  @media screen and (min-width: 768px) {
    .container {
      margin-top: 30px;
      flex-direction: row;
      padding-bottom: 0px;
      section {
        width: 50%;
      }
    }
  }
`;
