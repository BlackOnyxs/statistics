import { useDispatch, useSelector } from 'react-redux';
import { onCloseModal, onData, onOpenModal, onResetData } from '../store/';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isModalOpen,
        data,
    } = useSelector( state => state.ui );

    const openModal = () => {
        dispatch( onOpenModal() )
    }

    const closeModal = () => {
        dispatch( onCloseModal() )
    }

    const setData = ( data ) => {
        dispatch( onData( data) )
    }

    const resetData = () => {
        dispatch( onResetData() )
    }

    return {
        //* Propiedades
        isModalOpen,
        data,
        //*Metodos
        openModal,
        closeModal,
        setData,
        resetData,
    }
}