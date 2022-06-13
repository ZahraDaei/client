import { put, takeEvery,call } from 'redux-saga/effects'

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

// ...



async function  get(action){
  var user=action.payload;
    let response = await fetch('https://localhost:44315/WeatherForecast/',
    {
      method: 'GET', // or 'PUT'
      headers: {
        // 'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + user.access_token,  
      }
    }
    );  

    if (response.status === 200) {
        return await response.text();
        // handle data
    }
}
// Our worker Saga: will perform the async increment task
export function* getMessageAsync(action) {
 var result= yield call(get,action);
  yield put({ type: 'GET_MESSAGE_SUCCESS',payload:result })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchGetMessageAsync() {
  yield takeEvery('GET_MESSAGE_START', getMessageAsync)
}