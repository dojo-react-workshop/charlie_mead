module.exports = function matrixSearch(largeMatrix, smallMatrix) {
    for (let rowIdx = 0; rowIdx < largeMatrix.length; rowIdx += 1) {
        const row = largeMatrix[rowIdx];
        for (let colIdx = 0; colIdx < row.length; colIdx += 1) {
            if (checkMatrixAtCoordinates({ rowIdx, colIdx })) {
                return true;
            }
        }
    }
    return false;

    function checkMatrixAtCoordinates({ rowIdx, colIdx }) {
        for (let smallRowIdx = 0; smallRowIdx < smallMatrix.length; smallRowIdx += 1) {
            const smallRow = smallMatrix[smallRowIdx];
            for (let smallColIdx = 0; smallColIdx < smallRow.length; smallColIdx += 1) {
                const smallMatrixValue = smallRow[smallColIdx];
                const largeMatrixValue = largeMatrix[rowIdx + smallRowIdx][colIdx + smallColIdx]
                if (smallMatrixValue !== largeMatrixValue) {
                    return false;
                }
            }
        }
        return true;
    }
}