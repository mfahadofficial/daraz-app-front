import { 
    FETCH_API_REQUEST,
    FETCH_API_SUCCESS,
    FETCH_API_FAILURE
} from './apiType.js';

const intialState = {
    loading: false,
    users: [],
    error:  ''

}

export const apiReducer = (state = intialState, action) => {
  


    switch(action.type){
        case FETCH_API_REQUEST:
             return{
            ...state,
            loading: true,
        }
        case FETCH_API_SUCCESS:
            return{
           ...state,
           loading: false,
           users: action.payload
       }
       case FETCH_API_FAILURE:
        return{
       ...state,
       loading: false,
       users: [],
       error:  action.payload
   }
        default: return state

    }
}

export default apiReducer;