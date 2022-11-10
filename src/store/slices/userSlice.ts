import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../index'
export interface UserState {
    value: string | null
}

const initialState: UserState = {
    value: null,
}
export const userState = ((state: RootState) => state.user)

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        },
        clearUser: (state) => {
            state.value = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer