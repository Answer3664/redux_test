import {ADD, MINUS} from './constant'
export const createAddAction = data => ({type:ADD, data})
export const createMinusAction = data => ({type:MINUS, data})
