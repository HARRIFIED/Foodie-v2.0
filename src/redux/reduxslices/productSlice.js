import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {Base_URI} from '../keys'


export const getProduct = createAsyncThunk(
    "product/getProduct",
    async (_id) => {
        return fetch(Base_URI + `/${_id}`).then(res => res.json()).catch(err => {console.log(err)})
    }
)

const initialState = ({
    item: [],
    status: null
});

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [getProduct.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getProduct.fulfilled] : (state, {payload}) => {
            state.item = payload
            state.status = 'sucess'
        },
        [getProduct.rejected] : (state, action) => {
            state.status = 'failed'
        }
    }
});

export default productSlice.reducer;