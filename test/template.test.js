const { checkIfSudokuRowIsComplete, isItANumber } = require("../src/template");

describe("This is a testsuite that describes the functionality to validate if a Sudoku board is complete and valid", () => {
  describe("Sudoku is a game with numbers, so we need to be able to check if the board contains numbers or not", () => {
    it(`'' --> not a number`, () => {
      const input = "";
      expect(isItANumber(input)).toEqual(false);
    });
  });
  describe("We want to start with checking the horizontal lines", () => {
    describe("A horizontal line should contain 9 numbers to be complete", () => {
      it(`[''] --> false`, () => {
        const sudokuRow = [""];
        expect(checkIfSudokuRowIsComplete(sudokuRow)).toEqual(false);
      });
      it(`[1,2,3,4,5,6,7,8,9] --> true`, () => {
        const sudokuRow = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(checkIfSudokuRowIsComplete(sudokuRow)).toEqual(true);
      });
      it(`[1,2,3,4,5,6,7,'',9] --> false`, () => {
        const sudokuRow = [1, 2, 3, 4, 5, 6, 7, "", 9];
        expect(checkIfSudokuRowIsComplete(sudokuRow)).toEqual(false);
      });
    });
  });
});
