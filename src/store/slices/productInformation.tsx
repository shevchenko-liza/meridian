import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export enum TopForm {
    DELIVERY = 'deliivery',
    DEL = 'del'
}

interface CatalogState {
    variant: TopForm | false
}

export const topFormSlice = createSlice({
    name: 'top-form',
    initialState: {
        variant: false,
    } as CatalogState,
    reducers: {
        open(state, action: PayloadAction<TopForm>) {
            state.variant = action.payload
        },
        close(state) {
            state.variant = false
        },
        toggle(state, action: PayloadAction<TopForm | false | undefined>) {
            state.variant = action.payload && action.payload !== state.variant ? action.payload : false

        },
    }
})

interface State {
    [topFormSlice.name]: CatalogState
}

export const TOP_FORM_VARIANT = (state: State) => state[topFormSlice.name].variant
