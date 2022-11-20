export const modeConfig = (data = []) => {
    const newArray = []
    data.forEach( e => {
        const current = {
            value: e
        }
        newArray.push(current)
    })
    return newArray;
}