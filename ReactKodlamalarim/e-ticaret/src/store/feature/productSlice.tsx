import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IAddProduct } from "../../models/IAddProduct";

const initialStateProduct = {
  urunList: [],
  popularProductList: [],
  isLoading: false,
  isBestSellerLoading: false
}

export const fetchGetAllProducts = createAsyncThunk(
  'product/fetchGetAllProducts',
  async () => {
    const response = await fetch('http://localhost:8080/product/get-all-product').then(data => data.json())
    return response;
  })

export const fetchGetAllBestSellerProduct = createAsyncThunk(
  'product/fetchGetAllBestSellerProduct',
  async () => {
    const response = await fetch('http://localhost:8080/product/get-all-bestseller').then(data => data.json())
    return response;
  })

export const fetchAddProduct = createAsyncThunk(
  'product/fetchAddProduct',
  async (payload: IAddProduct) => {
    fetch('http://localhost:8080/product/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: payload.name,
        description: payload.description,
        categoryId: payload.categoryId,
        price: payload.price,
        imageUrl: payload.imageUrl,
        stock: payload.stock
      })

    })
  })

const productSlice = createSlice({
  name: 'product',
  initialState: initialStateProduct,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetAllProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchGetAllProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.urunList = action.payload
    })
    builder.addCase(fetchGetAllBestSellerProduct.pending, (state) => {
      state.isBestSellerLoading = true
    })
    builder.addCase(fetchGetAllBestSellerProduct.fulfilled, (state, action) => {
      state.isBestSellerLoading = false
      state.popularProductList = action.payload
    })
  }
})
export default productSlice.reducer;