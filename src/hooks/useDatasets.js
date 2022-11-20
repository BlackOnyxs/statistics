import { useSelector, useDispatch } from 'react-redux'
import { onCreateDataset, onDeleteDataset, onLoadDatasets, onSetActiveDataset, onUpdateDataset } from '../store';

export const useDatasets = () => {
    const {
        isLoadingDatasets,
        datasets,
        activeDataset,
    } = useSelector( state => state.datasets );

    const dispatch = useDispatch();

    const setActiveDataSet = ( dataset ) => {
        dispatch( onSetActiveDataset( dataset ) );
    }

    const starDeleteDataset = () => {
        dispatch( onDeleteDataset( activeDataset ) )
    }

    const startLoadingDatasets = () => {
        dispatch( onLoadDatasets() )
    }

    const startSavingDataset = ( dataset ) => {
        if ( dataset._id ) {
            dispatch( onUpdateDataset( dataset ) );
        }else {
            dispatch( onCreateDataset( dataset) );
        }
    }



    return {
        //Properties
        isLoadingDatasets,
        datasets,
        activeDataset,
        //Methods
        setActiveDataSet,
        starDeleteDataset,
        startLoadingDatasets,
        startSavingDataset,
    }
}
