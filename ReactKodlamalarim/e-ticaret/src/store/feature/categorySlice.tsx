import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialStateCategory ={
    categoryList: [],
    isLoading: false
}

export const fetchGetAllCategory = createAsyncThunk(
    'category/fetchGetAllCategory',
    async ()=>{
        return await fetch('http://localhost:8080/category/get-all-categories')
        .then(data=> data.json())        
    }
)

const categorySlice = createSlice({
    name: 'category',
    initialState: initialStateCategory,
    reducers: {},
    extraReducers: (build)=>{
        build.addCase(fetchGetAllCategory.pending,(state)=>{state.isLoading=true})
        build.addCase(fetchGetAllCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.categoryList = action.payload;
        })
    }
})

export default categorySlice.reducer;