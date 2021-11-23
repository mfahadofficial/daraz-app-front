
import { 
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './productType.js';

const intialState = {
    loading: false,
    Products: [],
    error:  ''

}

export const productReducer = (state = intialState, action) => {
  


    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
             return{
            ...state,
            loading: true,
        }
        case FETCH_PRODUCT_SUCCESS:
            return{
           ...state,
           loading: false,
           Products: action.payload
       }
       case FETCH_PRODUCT_FAILURE:
        return{
       ...state,
       loading: false,
       Products: [],
       error:  action.payload
   }
        default: return state

    }
}

export default productReducer;