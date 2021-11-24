import axios from 'axios';

import { 
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE
} from './productType.js';


export const fetchProductRequest = () => {

    return {

        type: FETCH_PRODUCT_REQUEST


    }
}

export const fetchProductSuccess = Products => {

    return {

        type: FETCH_PRODUCT_SUCCESS,
        payload: Products


    }
}

export const fetchProductFailure = error => {

    return {

        type: FETCH_PRODUCT_FAILURE,
        payload: error


    }
}



export const fetchProducts = () => {

    return(dispatch)=> {

        dispatch(fetchProductRequest)
        axios.get('http://127.0.0.1:8000/api/products')
       .then(response => {

        const Products = response.data
        dispatch(fetchProductSuccess(Products))

       })
       .catch( error => {

        const errorMsg = error.message
        dispatch(fetchProductFailure(errorMsg))

       })


    }
}




export const fetchSingleProduct = (id) => {
    console.log(id);
    const productId = id;
    let url = "http://127.0.0.1:8000/api/products/" +productId ; 
    console.log(productId);

    return(dispatch)=> {

        dispatch(fetchProductRequest)
        axios.get(url)
       .then(response => {

        const Product = response.data
        dispatch(fetchProductSuccess(Product))

       })
       .catch( error => {

        const errorMsg = error.message
        dispatch(fetchProductFailure(errorMsg))

       })


    }
}

export const fetchProductWithCategory = (id) => {
    console.log(id);
    const categoryId = id;
    let url = "http://127.0.0.1:8000/api/search/" +categoryId ; 
    console.log(categoryId);

    return(dispatch)=> {

        dispatch(fetchProductRequest)
        axios.get(url)
       .then(response => {

        const Product = response.data
        dispatch(fetchProductSuccess(Product))

       })
       .catch( error => {

        const errorMsg = error.message
        dispatch(fetchProductFailure(errorMsg))

       })


    }
}

