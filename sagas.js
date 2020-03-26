
//this file is for testing saga
import {add_name} from './redux/basicdatas/action';
import { fork,takeEvery, call, delay, put, join, takeLatest } from 'redux-saga/effects'
const CHECK = 'e.CHECK';
// Create a saga
export default function* rootSaga() { 
    // Catch all actions with type ASYNC_INCREMENT
    // This would take every ASYNC_INCREMENT action type
    yield takeLatest(CHECK, sagaShowName)
    
    // Catch all actions with type CALL_FAKE_API
    // takeLatest will only take the last action type CALL_FAKE_API and
    // the others that were not completed before the latest
    // will be cancelled
   // yield takeLatest(CALL_FAKE_API, fetchData)
  }
  // Function to be called by saga taking action ASYNC_INCREMENT
// The data that was passed in the action creator will also be passed to saga
 function* sagaShowName(payload) {
    const { seconds,myname } = payload
    
    // Wait after how many seconds
    yield delay(seconds * 1000)
    console.log("namessss",name,payload)
    // Dispatch an action with type INCREMENT
    // redux-saga "put" effect acts as a redux dispatch
    yield put(add_name(myname))
  }
  
  // Declare some function that would return some data
  // This can be an Api Call
  const getUserData = () => {
    return {
      name: 'John Doe',
      gender: 'Male'
    }
  }
  
  // Function to be called by saga taking action CALL_FAKE_API
   function* fetchData() {
    // Simulate some server delay
    const forked = yield fork(testForkJoin);
    yield delay(1500)
    // Call a function
    // redux-saga "call" effect allows you to call a function
    const testResult = yield join(forked);
    console.log('Test Result:', testResult);
    
    const result = yield call(getUserData)
    yield put({ type: RECORD_USER, result })
  }
  
   function* testForkJoin() {
    yield delay(1500);
    
    return 1;
  }