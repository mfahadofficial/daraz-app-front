import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import  rootReducer from './rootReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


console.log(rootReducer, 'test');
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware( thunk)))

export default store