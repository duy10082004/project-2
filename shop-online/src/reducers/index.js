import { combineReducers } from "redux";
import cartReducer from "./cart";

const allReducers = combineReducers({
  cartReducer,
  // Viết thêm các reducer ở đây
});

export default allReducers;