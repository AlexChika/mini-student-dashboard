import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Form from "../components/Form";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../utils/Context";
import { statusText, isUser } from "../utils/utils";
const Login = () => {
  const navigate = useNavigate();
  const { dispatch, signup, login, googleSignin, getUser } = GlobalContext();
  const [userDetails, setUserDetails] = useState({ email: "", password: "" });
  const [signupLogin, setSignupLogin] = useState(true);
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState({
    text1: "",
    text2: "",
    loading: false,
  });
  const signupOrLoginPage = () => {
    setSignupLogin(!signupLogin);
  };
  const handleLoginDetails = async (e) => {
    console.log("Clicked");
    e.preventDefault();
    if (!userDetails.email || !userDetails.password) {
      setStatus({
        text1: statusText.nodetails1,
        text2: "",
        loading: false,
      });
      setModal(true);
      return;
    }
    if (signupLogin) {
      setStatus({
        text1: "Creating Account",
        text2: "Please Wait",
        loading: true,
      });
      setModal(true);
      try {
        const response = await signup(userDetails.email, userDetails.password);
        const user = response.user;
        console.log(user);
        setStatus({
          text1: statusText.created1,
          text2: statusText.created2,
          loading: false,
        });
        setModal(true);
        setSignupLogin(false);
      } catch (error) {
        setStatus({
          text1: error.message,
          text2: "Please Try Again",
          loading: false,
        });
        setModal(true);
      }
      return setUserDetails({ email: "", password: "" });
    } else {
      console.log("from sign In");
      setStatus({
        text1: "Signing In",
        text2: "Please Wait",
        loading: true,
      });
      setModal(true);
      try {
        const response = await login(userDetails.email, userDetails.password);
        const user = response.user;
        console.log(user);
        const { success } = await isUser(user.email, getUser, dispatch);
        if (success) {
          navigate("/dashboard");
          setStatus({
            text1: "",
            text2: "",
            loading: false,
          });
        } else {
          throw new Error("Could not reach database");
        }
      } catch (error) {
        setStatus({
          text1: error.message,
          text2: "Please Try Again",
          loading: false,
        });
        setModal(true);
      }
      return setUserDetails({ email: "", password: "" });
    }
  };
  const loginHandler = async () => {
    setStatus({
      text1: "One Moment Please",
      text2: "...",
      loading: true,
    });
    setModal(true);
    try {
      const response = await googleSignin();
      const user = response.user;
      const { success } = await isUser(user.email, getUser, dispatch);
      if (success) {
        setStatus({
          text1: "",
          text2: "",
          loading: false,
        });
        setModal(false);
        navigate("/dashboard");
      } else {
        throw new Error("Could not reach database");
      }
    } catch (error) {
      setStatus({
        text1: error.message,
        text2: "Please Try Again",
        loading: false,
      });
      setModal(true);
    }
    return;
  };
  useEffect(() => {
    document.title = "Login | Light Academy";
  }, []);

  return (
    <>
      <Nav url={"/"} link={"Home"} />
      <Modal modal={modal} setModal={setModal}>
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1 className="mb10">{status.text1}</h1>
          <h2>{status.text2}</h2>
        </div>
      </Modal>
      <LoginWrapper className="fcenter">
        <div className="container f">
          <section className="a f">
            <div className="heading">
              <h1>Student {signupLogin ? "Sign Up" : "Login"}</h1>
              <p>
                {signupLogin
                  ? "Create a free account quickly"
                  : "Login to continue to your account"}
              </p>
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
            {/* Form */}
            <Form
              handleLoginDetails={handleLoginDetails}
              loading={status.loading}
              userDetails={userDetails}
              setUserDetails={setUserDetails}
              signupOrLoginPage={signupOrLoginPage}
              type={signupLogin ? "SignUp" : "Login"}
              alternative={
                signupLogin
                  ? "Click here to LOGIN instead"
                  : "Click here to SignUp instead"
              }
            />
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
        a {
          cursor: pointer;
          display: block;
          padding: 10px;
          color: teal;
          text-align: center;
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
