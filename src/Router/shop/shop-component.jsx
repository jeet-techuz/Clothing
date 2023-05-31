import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import "./shop.scss";
import CategoriesPreview from "../categories-preview/categories-preview";
import Category from "../category/category-component";
import { getCategoriesAndDoc } from "../../utils/firebase/firebase-utils";
import { setCategories } from "../../Store/categories/category-action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDoc();
      dispatch(setCategories(categoriesArray));
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
