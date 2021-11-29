import axios from 'axios';
import { BASE_URL, BASE_URL_LIVE } from '../../../common/constants.js';
import { getToken } from '../../../common/authCheck.js';

import { 
    FETCH_PRODUCT_REQUEST,
    FETCH_PRODUCT_SUCCESS,
    FETCH_PRODUCT_FAILURE,
    FETCH_SINGLE_PRODUCT_SUCCESS,
    FETCH_VENDOR_PRODUCT_SUCCESS
} from './productType.js';

const baseURL = BASE_URL_LIVE;


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

export const fetchSingleProductSuccess = product => {

    return {

        type: FETCH_SINGLE_PRODUCT_SUCCESS,
        payload: product


    }
}


export const fetchVendorProductSuccess = product => {

    return {

        type: FETCH_VENDOR_PRODUCT_SUCCESS,
        payload: product


    }
}



export const fetchProductFailure = error => {

    return {

        type: FETCH_PRODUCT_FAILURE,
        payload: error


    }
}



export const fetchProducts = () => {

    let url = baseURL+"/products"; 

    return(dispatch)=> {

        dispatch(fetchProductRequest)
        axios.get(url)
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
    let url = baseURL+"/products/"+productId; 
    console.log(productId);

    return(dispatch)=> {

        dispatch(fetchProductRequest)
        axios.get(url)
       .then(response => {

        const product = response.data
        dispatch(fetchSingleProductSuccess(product))

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
    let url = baseURL+"/search/"+productParam; 
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


export const fetchVendorProducts = () => {
    
    let url = 'http://127.0.0.1:8000/api/vendorProducts'; 


    const tokenObj = getToken();
	const token = tokenObj.userToken.data.token;
    console.log(token);

    const AuthStr = 'Bearer '.concat(token); 
    console.log(AuthStr);

    return(dispatch)=> {

        dispatch(fetchProductRequest)
         axios.get(url,{ headers: { Authorization: AuthStr } })
       .then(response => {
           console.log('then');

        const Product = response.data
        dispatch(fetchProductSuccess(Product))
        // console.log(fetchVendorProductSuccess(Product));
       })
       .catch( error => {

        console.log('catch');


        const errorMsg = error.message
        dispatch(fetchProductFailure(errorMsg))
        console.log(fetchProductFailure(errorMsg));

       })


    }
}



export const createProduct = (name, price,detail,category_id,user_id,image) => {
    let url = baseURL+"/products"

    return(dispatch)=> {
        axios.post(url, {
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
 


    }
}




