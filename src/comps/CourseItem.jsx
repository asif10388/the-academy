import { useContext } from "react";

import { CartContext } from "../state/contexts/cartContext";

const CourseItem = ({ course }) => {
  const { addItemsToCart } = useContext(CartContext);

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
        <div className="p-3">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{course.tags}</h2>
          <h2 className="tracking-widest text-sm title-font font-medium text-gray-500 mb-1">{course.instructor}</h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{course.title}</h1>
          <p className="leading-relaxed mb-3">{course.description}</p>
          <div className="flex items-center flex-wrap ">
            <button onClick={() => addItemsToCart(course)} className="px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded inline-flex items-center md:mb-2 lg:mb-0">
              Add to Cart
            </button>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">{course.rating}</span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">{course.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
