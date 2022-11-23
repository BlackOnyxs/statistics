import { useDispatch, useSelector } from 'react-redux';
import { onCloseModal, onData, onOpenModal, onType } from '../store/';

export const useUiStore = () => {

    const dispatch = useDispatch();

    const {
        isModalOpen,
        data,
        type,
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
    
    const setType = ( type ) => {
        dispatch( onType( type) )
    }

    return {
        //* Propiedades
        isModalOpen,
        data,
        type,
        //*Metodos
        openModal,
        closeModal,
        setData,
        setType,
    }
}