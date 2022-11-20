import { createSlice } from '@reduxjs/toolkit';

export const modaSlice = createSlice({
    name: 'moda',
    initialState: {
        average: 0,
        median: 0,
        mode: 0,
        values: []
    },
    reducers: {
        onSetAverage: (state, {payload}) => {
            state.average = payload;
        },
        onSetMedian: (state, {payload}) => {
            state.median = payload;
        },
        onSetMode: (state, {payload}) => {
            state.mode = payload;
        },
        onSetValues: ( state, { payload }) => {
            state.values = payload
        }
    }
});

export const { 
    onSetAverage,
    onSetMedian,
    onSetMode,
    onSetValues,
 } = modaSlice.actions;