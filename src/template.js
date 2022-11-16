function checkIfSudokuListContains9Elements(sudokuRow) {
  return sudokuRow.length === 9;
}

function isItANumber(input) {
  return /^\d+$/.test(input);
}

function isListFilledWithNumbers(sudokuRow) {
  for (let index = 0; index < sudokuRow.length; index += 1) {
    const sudokuCell = sudokuRow[index];
    if (isItANumber(sudokuCell) === false) {
      return false;
    }
  }
  return true;
}

function isListFilledWithNumbersOneToNine(sudokuRow) {
  const numbersOneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  if (sudokuRow.every((r) => numbersOneToNine.includes(r))) {
    return true;
  }
  return false;
}

function doesListContainDuplicates(sudokuRow) {
  const duplicates = sudokuRow.filter(
    (item, index) => sudokuRow.indexOf(item) !== index
  );
  return duplicates.length > 0;
}

function isThisListComplete(sudokuRow) { 
  return (
    checkIfSudokuListContains9Elements(sudokuRow) &&
    isListFilledWithNumbers(sudokuRow) &&
    isListFilledWithNumbersOneToNine(sudokuRow) &&
    doesListContainDuplicates(sudokuRow) === false)
}

module.exports = {
  checkIfSudokuListContains9Elements,
  isItANumber,
  isListFilledWithNumbers,
  isListFilledWithNumbersOneToNine,
  doesListContainDuplicates,
  isThisListComplete
};
