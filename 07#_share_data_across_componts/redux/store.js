import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
import sumReducer from './reducers/sum'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

// export default createStore(sumReducer)  // the same with next lines.
const store = createStore(
    combineReducers({
        counter: sumReducer,
        allPersons: personReducer
    }), 
    applyMiddleware(thunk)
)

export default store