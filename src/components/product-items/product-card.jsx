import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../Store/cart/cart-action";
import { selectCartItmes } from "../../Store/cart/cart-selector";

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from "./product-card-style";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItmes);
  const dispatch = useDispatch();

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}>
        ADD TO CART
      </Button>
    </ProductCartContainer>
  );
};
export default ProductCard;
