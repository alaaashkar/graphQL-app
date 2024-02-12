import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface ProductType {
  image: string,
  title: string,
  id: number,
  category: string,
  price: string,
}

export interface InitialStateType {
  products: ProductType[]
  isLoading: boolean
  errMessage: string,
  filteredProducts: ProductType[],

}

const initialState: InitialStateType = {
  products: [],
  filteredProducts: [],
  isLoading: false,
  errMessage: '',
}


export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      return response.data
    } catch (error) {
      throw error
    }
  }
)


export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    filterProductsBySearch: (state, action: PayloadAction<string>) => {
      state.filteredProducts = state.products.filter(pr => pr.title.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))

    },
    filterProductsByParam: (state, action: PayloadAction<string>) => {
      if (action.payload === 'man') {
        state.filteredProducts = state.products.filter(pr => pr.category === 'men\'s clothing')
      } else if (action.payload === 'woman') {
        state.filteredProducts = state.products.filter(pr => pr.category === 'women\'s clothing')
      } else {
        state.filteredProducts = state.products
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProducts.pending, (state) => {
          state.isLoading = true
        }
      )
      .addCase(
        fetchProducts.fulfilled, (state, action: PayloadAction<ProductType[]>) => {
          state.filteredProducts = action.payload
          state.products = action.payload
          state.isLoading = false
        }
      )
      .addCase(
        fetchProducts.rejected, (state, action) => {
          state.errMessage = action.error.message as string
          state.isLoading = false
        }
      )
  }
})

export const productsReducer = ProductSlice.reducer
export const { filterProductsBySearch, filterProductsByParam } = ProductSlice.actions