import { configureStore } from '@reduxjs/toolkit'

import { catalogSlice } from './slices/catalog'
import { questionSlice } from './slices/FirstQuestion'
import { livingSlice } from './slices/living'
import { searchSlice } from './slices/plus-minus'
import { topFormSlice } from './slices/productInformation'

export const store = configureStore({
    reducer: {
        [catalogSlice.name]: catalogSlice.reducer,
        [searchSlice.name]: searchSlice.reducer,
        [livingSlice.name]: livingSlice.reducer,
        [questionSlice.name]: questionSlice.reducer,
        [topFormSlice.name]: topFormSlice.reducer
    }
})