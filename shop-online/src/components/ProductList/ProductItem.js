import { useDispatch, useSelector } from "react-redux";
import { addItem, updateItem } from "../../actions/cart";

function ProductItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer);

  const priceNew = (item.price * ((100 - item.discountPercentage)/100)).toFixed(0);

  const handleAddToCart = () => {
    if(cart.some(itemCart => itemCart.id === item.id)) {
      dispatch(updateItem(item.id, 1));
    } else {
      dispatch(addItem(item.id, item));
    }
  }

  return (
    <>
      <div className="product__item">
        <div className="product__box">
          <div className="product__image">
            <img src={item.thumbnail} alt={item.title} />
          </div>
          <div className="product__content">
            <h3 className="product__title">
              {item.title}
            </h3>
            <div className="product__price-new">
              {priceNew}$
            </div>
            <div className="product__price-old">
              {item.price}$
            </div>
            <div className="product__percent">
              {item.discountPercentage}%
            </div>
            <button onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductItem;