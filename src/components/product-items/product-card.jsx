import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Store/cart/cart-action";
import { selectCartItmes } from "../../Store/cart/cart-selector";

import "./product.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItmes);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </div>
  );
};
export default ProductCard;
