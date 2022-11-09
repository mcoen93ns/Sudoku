function checkIfSudokuRowContains9Elements(sudokuRow) {
  return sudokuRow.length === 9;
}

function isItANumber(input) {
  return /^\d+$/.test(input);
}

function isRowFilledWithNumbers(sudokuRow) {
  for (let index = 0; index < sudokuRow.length; index++) {
    const sudokuCell = sudokuRow[index];
    if (isItANumber(sudokuCell) == false) {
      return false
    }
  }
      return true
}
module.exports = { checkIfSudokuRowContains9Elements, isItANumber, isRowFilledWithNumbers };
