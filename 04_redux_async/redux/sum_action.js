import {ADD, MINUS} from './constant'
// import store from './store'
// Sync action: return a object
export const createAddAction = data => ({type:ADD, data})
export const createMinusAction = data => ({type:MINUS, data})

// Async action: return a function, because the function can setup a async task.
export const createAddAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(createAddAction(data))
        }, time)
    }
}