import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../Store/categories/category-selector";

import ProductCard from "../../components/product-items/product-card";

import "./category.scss";

const Category = () => {
  const { category } = useParams();
  const CategoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(CategoriesMap[category]);
  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);
  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};
export default Category;
