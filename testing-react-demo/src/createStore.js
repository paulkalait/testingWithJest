import { createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'
import RootReducer from './reducers/index.js'

// * applying reduxThunk middleware 
export const middlewares = [ReduxThunk]; 
                                                        // * pass all middlewares which are in an array
export const createStoreWithMiddleWare = applyMiddleware(...middlewares)(createStore)

// * now the store has been applied middleware
export const store = createStoreWithMiddleWare(RootReducer)