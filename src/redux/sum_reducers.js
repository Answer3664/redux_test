

const initState = 0
export default function sumReducer(preState=initState, action){
    // console.log(preState, action)
    // if (preState === undefined) preState = 0
    const {type, data} = action
    switch (type) {
        case 'add':
            return preState + data
        case 'minus':
            return preState - data
        default:
            return preState
    }   
}