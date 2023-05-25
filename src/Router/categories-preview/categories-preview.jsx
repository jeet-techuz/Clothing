import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories-context";
import CategoryPreview from "../../components/category-preview/category-preview";

const CategoriesPreview = () => {
  const { CategoriesMap } = useContext(CategoriesContext);

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
