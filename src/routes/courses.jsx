import { Routes, Route } from "react-router-dom";
import CoursesPreview from "../comps/CoursesPreview";
import CoursesByCategory from "./coursesByCategory";

const Courses = () => {
  return (
    <Routes>
      <Route index element={<CoursesPreview />} />
      <Route path=":category" element={<CoursesByCategory />} />
    </Routes>
  );
};

export default Courses;
