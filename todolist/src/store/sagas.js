import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST} from './actionType';
import { initListAction } from './actionCreator';

function getData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [1,2,3]
      resolve(data)
    }, 2000)
  })
}

function* getInitList() {
  let data = yield getData();
  const action = initListAction(data);
  yield put(action);
}

// generator函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;