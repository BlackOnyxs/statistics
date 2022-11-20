
import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isModalOpen: false,
        data: null,
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
        onResetData: ( state ) => {
            state.data = null;
        }
    }
});

export const { onOpenModal, onCloseModal, onResetData, onData } = uiSlice.actions;
