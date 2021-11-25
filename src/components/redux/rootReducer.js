import { combineReducers } from "redux";
import apiReducer from "./api/apiReducer";
import productReducer from "./User/Product/productReducer";
import categoryReducer from "./Vendor/Category/categoryReducer";

const rootReducer = combineReducers({
    user: apiReducer,
    product: productReducer,
    category: categoryReducer
})

export default rootReducer