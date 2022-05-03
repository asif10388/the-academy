import CategoryItem from "./CategoryItem";

const Directory = ({ categories }) => {
  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="flex flex-wrap -m-4">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
