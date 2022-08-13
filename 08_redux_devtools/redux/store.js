import {legacy_createStore as createStore, applyMiddleware, combineReducers} from 'redux'
// import {configureStore} from '@reduxjs/toolkit'
import sumReducer from './reducers/sum'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
// export default createStore(sumReducer)  // the same with next lines.
const store = createStore(
    combineReducers({
        counter: sumReducer,
        allPersons: personReducer
    }), 
    composeWithDevTools(applyMiddleware(thunk))
)

// applyMiddleware(thunk) be used to async action

export default store