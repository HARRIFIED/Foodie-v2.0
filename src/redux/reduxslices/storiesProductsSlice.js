import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {Base_URI} from '../keys'


export const getStoriesProducts = createAsyncThunk(
    "storiesProducts/getStoriesProducts",
    async () => {
        return fetch(Base_URI + '?category=stories').then(res => res.json()).catch (err => console.log(err.msg))
    }
)    

const initialState = ({
    items: [],
    status: null
})

export const storiesProductsSlice = createSlice({
    name: 'storiesProducts',
    initialState,
    extraReducers: {
        [getStoriesProducts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getStoriesProducts.fulfilled] : (state, {payload}) => {
            state.items = payload
            state.status = 'sucess'
        },
        [getStoriesProducts.rejected] : (state, action) => {
            state.status = 'failed'
        }
    }
});

export default storiesProductsSlice.reducer;
