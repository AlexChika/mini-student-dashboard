import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { course } from "../utils/utils";
const Courses = () => {
  let array = [1, 2, 3, 4, 5];
  useEffect(() => {
    document.title = "Courses | Light Academy";
  }, []);
  return (
    <CoursesWrapper>
      <section className="content">
        <h1 className="heading">Your Courses</h1>
        <div className="courses">
          {course.map((course) => {
            const { name, id, img } = course;
            return (
              <Link
                to={`/dashboard/courses/${name}+${id}`}
                className="subjects fcenter"
                key={id}
              >
                <div>
                  <h1 className="mb20">{name}</h1>
                  <span className="fcenter">
                    <img src={img} alt={name} />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </CoursesWrapper>
  );
};

export default Courses;
const CoursesWrapper = styled.main`
  display: grid;
  height: 100%;
  place-items: center;
  margin: 0 auto;
  color: ${(props) => props.theme.color};
  .content {
    .heading {
      font-size: 40px;
      color: white;
      text-align: center;
    }
    display: grid;
    place-items: center;
    gap: 2em;
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
  .courses {
    width: 100%;
    max-width: 1024px;
    display: grid;
    grid-template-columns: repeat(1fr);
    grid-auto-rows: 30vh;
    gap: 2em;
  }
  .subjects {
    h1 {
      font-size: 30px;
      color: white;
      text-shadow: 1px 1px 3px grey;
    }
    span {
      padding: 10px;
      border: 2px solid white;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin: 0 auto;
    }
    border-radius: 20px;
    width: 100%;
    text-align: center;
  }
  .subjects:nth-of-type(1) {
    background-color: #ff826c;
  }
  .subjects:nth-of-type(2) {
    background-color: skyblue;
  }
  .subjects:nth-of-type(3) {
    background-color: #ffffa6;
  }
  .subjects:nth-of-type(4) {
    background-color: #a6a6ff;
  }
  .subjects:nth-of-type(5) {
    background-color: #8cc68c;
  }

  @media screen and (min-width: 546px) {
    .courses {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 30vh;
      place-content: center;
      grid-template-areas:
        "one one two two"
        "three three four four"
        "five five five five";
    }
    .subjects:nth-of-type(1) {
      grid-area: one;
    }
    .subjects:nth-of-type(2) {
      grid-area: two;
    }
    .subjects:nth-of-type(3) {
      grid-area: three;
    }
    .subjects:nth-of-type(4) {
      grid-area: four;
    }
    .subjects:nth-of-type(5) {
      grid-area: five;
    }
  }
  @media screen and (min-width: 768px) {
    width: 95%;
  }
  @media screen and (min-width: 1000px) {
    .courses {
      grid-template-columns: repeat(6, 1fr);
      grid-template-areas:
        "one one two two three three"
        "four four four five five five";
      grid-auto-rows: 30vh;
      gap: 2em;
    }
  }
`;
