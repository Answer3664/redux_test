## The async version of sum project

1. In store.dispatch(x), if x is not a object, it is a function, this can be called as async action.
2. When create a store in store.js, you need to pass a middleware to transform function to object, in order to do that, you need to install a particular package: <br> `npm install redux-thunk`<br>Then, you need to introduce it: <br>
`
import thunk from 'redux-thunk'
`
<br>After that, the store can be implemented as below: <br>
`
const store = createStore(
    sumReducer, applyMiddleware(thunk)
)
`<br>
Also, you need to introduce `applyMiddleware` in redux, such as <br>
`
import {legacy_createStore as createStore, applyMiddleware} from 'redux'
`
<br>
3. Async can be applied to the scenario that depends on your demand.