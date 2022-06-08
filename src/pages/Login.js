import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
const Login = () => {
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
            <form>
              <div className="formControl">
                <label htmlFor="email">
                  <input
                    placeholder="Enter a correct email"
                    type="email"
                    name=""
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
                    placeholder="Please enter correct email"
                    type="text"
                    name=""
                    id="passsword"
                  />
                  <span>
                    <img src={require("../Assets/key.png")} alt=" key icon" />
                  </span>
                </label>
              </div>
              <div className="formControl">
                <button className="mt30" type="submit">
                  Login
                </button>
              </div>
            </form>
          </section>
        </div>
        <span style={{ color: "grey", fontSize: "20px" }} className="mt30">
          Or
        </span>
        <div className="google mt30 mb30 f">
          <button>Continue with Google</button>
          <img src={require("../Assets/google.png")} alt=" google icon" />
        </div>
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
    width: 15em;
    background-color: white;
    padding: 10px 20px;
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
/* border: 2px solid white; */
// font: italic bold 18px Arial, sans-serif;

/* border: 2px solid red; */
/* background: url(${require("../Assets/boysmall.png")});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center -100px; */
