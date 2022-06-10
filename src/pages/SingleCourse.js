import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
const SingleCourse = () => {
  const { param } = useParams();
  const id = param.split("+")[1];
  return (
    <SingleCourseWrapper>
      welcome to single course
      <h1>Hell from {id}</h1>
    </SingleCourseWrapper>
  );
};

export default SingleCourse;
const SingleCourseWrapper = styled.main``;
