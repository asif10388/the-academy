import Directory from "../comps/Directory";
import Hero from "../comps/Hero";
import categories from "../data/categories.json";

const Home = () => {
  return (
    <>
      <Hero />
      <Directory categories={categories} />
    </>
  );
};

export default Home;
