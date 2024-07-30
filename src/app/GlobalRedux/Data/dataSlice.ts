'use client';

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number,
  data: Array<any> | null
}

const initialState: CounterState = {
  value: 2,
  data: null
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
     // Данные из API
     dataFromApi: (state, action) => {      
      state.data = action.payload;      
    },    
    data: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { dataFromApi, data } = dataSlice.actions

export default dataSlice.reducer