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


export const fetchProductWithCategory = (param) => {
    console.log(param);
    const productParam = param;
    let url = "http://127.0.0.1:8000/api/search/" +productParam ; 
    console.log(productParam);

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

export const createProduct = (name, price,detail,category_id,user_id,image) => {

    return(dispatch)=> {
        axios.post('http://127.0.0.1:8000/api/products', {
            name,
            price,
            detail,
            user_id,
            category_id
            
        })
       .then(response => {
        const products = response.data
        dispatch(fetchProductSuccess(products))
       })
       .catch( error => {
        const errorMsg = error.message
        dispatch(fetchProductFailure(errorMsg))

       })


    }
}

