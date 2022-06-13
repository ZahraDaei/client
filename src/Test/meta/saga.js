import { put, takeEvery,call } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...


async function  get(){
    let response = await fetch('https://localhost:44315/WeatherForecast/');  

    if (response.status === 200) {
        return await response.text();
        // handle data
    }
}
// Our worker Saga: will perform the async increment task
export function* getMessageAsync() {
 var result= yield call(get);
  yield put({ type: 'GET_MESSAGE_TEST_SUCCESS',payload:result })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetMessageTestAsync() {
  yield takeEvery('GET_MESSAGE_TEST_START', getMessageAsync)
}