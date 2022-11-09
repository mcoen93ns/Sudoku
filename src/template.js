function checkIfSudokuRowContains9Elements(sudokuRow) {
  return sudokuRow.length === 9;
}

function isItANumber(input) {
  return /^\d+$/.test(input);
}

function isRowFilledWithNumbers(sudokuRow) {
  return true;
}
module.exports = { checkIfSudokuRowContains9Elements, isItANumber, isRowFilledWithNumbers };
