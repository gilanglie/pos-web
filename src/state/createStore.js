import { createStore as reduxCreateStore } from "redux"
import reducers from './reducers'

const createStore = () => reduxCreateStore(reducers)
export default createStore