import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import type { PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -=1;
    },
    incrementByAmount: (state, action: PayloadAction<{value: number}>) => {
      state.value += action.payload.value;
    },
    decrementByAmount: (state, action: PayloadAction<{value: number}>) => {
      state.value -= action.payload.value;
    } 
  },
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.pending, () => {
      console.log("Increment Async action is pending...");
    });
    builder.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<{value: number}>) => {
      state.value += action.payload.value;
    });
  },
});  

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { value: amount };
  }
)

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;