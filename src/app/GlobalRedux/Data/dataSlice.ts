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
      console.log('Редюсер');
      console.log(action);
      state.data = action.payload;
      // console.log(state);
      // state.inputNameTask = action.payload
    },
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    data: (state, action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = dataSlice.actions

export default dataSlice.reducer