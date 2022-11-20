import { useDispatch, useSelector } from 'react-redux'
import { onSetAverage, onSetMedian, onSetMode, onSetValues } from '../store';

export const useMode = () => {
    const dispatch = useDispatch();
    const {
        average,
        median,
        mode,
        values,
    } = useSelector( state => state.mode );


    const create = (data) => {
        const newArray = [];
        let acc = 0;
        data.values.forEach(element => {
            element.forEach( sub => {
                newArray.push( Number(sub) )
            })
        });
        newArray.forEach( e => acc = acc + e )
        const avg = acc / newArray.length
        const mdn =  acc / 2
        // Mode
        let modes = [], maxF = 0;
        const freqTable = {};
        newArray.forEach( e => freqTable[e] = freqTable[e] + 1 || 1);
        for ( const key in freqTable ) {
            if ( freqTable[Number(key)] > maxF ) {
                modes = [Number(key)]
                maxF = freqTable[key]
            }else if ( freqTable[key] === maxF ) {
                modes.push(Number(key))
            }
        }
        if (modes.length === Object.keys(freqTable).length ) modes = []
        dispatch( onSetAverage( avg ) )
        dispatch( onSetMedian( mdn ) )
        dispatch( onSetMode( modes ) )
        dispatch( onSetValues( newArray ))
    }

    return {
        // Properties
        average,
        median,
        mode,
        values,
        //Methods
        create,
        
    }
}
