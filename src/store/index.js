import { configureStore } from '@reduxjs/toolkit'

import { catalogSlice } from './slices/catalog'

export const store = configureStore({
    reducer: {
        [catalogSlice.name]: catalogSlice.reducer,

    }
})