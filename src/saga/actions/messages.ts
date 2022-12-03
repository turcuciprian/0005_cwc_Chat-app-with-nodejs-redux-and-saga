import { Socket } from "socket.io-client"
import { DefaultEventsMap } from "socket.io/dist/typed-events"
import { eMessageAction } from "../types"



export const sagaSetChatAction = (socket: Socket<DefaultEventsMap, DefaultEventsMap>) => {
    return { type: eMessageAction.SAGA_SET_NEW_MESSAGE_ACTION, payload: socket }
}