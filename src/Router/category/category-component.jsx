import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../Store/categories/category-selector";

import ProductCard from "../../components/product-items/product-card";

import { CategoryContainer, Title } from "./category-style";
import Spinner from "../../components/spinner/spinner";

const Category = () => {
  const { category } = useParams();
  const CategoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  const [products, setProducts] = useState(CategoriesMap[category]);

  useEffect(() => {
    setProducts(CategoriesMap[category]);
  }, [category, CategoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryContainer>
      )}
    </Fragment>
  );
};
export default Category;
