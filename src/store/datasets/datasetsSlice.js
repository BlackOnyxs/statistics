import { createSlice } from '@reduxjs/toolkit';

export const datasetsSlice = createSlice({
    name: 'datasets',
    initialState: {
        isLoadingDatasets: false,
        datasets: [],
        activeDataset: null,
    },
    reducers: {
        onCreateDataset: ( state, { payload }) => {
            state.datasets.push( payload );
            state.activeDataset = null;
        },
        onDeleteDataset: (state, { payload }) => {
            state.datasets = state.datasets.filter( d => d._id === payload );
            state.activeDataset = null;
        },
        onSetActiveDataset: ( state, { payload }) => {
            state.activeDataset = payload;
        },
        onLoadDatasets: (state, { payload }) => {
            payload.forEach( dbDataset => {
                const exist = state.some( d => d._id === dbDataset._id );
                if ( !exist ) {
                    state.datasets.push( dbDataset );
                }
            });
        },
        onUpdateDataset: ( state, { payload }) => {
            state.datasets = state.datasets.map( d => {
                if ( d._id === payload._id ) {
                    return payload;
                }
                return d;
            });
            state.activeDataset = null;
        }
    }
});

export const { 
    onCreateDataset,
    onDeleteDataset,
    onSetActiveDataset,
    onLoadDatasets,
    onUpdateDataset,
 } = datasetsSlice.actions;