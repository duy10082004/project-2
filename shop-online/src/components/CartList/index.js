import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import "./CartList.scss";
import { deleteAll } from "../../actions/cart";

function CartList() {
  const cart = useSelector(state => state.cartReducer);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => {
    const priceNew = (item.info.price * ((100 - item.info.discountPercentage)/100)).toFixed(0);
    return sum + priceNew*item.quantity;
  }, 0);

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  }

  return (
    <>
      {cart.length > 0 ? (
        <>
          <button onClick={handleDeleteAll}>Xóa tất cả</button>
          <div className="cart__list">
            {cart.map(item => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="cart__total">
            Tổng tiền: {total}$
          </div>
        </>
      ) : (
        <>
          Giỏ hàng trống.
        </>
      )}
    </>
  )
}

export default CartList;