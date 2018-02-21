import { delay } from 'redux-saga'
import { put, takeEvery } from 'redux-saga/effects'

function* incrementAsync() {
  yield delay(1000)
  yield put({ type: 'INCREMENT' })
}

function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

function* helloSaga() {
  console.log('hello sagas!')
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()])
}
