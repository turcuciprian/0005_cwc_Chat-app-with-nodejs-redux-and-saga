import { PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";
import { put, takeLatest } from "redux-saga/effects";
import { pathLocations } from "../../routes/path";
import { setUser } from "../../store/slices/userSlice";
import { eUserAction } from "../actions/user";

function* setUserSaga(action: PayloadAction<{ user: string, navigate: NavigateFunction }>) {
    const user: string = yield new Promise((res) => {
        setTimeout(() => {
            res(action.payload.user)
        }, 500);
    })
    yield put(setUser(user));
    yield action.payload.navigate(pathLocations.chatPage, { replace: true });

}
export default function* sagaSetUserHook() {
    yield takeLatest(eUserAction.SAGA_SET_USER_ACTION, setUserSaga)
}