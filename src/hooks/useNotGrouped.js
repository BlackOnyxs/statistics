import { useDispatch, useSelector } from 'react-redux';
import { 
    onSetClass, 
    onSetCoefVar, 
    onSetDesvStdr, 
    onSetFinal, 
    onSetIntervals,
    onSetX, 
    onSetFi,
    onSetVar,
    onSetMedia, 
    onSetData, 
    onSetX2, 
    onSetXf, 
    onSetxx, 
    onSetFocus
} from '../store/notGrouped/notGroup'

export const useNotGrouped = () => {
    const dispatch = useDispatch();
    const {
        data,
        focus,
        intervals,
        values,
        fi,
        classM,
        xf,
        xx,
        x2,
        final,
        media,
        vari,
        desvStdr,
        coefVar,
    } = useSelector( state => state.notGrouped );

    const setData = ( type ) => {
        dispatch( onSetData( type ) )
    }
    const setFocus = ( type ) => {
        dispatch( onSetFocus( type ) )
    }

    const createSome = ( data ) => {
        const newArray = [];
        const { values, option, focus } = data;
        dispatch( onSetType( focus ) )
        // console.log(data)
        values.forEach(element => {
            element.forEach( sub => {
                newArray.push( Number(sub) )
            })
        });

        const arr = newArray.reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {});
 
        const inter = [], fa = [], classM = [], xfa = [], xxi = [], xp2 = [], fin = [];
        const rango = Math.max(...newArray) - Math.min(...newArray);
        let k = data.kvalue;
        let med = 0, varianza = 0, desvStand = 0, coefVarianza = 0; 

        if ( !k ) {
          k = 1 + 3.322 * Math.log10(newArray.length)
        }
    
        let c = Number(rango / Number(k)).toPrecision(1)
        c = Number(c);
        // c=0.671
        //Intervalos
        Object.keys(arr).map(f => {
          if ( inter.length === 0 ) {
            inter.push(`${f} - ${ Number(f) + c }`)
          }else if (inter.length >= k){

          }else{
            let last = inter[inter.length -1].split('-');
            if ( Number(f) > Number(last[0]) && Number(f) > Number(last[1]) )  {
              inter.push(`${last[1]} - ${ Number(Number(last[1]) + c).toPrecision(2) }`)
            
            }
          }
        });
        // fi
        let acc = 0;
        console.log(arr)
        
        for(let i = 0; i < inter.length; i++ ) {
          // console.log({start: Number(current[0]), end: Number(current[1])})
          let current = inter[i].split('-');
          for(const [f, value] of Object.entries(arr) ) {
            if ( fa.length === 0 ) {
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
          fa.push(acc);
          acc = 0;
        }
        const sumFi = fa.reduce(( acc, current) => (acc+current))
        // classM
        for(let i = 0; i < inter.length; i++ ) {
            let current = inter[i].split('-');
            classM.push((Number(current[0]) + Number(current[1])) / 2)
        }
        // xf
        fa.forEach( (f, index) => xfa.push( f * classM[index] ));
        const sumXf = xfa.reduce( (acc, current) => (acc+current))
        med = sumFi / sumXf
        // xxi
        classM.forEach( c => xxi.push(c - med) )
        // xp2
        xxi.forEach( x => xp2.push( Math.pow(x,2) ) )
        //final
        fa.forEach( (f, index) => (fin.push( f * xxi[index] )))
        console.log({fin})
        const sumFinal =  fin.reduce( (acc, current) => (acc+current))
        if (focus === 'Población') {
            varianza = sumFinal / (sumFi)
        }else {
            varianza = sumFinal / (sumFi-1)
        } 
        desvStand = Math.sqrt(varianza);
        coefVarianza = desvStand/med
        

        dispatch( onSetIntervals( inter ) );
        dispatch( onSetFi(fa) );
        dispatch( onSetClass( classM ) );
        dispatch( onSetXf( xfa ) )
        dispatch( onSetxx( xxi ) );
        dispatch( onSetX2( xp2 ) );
        dispatch( onSetFinal( fin ) );
        dispatch( onSetMedia( med ) );
        dispatch( onSetVar( varianza ) );
        dispatch( onSetDesvStdr( desvStand ) );
        dispatch( onSetCoefVar( coefVarianza ) )
    }

    const createNotGrouped = ( data ) => {
        const newArray = [];
        const { values, option, focus } = data;
        dispatch( onSetData( focus ) )
        // console.log(data)
        values.forEach(element => {
            element.forEach( sub => {
                newArray.push( Number(sub) )
            })
        });

        const arr = newArray.reduce(function (acc, curr) {
          return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
        }, {});
 
        const fa = [], xfa = [], xxi = [], xp2 = [], newValues = [];
        let med = 0, varianza = 0, desvStand = 0, coefVarianza = 0;
        // fi
        for ( const [key, value] of Object.entries(arr) ) {
            newValues.push(key);
            fa.push(value)
          }
          console.log({newValues, fa})
        newValues.forEach( (v, index) => xfa.push(v*fa[index]))
        const sumFi = fa.reduce(( acc, current) => (acc+current))
        const sumXf = xfa.reduce( (acc, current) => (acc+current))
        console.log({sumFi, sumXf})
        med = sumXf / sumFi
        // xxi = x-x 
        newValues.forEach( v => {
          const minus = v - med
          const value = Math.pow(minus,2)
          xxi.push( value )
        })
        fa.forEach( (f,index) => xp2.push( f * xxi[index]))       

        if (focus === 'Población') {
            varianza = sumXf / (sumFi)
        }else {
            varianza = sumXf / (sumFi-1)
        } 
        desvStand = Math.sqrt(varianza);
        coefVarianza = (desvStand/med)*100;

        dispatch( onSetX( newValues ) );
        dispatch( onSetFi(fa) );
        dispatch( onSetXf( xfa ) )
        dispatch( onSetxx( xxi ) );
        dispatch( onSetX2( xp2 ) );
        dispatch( onSetMedia( med ) );
        dispatch( onSetVar( varianza ) );
        dispatch( onSetDesvStdr( desvStand ) );
        dispatch( onSetCoefVar( coefVarianza ) )
    }

    return {
        // Properties
        data,
        focus,
        intervals,
        values,
        fi,
        classM,
        xf,
        xx,
        x2,
        final,
        media,
        vari,
        desvStdr,
        coefVar,
        // Methods
        setData,
        createSome,
        createNotGrouped,
        setFocus,
    }
}
