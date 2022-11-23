
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false,
        data: null,
        type: null,
    },
    reducers: {
        onOpenModal: ( state ) => {
            state.isModalOpen = true 
        },
        onCloseModal: ( state ) => {
            state.isModalOpen = false 
        },
        onData: ( state, { payload }) => {
            state.data = payload
        },
        onType: ( state, { payload }) => {
            state.type = payload
        },
        
    }
});

export const { onOpenModal, onCloseModal, onData, onType } = uiSlice.actions;
