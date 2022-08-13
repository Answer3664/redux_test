import { ADD_PERSON } from "../constant";
const initState = [{name: 'tom', age:'18', id:'001'}]
export default function personReducer(perState=initState, action){
    const {type, data} = action
    switch (type) {
        case ADD_PERSON:
            return [data, ...perState]
            // perState.unshift(data)  this is wrong
            // return perState
        default:
            return perState
    }
}