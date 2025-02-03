import { createAsync, createSlice} from  '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState, AppThunk } from '@/app/toolkit'

import type { fetchCount } from './counterAPI'

export interface CounterState {
    value: Number
    status: 'idle' | 'loading' | 'failed'
}

export const counterSlice = createSlice ({
    name: 'counter',
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += PayloadAction.payload
        }
    }

    extraReducers: builder => {
        builder.addCase(incrementAsync.pending, state => {
            state.status = 'loading'
        })
        .addCase(incrementAsnc.fulfilled, (state, action) => {
            state.status = 'idle'
            state.value += action.payload
        })
        .addCase(incrementAsync.rejected, state => {
            state.status = 'failed'
        })
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducers

export const incrementIfOdd = (amount): AppThunk => {
    return(dispatch, getState) => {
        const currentValue = selectCount(getState())
        if(currentValue % 2 === 1) {
            dispatch(incrementByAmount(amount))
        }
    }
}

export const incrementAsync = createAsyncThunk(
    'counter/fectchCount',
    async (amount) => {
        const response = await fetchCount(amount)
        return response.data
    }
)