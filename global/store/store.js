import { configureStore } from '@reduxjs/toolkit'

import blockchainSlice from '../features/blockchainSlice'

export const store = configureStore({
    reducer: {
        blockchain: blockchainSlice,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['blockchain/updateChain'],
                ignoredPaths: ['blockchain.provider'],
            },
        }),
})