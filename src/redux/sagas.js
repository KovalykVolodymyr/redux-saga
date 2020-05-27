import {takeEvery,put,call} from 'redux-saga/effects'
import { REQUEST_POSTS, FETCH_POSTS } from './types'
import { showLoader, hideLoader, showAlert, hideAlert } from './action'



export function* sagaWatcher() {
 yield takeEvery(REQUEST_POSTS,sagaWorker)
}

function* sagaWorker() {

  try {
    yield put(showLoader())
    const payload = yield call(fetchPosts)
    yield put({
      type: FETCH_POSTS,
      payload
    })
    yield put(hideLoader())
  } catch (e) {
    yield put (showAlert('Somthing was wrong'))    
    yield put(hideAlert())
  }

}

async function fetchPosts(){
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  return await response.json()
}