import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./shop.scss";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category-component";
import { getCategoriesAndDoc } from "../../utils/firebase/firebase-utils";
import { setCategoriesMap } from "../../Store/categories/category-action";

const Shop = () => {
  const dispacth = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDoc();
      dispacth(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};
export default Shop;
