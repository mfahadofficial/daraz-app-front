import { 
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './categoryType.js';

const intialState = {
    loading: false,
    Categories: [],
    error:  ''

}


export const categoryReducer = (state = intialState, action) => {
  


    switch(action.type){
        case FETCH_CATEGORY_REQUEST:
             return{
            ...state,
            loading: true,
        }
        case FETCH_CATEGORY_SUCCESS:
            return{
           ...state,
           loading: false,
           Categories: action.payload
       }
       case FETCH_CATEGORY_FAILURE:
        return{
       ...state,
       loading: false,
       Categories: [],
       error:  action.payload
   }
        default: return state

    }
}

export default categoryReducer;