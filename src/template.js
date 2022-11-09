function checkIfSudokuRowContains9Elements(sudokuRow) {
  return sudokuRow.length === 9;
}

function isItANumber(input) {
  return /^\d+$/.test(input);
}

module.exports = { checkIfSudokuRowContains9Elements, isItANumber };
