
import { 
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_VENDOR_PRODUCT_SUCCESS
} from './productType.js';

const intialState = {
    loading: false,
    Products: [],
    error:  '',
    Product: [],
    vendorProducts: []

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

       case FETCH_SINGLE_PRODUCT_SUCCESS:
        return{
       ...state,
       loading: false,
       Product: action.payload
   }

   case FETCH_VENDOR_PRODUCT_SUCCESS:
    return{
     ...state,
     loading: false,
     vendorProducts: [],
     error:  action.payload

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