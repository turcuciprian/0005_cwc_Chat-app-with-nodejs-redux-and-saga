import { NavigateFunction } from "react-router-dom"

export enum eUserAction {
    SAGA_SET_USER_ACTION = 'SAGA_SET_USER_ACTION'
}

export const sagaSetUserAction = (user: string, navigate: NavigateFunction) => {
    return { type: eUserAction.SAGA_SET_USER_ACTION, payload: { user: user, navigate: navigate } }
}