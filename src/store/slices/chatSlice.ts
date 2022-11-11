import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..'

export interface iMessage {
    user: string,
    message: string
}
export interface iChatMessagesState {
    messages: iMessage[]
}

const initialState: iChatMessagesState = {
    messages: []
}
export const chatSliceState = ((state: RootState) => state.chat.messages)
export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addChatMessage: (state, action: PayloadAction<iMessage>) => {
            const newMessage: iMessage = action.payload
            const newState: iMessage[] = JSON.parse(JSON.stringify(state.messages))
            newState.push(newMessage)
            state.messages = newState
        }
    }
});

// Action creators are generated for each case reducer function
export const { addChatMessage } = chatSlice.actions

export default chatSlice.reducer