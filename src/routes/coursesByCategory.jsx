import { useContext, Fragment, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../state/contexts/coursesContext";
import CourseItem from "../comps/CourseItem";

const CoursesByCategory = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();
  const [courses, setCourses] = useState(categories[category]);
  useEffect(() => {
    setCourses(categories[category]);
  }, [category, categories]);
  return (
    <div className="container px-5 py-12 mx-auto">
      <Fragment key={category}>
        <h1 class="inline-block sm:text-3xl text-2xl font-bold my-4 text-white bg-green-600">{category.toUpperCase()}</h1>
        <div className="flex flex-wrap -m-4">{courses && courses.map((course) => <CourseItem key={course.id} course={course} />)}</div>
      </Fragment>
    </div>
  );
};

export default CoursesByCategory;
