import {DEL_ITEM,ADD_TODO_ITEM,CHANGE_INPUT_VALUE} from './actionType';
 

export const getInputChangeAction = value => ({
  type:CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type:ADD_TODO_ITEM,
})

export const getDelItemAction = index => ({
  type:DEL_ITEM,
  index
})