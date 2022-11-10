import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        addChatMessage: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addChatMessage } = chatSlice.actions

export default chatSlice.reducer