import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getCourse } from "../utils/utils";
const SingleCourse = () => {
  const { param } = useParams();
  const id = param.split("+")[1];
  const subject = getCourse(Number(id));
  console.log(subject);
  return (
    <SingleCourseWrapper>
      <section className="body">
        <div className="heading falign">
          <h1>{subject.name}</h1>
          <img src={subject.img} alt={subject.name} />
        </div>
        <section className="content f">
          <div className="a">
            <h2 className="font heading">Description</h2>
            <div className="desc">
              <p>{subject.details.intro}</p>
            </div>
          </div>
          <div className="b">
            <h2 className="font heading">Branches</h2>
            <div className="branches">
              {subject.details.branches.map((branch, index) => {
                return <h1 key={index}>{branch}</h1>;
              })}
            </div>
          </div>
        </section>
        <div className="footer font">
          <p>COURSE ID {id}</p>
          <button className="mt30 mb30">Enroll Now </button>
        </div>
      </section>
    </SingleCourseWrapper>
  );
};

export default SingleCourse;
const SingleCourseWrapper = styled.main`
  display: grid;
  height: 100%;
  place-items: center;
  margin: 0 auto;
  color: white;
  .heading {
    justify-content: space-around;
    text-align: center;
    padding: 20px;
    h1 {
      font-size: 40px;
      font-family: "Oleo Script", cursive;
    }
  }
  .font {
    text-align: center;
    font: italic bold 22px Arial, sans-serif;
  }
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
  .content {
    flex-direction: column;
    .a {
      padding: 10px;
      .desc p {
        text-align: center;
        padding: 10px;
        line-height: 30px;
        letter-spacing: 3.5px;
        margin: 0 auto;
        font-style: italic;
        font-size: 14px;
      }
    }
    .b {
      .branches {
        max-width: 700px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      .branches h1 {
        min-width: 10rem;
        color: teal;
        background: ${(props) => props.theme.bg};
        border: 1px solid white;
        padding: 15px;
        margin-bottom: 30px;
        width: max-content;
      }
    }
    .a,
    .b {
      .heading {
        text-decoration: underline;
        margin-bottom: 30px;
      }
    }
  }
  .footer button {
    background-color: skyblue;
    border-radius: 25px;
    width: 300px;
    padding: 15px 20px;
  }
  @media screen and (min-width: 768px) {
    width: 95%;
    .content {
      .a {
        .desc p {
          font-size: 18px;
          line-height: 50px;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .content {
      flex-direction: row;
      .a,
      .b {
        width: 50%;
      }
    }
  }
`;
