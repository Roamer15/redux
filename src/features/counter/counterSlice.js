import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchCount = (amount = 1) => {
    return new Promise(resolve => 
        setTimeout(() => resolve({ data: amount }), 500)
    );
};

export const incrementAsync = createAsyncThunk(
    'counter/fetchCount',
    async (amount) => {
        const response = await fetchCount(amount);
        return response.data;
    }
);

export const incrementIfOdd = (amount) => {
    return (dispatch, getState) => {
      const currentValue = getState().counter.value;
      if (currentValue % 2 === 1) {
        dispatch(incrementByAmount(amount));
      }
    };
  };
  

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle'
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.value += action.payload;
            })
            .addCase(incrementAsync.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
