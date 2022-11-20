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