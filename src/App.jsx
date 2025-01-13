/* personal notes:
im going to think of context like a shared box that stores info all component have access to.
CourseContext is passing data through compoent tree.
useState hook to create state var storeEnrolledCourses initialized as empty array.
useState returns func updateEnrolledCourses that updates state.
addCourse func adds new course to storeEnrolledCourses array by using updateEnrolledCourses.
updateEnrolledCourses func updates state by creating new array by spreading prev one and adding on new course to end of it.
dropCourse func removes a course from storeEnrolledCourses array by filtering out course based on courseNumber.
CourseContext.Provider tag wraps child comps Header, SchoolCatalog, and ClassSchedule which makes
- the state storeEnrolledCourses and funcs addCourse and dropCourse avilable to all child comps throguh CourseContext.


CourseContext = context created by createContext
storeEnrolledCourses = state managed using useState
addCourse and dropCourse = funcs to update the state
CourseContext.Provider = shares data w entire app
*/
import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import React, { createContext, useState } from "react";

export const CourseContext = createContext();

export default function App() {
  const [storeEnrolledCourses, updateEnrolledCourses] = useState([]);
  const addCourse = (course) => {
    updateEnrolledCourses((prev) => [...prev, course]);
  };

  const dropCourse = (courseNumber) => {
    updateEnrolledCourses((prev) =>
      prev.filter((course) => course.courseNumber !== courseNumber)
    );
  };

  return (
    <div>
      <CourseContext.Provider
        value={{ storeEnrolledCourses, addCourse, dropCourse }}
      >
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </CourseContext.Provider>
    </div>
  );
}
