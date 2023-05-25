import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDoc } from "../utils/firebase/firebase-utils.jsx";

// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  CategoriesMap: {},
});
export const CategoriesProvider = ({ children }) => {
  const [CategoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDoc();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { CategoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
