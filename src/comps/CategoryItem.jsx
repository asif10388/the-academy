import { useNavigate } from "react-router-dom";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <div className="cursor-pointer xl:w-1/4 md:w-1/2" onClick={onNavigateHandler}>
      <div className="bg-gray-100 p-3 rounded-lg">
        <img className="h-40 rounded w-full object-cover object-center mb-2" src={imageUrl} alt="content" />
        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
      </div>
    </div>
  );
};

export default CategoryItem;
