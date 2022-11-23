import { configureStore } from '@reduxjs/toolkit';
import { uiSlice, authSlice, datasetsSlice, histogramSlice, modaSlice, notGroupedSlice } from './';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        datasets: datasetsSlice.reducer,
        histogram: histogramSlice.reducer,
        mode: modaSlice.reducer,
        notGrouped: notGroupedSlice.reducer,
        ui: uiSlice.reducer,
    }
})