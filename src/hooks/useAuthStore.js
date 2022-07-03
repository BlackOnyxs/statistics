import { useDispatch, useSelector } from 'react-redux';
import pApi from '../api/pApi';
import { clearErrorMessage, onChecking, onLogin, onLogout } from '../store';

export const useAuthStore = () => {

    const dispatch = useDispatch();

    const {
        status, 
        user,
        errorMessage,
    } = useSelector( state => state.auth );

    const starLogin = async({ email, password }) => {
        dispatch( onChecking() );
        try {
             const { data } = await pApi.post('/auth', { email, password });
             localStorage.setItem('token', data.token );
             dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            dispatch( onLogout('Credenciales incorrectas.') );
            setTimeout( () => {
               dispatch( clearErrorMessage() );
            }, 10)
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if ( !token ) return dispatch( onLogout() );

        try {
            const { data } = await pApi.get('/auth/renew');  
            localStorage.setItem('token', data.token);
            dispatch( onLogin({ name: data.name, uid: data.uid }) );
        } catch (error) {
            localStorage.clear();
            dispatch( onLogout() );
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch( onLogout() );
    }

    return {
        //propiedades
        status, 
        user,
        errorMessage,
        //Metodos
        starLogin,
        checkAuthToken,
        startLogout,
    }
}
