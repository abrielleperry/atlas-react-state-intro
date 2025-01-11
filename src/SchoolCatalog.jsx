import { useEffect, useState } from "react";

export default function SchoolCatalog() {
  // fetching json
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("/api/courses.json")
      .then((response) => response.json())
      .then((data) => setCourses(data));
  }, []);

  // filtering
  const [filter, setFilter] = useState("");
  const filteredCourses = courses.filter(
    (course) =>
      course.courseNumber.toLowerCase().startsWith(filter.toLowerCase()) ||
      course.courseName.toLowerCase().startsWith(filter.toLowerCase())
  );

  // sorting
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const handleSortingChange = (column) => {
    const sortOrder =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(sortOrder);
  };

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (!sortColumn) return 0;
    if (sortColumn === "trimester") {
      return (
        a.trimester.localeCompare(b.trimester) *
        (sortDirection === "desc" ? -1 : 1)
      );
    }
    if (sortColumn === "courseNumber") {
      return (
        a.courseNumber.localeCompare(b.courseNumber) *
        (sortDirection === "desc" ? -1 : 1)
      );
    }
    if (sortColumn === "courseName") {
      return (
        a.courseName.localeCompare(b.courseName) *
        (sortDirection === "desc" ? -1 : 1)
      );
    }
    if (sortColumn === "semesterCredits") {
      return (
        (a.semesterCredits - b.semesterCredits) *
        (sortDirection === "desc" ? -1 : 1)
      );
    }
    if (sortColumn === "totalClockHours") {
      return (
        (a.totalClockHours - b.totalClockHours) *
        (sortDirection === "desc" ? -1 : 1)
      );
    }
    return 0;
  });

  // pagination
  const PAGE_SIZE = 3;
  const [page, setPage] = useState(1);
  const currentPage = courses.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const hasMore = courses.length > page * PAGE_SIZE;
  const hasLess = page > 1;

  return (
    <div className="school-catalog">
      <h1>School Catalog</h1>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setFilter(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSortingChange("trimester")}>Trimester</th>
            <th onClick={() => handleSortingChange("courseNumber")}>
              Course Number
            </th>
            <th onClick={() => handleSortingChange("courseName")}>
              Courses Name
            </th>
            <th onClick={() => handleSortingChange("semesterCredits")}>
              Semester Credits
            </th>
            <th onClick={() => handleSortingChange("totalClockHours")}>
              Total Clock Hours
            </th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {currentPage.map((course) => (
            <tr key={course.courseNumber}>
              <td>{course.trimester}</td>
              <td>{course.courseNumber}</td>
              <td>{course.courseName}</td>
              <td>{course.semesterCredits}</td>
              <td>{course.totalClockHours}</td>
              <td>
                <button>Enroll</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button disabled={!hasLess} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <button disabled={!hasMore} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}
