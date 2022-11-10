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

function isRowFilledWithNumbersOneToNine(sudokuRow) {
  const numbersOneToNine=[1,2,3,4,5,6,7,8,9]
  if(sudokuRow.every(r => numbersOneToNine.includes(r))){
    return true
  }else{
    return false
  }

}
  

module.exports = { 
  checkIfSudokuRowContains9Elements,
  isItANumber,
  isRowFilledWithNumbers,
  isRowFilledWithNumbersOneToNine
};
