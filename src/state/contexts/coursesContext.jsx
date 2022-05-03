import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../../utils/firebase";

export const CategoriesContext = createContext({
  categories: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategories(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const value = { categories };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
