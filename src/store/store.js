import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, authSlice, datasetsSlice, histogramSlice, modaSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        datasets: datasetsSlice.reducer,
        histogram: histogramSlice.reducer,
        mode: modaSlice.reducer,
        ui: uiSlice.reducer,
    }
})