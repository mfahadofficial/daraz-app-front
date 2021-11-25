import axios from 'axios';

import { 
    FETCH_CATEGORY_REQUEST,
    FETCH_CATEGORY_SUCCESS,
    FETCH_CATEGORY_FAILURE
} from './categoryType.js';

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

    return(dispatch)=> {

        dispatch(fetchCategoryRequest)
        axios.get('http://127.0.0.1:8000/api/categories')
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

    return(dispatch)=> {

        dispatch(fetchCategoryRequest)
        axios.post('http://127.0.0.1:8000/api/categories', {
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