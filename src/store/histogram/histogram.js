import { createSlice } from '@reduxjs/toolkit';

export const histogramSlice = createSlice({
    name: 'histogram',
    initialState: {
        intervals: [],
        fr: [],
        fac: [],
        fi: []
    },
    reducers: {
        onSetInvervals: (state, {payload}) => {
            state.intervals = payload
        },
        onSetFr: (state, {payload}) => {
            state.fr = payload
        },
        onSetFi: (state, {payload}) => {
            state.fi = payload
        },
        onSetFac: (state, {payload}) => {
            state.fac = payload
        }
    }
});

export const { 
    onSetInvervals,
    onSetFr,
    onSetFi,
    onSetFac,
 } = histogramSlice.actions;