import { configureStore } from '@reduxjs/toolkit'

import { catalogSlice } from './slices/catalog'
import { livingSlice } from './slices/living'
import { searchSlice } from './slices/plus-minus'

export const store = configureStore({
    reducer: {
        [catalogSlice.name]: catalogSlice.reducer,
        [searchSlice.name]: searchSlice.reducer,
        [livingSlice.name]: livingSlice.reducer
    }
})