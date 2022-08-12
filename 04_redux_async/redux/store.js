import {legacy_createStore as createStore, applyMiddleware} from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
import sumReducer from './sum_reducers'
import thunk from 'redux-thunk'

// export default createStore(sumReducer)  // the same with next lines.
const store = createStore(
    sumReducer, applyMiddleware(thunk)
)

export default store