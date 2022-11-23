export const configLocalDataset = ( intervals, fi, fr, fac ) => {
    const newArray = [];
    intervals.forEach( (i, index ) => {
        const newDataSet = {};
        newDataSet.key = index;
        newDataSet.interval = i,
        newDataSet.fi = fi[index],
        newDataSet.fr = fr[index],
        newDataSet.fac = fac[index]
        newArray.push(newDataSet)
    })
    return newArray;
}

export const configGroup = ( intervals, fi, xf, xx, x2 ) => {
    const newArray = [];
    // console.log({intervals, fi, classM, xf, xx, x2, final})
    intervals.forEach( (i, index ) => {
        const newDataSet = {};
        newDataSet.key = index;
        newDataSet.interval = i,
        newDataSet.fi = fi[index],
        newDataSet.xf = xf[index],
        newDataSet.xx = xx[index],
        newDataSet.x2 = x2[index],
        newArray.push(newDataSet)
    });
    return newArray;
} 
export const configNotGroup = ( values, fi, xf, xx, x2 ) => {
    const newArray = [];
    console.log({values, fi, xf, xx, x2})
    values.forEach( (i, index ) => {
        const newDataSet = {};
        newDataSet.key = index;
        newDataSet.values = i,
        newDataSet.fi = fi[index],
        newDataSet.xf = xf[index],
        newDataSet.xx = xx[index],
        newDataSet.x2 = x2[index],
        newArray.push(newDataSet)
    });
    return newArray;
} 