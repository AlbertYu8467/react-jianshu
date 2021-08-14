import {DEL_ITEM,ADD_TODO_ITEM,CHANGE_INPUT_VALUE,INIT_LIST_ACTION} from './actionType';
 

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

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  // 模拟异步
    return (dispatch) => {
      setTimeout(() => {
        const data = [1,2,3]
        const action = initListAction(data);
        dispatch(action);
      },2000)
    }
}
