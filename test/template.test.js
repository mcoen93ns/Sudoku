const {
  checkIfSudokuRowContains9Elements,
  isItANumber,
  isRowFilledWithNumbers,
} = require("../src/template");

describe("This is a testsuite that describes the functionality to validate if a Sudoku board is complete and valid", () => {
  describe("Sudoku is a game with numbers, so we need to be able to check if the board contains numbers or not", () => {
    it(`'' --> not a number`, () => {
      const input = "";
      expect(isItANumber(input)).toEqual(false);
    });
    it(`1 --> true`, () => {
      const input = 1;
      expect(isItANumber(input)).toEqual(true);
    });
    it(`'1' --> true`, () => {
      const input = "1";
      expect(isItANumber(input)).toEqual(true);
    });
  });
  describe("We want to start with checking the horizontal lines", () => {
    describe("A horizontal line should contains 9 elements", () => {
      it(`[1,2,3,4,5,6,7,8,9,10] --> false`, () => {
        const sudokuRow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(checkIfSudokuRowContains9Elements(sudokuRow)).toEqual(false);
      });
      it(`[1,2,3,4,5,6,7,8] --> false`, () => {
        const sudokuRow = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(checkIfSudokuRowContains9Elements(sudokuRow)).toEqual(false);
      });
      it(`[1,2,3,4,5,6,7,8,9] --> true`, () => {
        const sudokuRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(checkIfSudokuRowContains9Elements(sudokuRow)).toEqual(true);
      });
    });
    describe("A row should only contain numbers", () => {
      it(`[1,2,3,4,5,6,7,8,9] --> true`, () => {
        const sudokuRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(isRowFilledWithNumbers(sudokuRow)).toEqual(true);
      });
      it(`[1,2,3,4,5,6,7,8,''] --> false`, () => {
        const sudokuRow = [1, 2, 3, 4, 5, 6, 7, 8, ""];
        expect(isRowFilledWithNumbers(sudokuRow)).toEqual(false);
      });
    });
  });
});
