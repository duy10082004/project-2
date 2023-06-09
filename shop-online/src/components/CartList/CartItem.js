import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../../actions/cart";
import { useRef } from "react";

function CartItem(props) {
  const { item } = props;
  const dispatch = useDispatch();
  const inputRef = useRef();

  const priceNew = (item.info.price * ((100 - item.info.discountPercentage)/100)).toFixed(0);

  const handleDelete = () => {
    dispatch(deleteItem(item.id));
  }

  const handleDown = () => {
    if(item.quantity > 1) {
      dispatch(updateItem(item.id, -1));
      inputRef.current.value = parseInt(inputRef.current.value) - 1;
    }
  }

  const handleUp = () => {
    dispatch(updateItem(item.id, 1));
    inputRef.current.value = parseInt(inputRef.current.value) + 1;
  }

  return (
    <>
      <div className="cart__item">
        <div className="cart__image">
          <img src={item.info.thumbnail} alt={item.info.title} />
        </div>
        <div className="cart__content">
          <h3 className="cart__title">
            {item.info.title}
          </h3>
          <div className="cart__price-new">
            {priceNew}$
          </div>
          <div className="cart__price-old">
            {item.info.price}$
          </div>
        </div>
        <div className="cart__quantity">
          <span onClick={handleDown}>-</span>
          <input ref={inputRef} defaultValue={item.quantity} />
          <span onClick={handleUp}>+</span>
        </div>
        <div className="cart__delete" onClick={handleDelete}>
          Xóa
        </div>
      </div>
    </>
  )
}

export default CartItem;