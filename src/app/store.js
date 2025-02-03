import { Action, ThunkAction } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/features/counter/counterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type Appstore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = Appstore['dispatch']

export type AppThunk<THunkReturnType = void> = ThunkAction<THunkReturnType, RootState, unknown, Action>