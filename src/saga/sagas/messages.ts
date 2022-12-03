import { PayloadAction } from "@reduxjs/toolkit";
import { put, takeLatest, call, take } from "redux-saga/effects";
import { addChatMessage } from "../../store/slices/chatSlice";
import { eMessageAction, iMessage } from "../types";
import { eventChannel, END, EventChannel } from 'redux-saga'
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { Socket } from "socket.io-client";

const receiveMessage = (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => { 
  socket.on("disconnect", () => {
    socket.connect();
    console.log('socket disconnected');
  });
  return eventChannel((emitter) => {
    socket.on('message', (msg: iMessage) => {
      emitter(msg);
    });
    return () => {
      emitter(END);
    }
  });
};
function* setMessageSaga(action: PayloadAction<Socket<DefaultEventsMap, DefaultEventsMap>>) {
  const socket: Socket<DefaultEventsMap, DefaultEventsMap> = action.payload
  const chan: EventChannel<iMessage> = yield call(receiveMessage, socket);
  while (true) {
    try {
      const newMessage: iMessage = yield take(chan);
      yield put(addChatMessage({ user: newMessage.user, message: newMessage.message || '' }))
    } catch (err) {
      console.error('socket error:', err)
      // socketChannel is still open in catch block
      // if we want end the socketChannel, we need close it explicitly
      socket.close()
    }
  }


}
export default function* sagaSetMessageHook() {
  yield takeLatest(eMessageAction.SAGA_SET_NEW_MESSAGE_ACTION, setMessageSaga)
}