## Conclusion

### `npm install redux-devtools-extension`
### Configure in store.js
`import { composeWithDevTools } from 'redux-devtools-extension'` <br>
`const store = createStore(combineReducers({counter: sumReducer,allPersons: personReducer}), composeWithDevTools(applyMiddleware(thunk)))`