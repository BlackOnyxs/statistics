import { useSelector, useDispatch } from 'react-redux';
import { onSetFac, onSetFi, onSetFr, onSetInvervals } from '../store/histogram/histogram';

export const useHistogram = () => {
    const { 
        intervals,
        fr,
        fac,
        fi,
    } = useSelector( state => state.histogram );
    const dispatch =  useDispatch();
    

    const createHistogram = (data, isLogged ) => {
        const newArray = [];
        // console.log(data)
        data.values.forEach(element => {
            element.forEach( sub => {
                newArray.push( Number(sub) )
            })
        });

        const arr = newArray.reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {});
 
        const intarvals = [], fi = [], fr = [], fac = [];
        const rango = Math.max(...newArray) - Math.min(...newArray);
        let k = data.kvalue;

        if ( !k ) {
          k = 1 + 3.322 * Math.log10(newArray.length)
        }
    
        let c = Number(rango / Number(k)).toPrecision(1)
        c = Number(c);
        // c=0.671
        //Intervalos
        Object.keys(arr).map(f => {
          if ( intarvals.length === 0 ) {
            intarvals.push(`${f} - ${ Number(f) + c }`)
          }else if (intarvals.length >= k){

          }else{
            let last = intarvals[intarvals.length -1].split('-');
            if ( Number(f) > Number(last[0]) && Number(f) > Number(last[1]) )  {
              intarvals.push(`${last[1]} - ${ Number(Number(last[1]) + c).toPrecision(2) }`)
            
            }
          }
        });
        // fi
        let acc = 0;
        for(let i = 0; i < intarvals.length; i++ ) {
          let current = intarvals[i].split('-');
          // console.log({start: Number(current[0]), end: Number(current[1])})
          for(const [f, value] of Object.entries(arr) ) {
            if ( fi.length === 0 ) {
              if ( Number(f) >= Number(current[0]) && Number(f) <= Number(current[1]) ) {
                acc = acc + value;
                // console.log({f,value})
              }
            }else{
              if ( Number(f) > Number(current[0]) && Number(f) <= Number(current[1]) ) {
                acc = acc + value;
                // console.log({f,value})
              }
            }
          }
          fi.push(acc);
          acc = 0;
        }
        // console.log(fi)
    
        const sumFi = fi.reduce(( acc, current) => (acc+current))
        //fr
        fi.forEach( (f, index) => {
          let current = 0;
          // console.log({f, sumFi})
          fr.push(f/sumFi);
          if ( index === 0 ) {
            fac.push(f);
          }else {
            // console.log({f, fac:fac[index-1]})
            current = f + fac[index-1]
            fac.push(current);
          }
        });
        dispatch(onSetInvervals(intarvals))
        dispatch(onSetFi(fi));
        dispatch(onSetFac(fac));
        dispatch(onSetFr(fr));
    }


    return {
        // Properties
        intervals,
        fr,
        fac,
        fi,
        // Methods
        createHistogram
    }
}
