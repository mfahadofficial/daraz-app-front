import { combineReducers } from "redux";
import apiReducer from "./api/apiReducer";
import productReducer from "./User/Product/productReducer";

const rootReducer = combineReducers({
    user: apiReducer,
    product: productReducer
})

export default rootReducer