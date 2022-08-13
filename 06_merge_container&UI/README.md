## Conclusion

### Container components and UI components can be intergreated into one file.
### We can wrap the <APP/> with <Provider store={store}>, instead of <APP store={store}/>
### react-redux can detect the change of state automaticlly by contrainer. (store.subscribe())
### connet(a, b) where b can be shorthand as an object
### How many steps by using redux?
1. Define the UI components
2. Introduce a connect and export it: `connect(state => ({key: value}), {key, xxxAction})(UI components)` (this.state is the one that reducers use)
3. We can use this.props.xxx in UI components to read state and actions.