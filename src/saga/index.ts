import { all } from 'redux-saga/effects'
import sagaSetUserHook from './sagas/user'
export default function* rootSaga() {
    yield all([sagaSetUserHook()])
}