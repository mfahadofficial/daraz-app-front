import axios from 'axios';
import { BASE_URL, BASE_URL_LIVE } from '../../../common/constants.js';

import { 
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './categoryType.js';

const baseURL = BASE_URL_LIVE;

export const fetchCategoryRequest = () => {

    return {

        type: FETCH_CATEGORY_REQUEST


    }
}

export const fetchCategorySuccess = Categories => {

    return {

        type: FETCH_CATEGORY_SUCCESS,
        payload: Categories


    }
}

export const fetchCategoryFailure = error => {

    return {

        type: FETCH_CATEGORY_FAILURE,
        payload: error


    }
}



export const fetchCategories = () => {
     
    let url = baseURL+"/categories"; 

    return(dispatch)=> {

        dispatch(fetchCategoryRequest)
        axios.get(url)
       .then(response => {

        const Categories = response.data
        dispatch(fetchCategorySuccess(Categories))

       })
       .catch( error => {

        const errorMsg = error.message
        dispatch(fetchCategoryFailure(errorMsg))

       })


    }
}



export const createCategory = (categoryType) => {
    // let url = baseURL+"categories/"+productId;
    let url = baseURL+"/categories/";

    return(dispatch)=> {

        dispatch(fetchCategoryRequest)
        axios.post(url, {
            categoryType
            
        })
       .then(response => {
        const Categories = response.data
        dispatch(fetchCategorySuccess(Categories))
       })
       .catch( error => {
        const errorMsg = error.message
        dispatch(fetchCategoryFailure(errorMsg))

       })


    }
}