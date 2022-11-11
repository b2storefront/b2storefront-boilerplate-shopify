export const compareArrays = ( arrA, arrB ) => {
    if (arrA.length !== arrB.length) {
        return false
    }

    let cA = arrA.slice().sort()
    let cB = arrB.slice().sort()

    for (let i=0; i<cA.length; i++) {
        if (cA[i] !== cB[i]) {
            return false
        }
    }

    return true;
}