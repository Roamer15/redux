import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export const AppStore = store;
export const RootState = store.getState;
export const AppDispatch = store.dispatch;

export const AppThunk = (thunkAction) => (dispatch, getState) => {
    return thunkAction(dispatch, getState);
};
