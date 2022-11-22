import { createSlice } from "@reduxjs/toolkit";

interface CatalogState {
    opened: boolean
}

export const questionSlice = createSlice({
    name: 'question',
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
    [questionSlice.name]: CatalogState
}

export const QUESTION_OPENED = (state: State) => state[questionSlice.name].opened