export enum eMessageAction {
    SAGA_SET_NEW_MESSAGE_ACTION = 'SAGA_SET_NEW_MESSAGE_ACTION'
}

export interface iMessage {
    user: string
    message: string
}