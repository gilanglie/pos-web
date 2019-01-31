import { combineReducers } from 'redux'
import login from './login'
import products from './products'

const reducers = combineReducers({
  login,
  products
})


export default reducers