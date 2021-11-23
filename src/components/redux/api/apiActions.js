import axios from 'axios';

import { 
    FETCH_API_REQUEST,
    FETCH_API_SUCCESS,
    FETCH_API_FAILURE
} from './apiType.js';


export const fetchApiRequest = () => {

    return {

        type: FETCH_API_REQUEST


    }
}

export const fetchApiSuccess = users => {

    return {

        type: FETCH_API_SUCCESS,
        payload: users


    }
}

export const fetchApiFailure = error => {

    return {

        type: FETCH_API_FAILURE,
        payload: error


    }
}



export const fetchUsers = () => {

    return(dispatch)=> {

        dispatch(fetchApiRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
       .then(response => {

        const users = response.data
        dispatch(fetchApiSuccess(users))

       })
       .catch( error => {

        const errorMsg = error.message
        dispatch(fetchApiFailure(errorMsg))

       })


    }
}