import React from "react";
import styled from "styled-components";

const DashboardIndex = () => {
  return (
    <DashboardIndexWrapper>
      <section className="content f">
        <div className="a">
          <div>
            <h1>Welcome Back</h1>
            <h2>Alex Chika</h2>
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
      }
      h2 {
        font-size: 30px;
      }
    }
    .a,
    .b {
      height: 45vh;
      width: 100%;
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
/* border: 2px solid white; 
  color: ${(props) => props.theme.color};



*/
// ${(props) => props.theme.kodecamp}
// font: italic bold 18px Arial, sans-serif;

/* border: 2px solid red; */
/* background: url(${require("../Assets/boysmall.png")});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center -100px; */
