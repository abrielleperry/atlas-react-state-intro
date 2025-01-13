import logo from "./assets/logo.png";
import React, { useContext } from "react";
import { CourseContext } from "./App";

export default function Header() {
  const { storeEnrolledCourses } = useContext(CourseContext);
  return (
    <div className="header">
      <img src={logo} alt="logo" className="logo" />
      <div className="enrollment">Classes Enrolled: {}</div>
    </div>
  );
}
