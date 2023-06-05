import { Fragment } from "react";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../Store/categories/category-selector";

import CategoryPreview from "../../components/category-preview/category-preview";
import Spinner from "../../components/spinner/spinner";

const CategoriesPreview = () => {
  const CategoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Fragment>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(CategoriesMap).map((title) => {
          const products = CategoriesMap[title];
          return (
            <CategoryPreview key={title} title={title} products={products} />
          );
        })
      )}

      <div className="product-container"></div>
    </Fragment>
  );
};
export default CategoriesPreview;
