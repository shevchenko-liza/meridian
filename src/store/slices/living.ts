import { createSlice } from "@reduxjs/toolkit";

interface CatalogState {
    opened: boolean
}

export const livingSlice = createSlice({
    name: 'search',
    initialState: {
        opened: false,
    },
    reducers: {
        open(state) {
            state.opened = true

        },
        close(state) {
            state.opened = false
        },
        toggle(state) {
            state.opened = !state.opened
          },
    }
})

interface State {
    [livingSlice.name]: CatalogState
}

export const LIVING_OPENED = (state: State) => state[livingSlice.name].opened