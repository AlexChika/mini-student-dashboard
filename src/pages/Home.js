import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
const Home = () => {
  useEffect(() => {
    document.title = "Light Academy";
  }, []);
  return (
    <>
      <Nav url={"/login"} link={"Login"} />
      <HomeWrapper className="f">
        <section className="a fcenter">
          <div className="content">
            <div className="headingCon">
              <h1>
                <span className="first">Learn</span> on your
              </h1>
              <h1>
                class <span className="second">schedule</span>
              </h1>
            </div>
            <p className="text mt30">
              Our greatest weakness lies in giving up. The most certain way to
              succeed is always to try just one more time. – Thomas A. Edison,
              inventor.
              <br /> <br />
              The difference between a stumbling block and a stepping stone is
              how high you raise your foot. - Benny Lewis, author
            </p>
            <div className="btnCon mt30">
              <p className="first">Contine to ...</p>
              <div className="f mt10">
                <Link to="/dashboard" className="falign first">
                  <span>Dashboard</span>
                  <img
                    src={require("../Assets/dashboardicon.png")}
                    alt="icon"
                  />
                </Link>
                <Link to="/dashboard/courses" className="falign second">
                  <span>Courses</span>
                  <img src={require("../Assets/courseicon.png")} alt="icon" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="b">
          <img src={require("../Assets/boysmall.png")} alt="background" />
          <article className="floatCon fwh falign">
            <div className="textCon textCon1 mb30">
              <span>Heart of Excellence</span>
              <span>Hard Work Pays</span>
              <span>Determination is a tool</span>
              <span>The Sacrifice Of a Winner</span>
            </div>
            <div className="textCon textCon2 mt30">
              <span>Consistency is Key</span>
              <span>education is power</span>
              <span>Knowledge isa virtue</span>
              <span>Procastination is a thief of time</span>
            </div>
          </article>
        </aside>
      </HomeWrapper>
    </>
  );
};

export default Home;
const HomeWrapper = styled.main`
  flex-direction: column;
  padding-top: 20px;
  box-shadow: 0px -1px 6px grey;
  background-color: #333351;
  color: white;
  .a {
    height: calc(100vh - 90px);
  }
  .b {
    height: calc(70vh);
  }
  .a {
    .content {
      height: max-content;
      min-width: 300px;
      max-width: 95%;
      margin: 0 auto;
      h1 {
        width: inherit;
        text-align: center;
        margin: 0 auto;
        font-size: 37px;
        line-height: 50px;
        letter-spacing: 5px;
      }
      .headingCon {
        border: 1px solid grey;
      }
      .text {
        width: inherit;
        font-size: 20px;
      }
      .btnCon {
        p {
          font-size: 20px;
          font-style: italic;
        }
        div {
          justify-content: space-between;
          a {
            justify-content: space-around;
            width: 47%;
            padding: 10px;
            border: 1px solid white;
            border-radius: 10px;
            background: #d9d9d9;
            margin-bottom: 20px;
            img {
              height: 3.5em;
            }
            span {
              font: italic bold 16px Arial, sans-serif;
            }
          }
        }
      }
    }
  }

  .b {
    position: relative;
    .floatCon {
      position: absolute;
      flex-direction: column;
      justify-content: center;
      top: 0;
      left: 0;
      overflow: hidden;
      .textCon {
        display: flex;
        justify-content: space-around;
        width: max-content;
      }
      .textCon1 span {
        animation: float 6s linear infinite alternate-reverse;
      }
      .textCon2 span {
        animation: float 6s linear infinite forwards;
      }
      span {
        position: relative;
        padding: 10px 20px;
        background: #d9d9d9;
        margin: 3px 3px;
        border-radius: 15px;
        text-align: center;
      }
      .textCon span:nth-of-type(n) {
        background: chocolate;
      }
      .textCon span:nth-of-type(2n) {
        background: teal;
      }
      @keyframes float {
        from {
          left: -50%;
        }
        to {
          left: 50%;
        }
      }
    }
    img {
      position: relative;
      animation: fade 6s linear infinite;
      width: 100%;
      height: 100%;
    }
    @keyframes fade {
      30% {
        opacity: 0;
      }
      60%,
      100% {
        opacity: 1;
      }
    }
  }
  @media screen and (min-width: 465px) {
    .a {
      .content {
        max-width: 85%;
      }
    }
    .b {
      width: 80%;
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 565px) {
    .a {
      .content {
        max-width: 85%;
        h1 {
          font-size: 50px;
          line-height: 60px;
        }
        .btnCon {
          div {
            a {
              span {
                font: italic bold 20px Arial, sans-serif;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 665px) {
    .a {
      .content {
        max-width: 80%;
        h1 {
          font-size: 60px;
          line-height: 65px;
        }
        .text {
          font-size: 25px;
        }

        .btnCon {
          p {
            font-size: 23px;
          }
          div {
            a {
              justify-content: space-around;
              width: 45%;
              img {
                height: 4.5em;
              }
              span {
                font: italic bold 25px Arial, sans-serif;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    .a,
    .b {
      height: calc(100vh - 85px);
    }
    .a {
      width: 60%;
      .content {
        max-width: 95%;
        h1 {
          font-size: 50px;
          line-height: 62px;
        }
        .text {
          font-size: 23px;
        }
        .btnCon {
          div {
            a {
              width: 47%;
              span {
                font: italic bold 20px Arial, sans-serif;
              }
            }
          }
        }
      }
    }
    .b {
      width: 40%;
    }
  }
  @media screen and (min-width: 1000px) {
    .a {
      .content {
        max-width: 85%;
        h1 {
          font-size: 70px;
        }
        .btnCon {
          div {
            a {
              width: 48%;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 1350px) {
    .a {
      .content {
        max-width: 70%;
        .btnCon {
          div {
            a {
              span {
                font: italic bold 25px Arial, sans-serif;
              }
            }
          }
        }
      }
    }
  }
`;
