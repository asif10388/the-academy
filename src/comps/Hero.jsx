import { useContext } from "react";

import { getCategoriesAndDocuments } from "../utils/firebase";

const Hero = () => {
  return (
    <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Choose what you learn,
          <br className="hidden lg:inline-block" />
          how you learn
        </h1>
        <p className="mb-8 leading-relaxed w-full md:w-3/4">The Academy helps you learn topics seamlessly whether you are a high school student, college student or job seeking indivual. Ace your dream career with confidence.</p>
        <div className="flex justify-center">
          <button onClick={getCategoriesAndDocuments} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
            View Courses
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d" />
      </div>
    </div>
  );
};

export default Hero;
