/* personal notes:
im going to think of context like a shared box that stores info all component have access to.
*/
import SchoolCatalog from "./SchoolCatalog";
import Header from "./Header";
import ClassSchedule from "./ClassSchedule";
import React from "react";

export default function App() {
  return (
    <div>
      <Context.Provider>
        <Header />
        <SchoolCatalog />
        <ClassSchedule />
      </Context.Provider>
    </div>
  );
}
