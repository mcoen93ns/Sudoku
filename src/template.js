function checkIfSudokuRowIsComplete(sudokuRow) {
  return sudokuRow.length === 9;
}

function isItANumber(input) {
  return /^\d+$/.test(input);
}

module.exports = { checkIfSudokuRowIsComplete, isItANumber };
