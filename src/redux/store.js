import {legacy_createStore as createStore} from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
import sumReducer from './sum_reducers'


// export default createStore(sumReducer)  // the same with next lines.
const store = createStore(
    sumReducer
)

export default store