import { createSlice } from '@reduxjs/toolkit';

export const notGroupedSlice = createSlice({
    name: 'notGrouped',
    initialState: {
        data: 'No agrupado',
        focus: 'Población', 
        intervals: [],
        values: [],
        fi: [],
        classM: [],
        xf: [],
        xx: [],
        x2: [],
        final: [],
        media: 0,
        vari: 0,
        desvStdr: 0,
        coefVar: 0
    },
    reducers: {
        onSetData: ( state,  {payload}) => {
            state.data = payload
        },
        onSetFocus: ( state,  {payload}) => {
            state.focus = payload
        },
        onSetIntervals: ( state,  {payload}) => {
            state.intervals = payload
        },
        onSetX: ( state,  {payload}) => {
            state.values = payload
        },
        onSetFi: ( state,  {payload}) => {
            state.fi = payload
        },
        onSetClass: ( state,  {payload}) => {
            state.classM = payload
        },
        onSetXf: ( state,  {payload}) => {
            state.xf = payload
        },
        onSetxx: ( state,  {payload}) => {
            state.xx = payload
        },
        onSetX2: ( state,  {payload}) => {
            state.x2 = payload
        },
        onSetFinal: ( state,  {payload}) => {
            state.final = payload
        },
        onSetMedia: ( state,  {payload}) => {
            state.media = payload
        },
        onSetVar: ( state,  {payload}) => {
            state.vari = payload
        },
        onSetDesvStdr: ( state,  {payload}) => {
            state.desvStdr = payload
        },
        onSetCoefVar: ( state,  {payload}) => {
            state.coefVar = payload
        },
    }
});

export const { 
    onSetData,
    onSetFocus,
    onSetIntervals,
    onSetX,
    onSetFi,
    onSetClass,
    onSetXf,
    onSetxx,
    onSetX2,
    onSetFinal,
    onSetMedia,
    onSetVar,
    onSetDesvStdr,
    onSetCoefVar,
 } = notGroupedSlice.actions;