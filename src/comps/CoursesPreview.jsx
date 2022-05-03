import { Link } from "react-router-dom";

import { useContext, Fragment } from "react";
import { CategoriesContext } from "../state/contexts/coursesContext";
import CourseItem from "./CourseItem";

const CoursesPreview = () => {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="container px-5 py-12 mx-auto">
      {Object.keys(categories).map((title) => (
        <Fragment key={title}>
          <h1 className="cursor-pointer inline-block sm:text-3xl text-2xl font-bold my-4 text-white bg-green-600">
            <Link to={title}>{title.toUpperCase()}</Link>
          </h1>
          <div className="flex flex-wrap -m-4">
            {categories[title].slice(0, 3).map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default CoursesPreview;
