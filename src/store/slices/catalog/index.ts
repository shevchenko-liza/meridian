import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import _keyBy from 'lodash/keyBy'

type ID = number | `${number}`

export interface Goods {
    id: number | `${number}`,
    name: string
    photo:string
    price: number
    discount:number
    kind: string

}

interface CatalogState {
    list: Goods[]
    table: {
        [id in ID]: Goods
    }
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: {
        list: [],
        table: {},
    } as CatalogState,
    reducers: {
        setList(state, action: PayloadAction<Goods[]>) {
            state.list = action.payload
            state.table = _keyBy(action.payload, 'id')
        }
    }
})

interface State {
    [catalogSlice.name]: CatalogState
}

export const CATALOG = (state: State) => state[catalogSlice.name].list
export const CATALOG_TABLE = (state: State) => state[catalogSlice.name].table