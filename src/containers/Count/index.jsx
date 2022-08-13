import {connect} from 'react-redux'
import { createAddAction, createMinusAction, createAddAsyncAction } from '../../redux/sum_action'
import CountUI from '../../components/Count'
export default connect(
    state => ({count: state}),
    {
        add: createAddAction,
        minus: createMinusAction,
        async: createAddAsyncAction
    }
)(CountUI)