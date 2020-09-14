export const clone = x => JSON.parse(JSON.stringify(x))


export const generateGrid = (rows, columns, mapper) => {
    return Array(rows)
        .fill()
        .map(() => Array(columns).fill().map(mapper))
}


export const newTicTacToeGrid = () =>
    generateGrid(3, 3, () => null)



export const checkThree = (a, b, c) => {
    if (!a || !b || !c) return false
    return a === b && b === c
}


// ES2019 Array.prototype.flat() could be used instead
export const flatten = arr =>
    arr.reduce((acc, cur) => [...acc, ...cur], [])


export const checkForWin = (flatGrid) => {
    const [nw, n, ne, w, c, e, sw, s, se] = flatGrid

    return (
        checkThree(nw, n, ne) ||
        checkThree(w, c, e) ||
        checkThree(sw, s, se) ||
        checkThree(nw, w, sw) ||
        checkThree(n, c, s) ||
        checkThree(ne, e, se) ||
        checkThree(nw, c, se) ||
        checkThree(ne, c, sw)
    )
}


export const checkForDraw = (flatGrid) => {
    return (
        !checkForWin(flatGrid) &&
        flatGrid.filter(Boolean).length ===
        flatGrid.length
    )
}


export const NEXT_TURN = {
    O: 'X',
    X: 'O',
}


export const getInitialState = () => ({
    grid: newTicTacToeGrid(),
    status: 'inProgress',
    turn: 'X',
})