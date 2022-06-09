import React, { useEffect } from "react";
const Courses = () => {
  useEffect(() => {
    document.title = "Courses | Light Academy";
  }, []);
  return (
    <div>
      <h1>Hello from courses</h1>
    </div>
  );
};

export default Courses;
