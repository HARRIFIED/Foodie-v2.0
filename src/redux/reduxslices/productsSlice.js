import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {Base_URI} from '../keys'


export const getProducts = createAsyncThunk(
    "products/getProducts",
    async () => {
        return fetch(Base_URI + "?category=special").then(res => res.json()).catch(err => {console.log(err)})
    }
)

const initialState = ({
    item: [],
    status: null
})

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    extraReducers: {
        [getProducts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled] : (state, {payload}) => {
            state.item = payload
            state.status = 'sucess'
        },
        [getProducts.rejected] : (state, action) => {
            state.status = 'failed'
        }
    }
});

export default productsSlice.reducer;