import { Fragment } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../Store/categories/category-selector";

import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const CategoriesMap = useSelector(selectCategoriesMap);
  return (
    <Fragment>
      {Object.keys(CategoriesMap).map((title) => {
        const products = CategoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}

      <div className="product-container"></div>
    </Fragment>
  );
};
export default CategoriesPreview;
