import { configureStore, createListenerMiddleware } from "@reduxjs/toolkit";
import { root } from "postcss";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "../saga";
import chatSlice from "./slices/chatSlice";
import counterSlice from "./slices/counterSlice";
import userSlice from "./slices/userSlice";
const SagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        counter: counterSlice,
        user: userSlice,
        chat: chatSlice
        //
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare({ thunk: false, serializableCheck: false }).prepend(SagaMiddleware);
    }
})

SagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch