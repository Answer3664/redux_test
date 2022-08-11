import {ADD, MINUS} from "./constant"

const initState = 0
export default function sumReducer(preState=initState, action){
    // console.log(preState, action)
    // if (preState === undefined) preState = 0
    const {type, data} = action
    switch (type) {
        case ADD:
            return preState + data
        case MINUS:
            return preState - data
        default:
            return preState
    }   
}