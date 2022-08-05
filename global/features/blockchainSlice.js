import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    balance: 0,
    account: null,
    provider: null
}

export const blockchainSlice = createSlice({
    name: 'blockchain',
    initialState,
    reducers: {
        updateChain: (state, action) => {
            if(action.payload) {
                state.account = action.payload.account
                state.balance = action.payload.balance
                state.provider = action.payload.provider
            } else {
                state.account = null
                state.balance = 0
                state.provider = null
            }
        }
    }
})

export const { updateChain } = blockchainSlice.actions
export default blockchainSlice.reducer