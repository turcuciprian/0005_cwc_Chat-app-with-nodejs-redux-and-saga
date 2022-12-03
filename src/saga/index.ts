import { all } from 'redux-saga/effects'
import sagaSetMessageHook from './sagas/messages'
import sagaSetUserHook from './sagas/user'
export default function* rootSaga() {
    yield all([sagaSetUserHook(), sagaSetMessageHook()])
}