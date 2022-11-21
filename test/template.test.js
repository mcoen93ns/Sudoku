const {
  checkIfSudokuListContains9Elements,
  isItANumber,
  isListFilledWithNumbers,
  isListFilledWithNumbersOneToNine,
  doesListContainDuplicates,
  isThisListComplete,
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
  describe("Sudoku is a game of rows, colums and blocks of nine numbers. The same rules apply for all these three elements. We'll refer to them as list of numbers. We want to start checking if they are complete", () => {
    describe("A list should contain 9 elements", () => {
      it(`[1,2,3,4,5,6,7,8,9,10] --> false`, () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(checkIfSudokuListContains9Elements(sudokuList)).toEqual(false);
      });
      it(`[1,2,3,4,5,6,7,8] --> false`, () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8];
        expect(checkIfSudokuListContains9Elements(sudokuList)).toEqual(false);
      });
      it(`[1,2,3,4,5,6,7,8,9] --> true`, () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(checkIfSudokuListContains9Elements(sudokuList)).toEqual(true);
      });
    });
    describe("A list should only contain numbers", () => {
      it(`[1,2,3,4,5,6,7,8,9] --> true`, () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(isListFilledWithNumbers(sudokuList)).toEqual(true);
      });
      it(`[1,2,3,4,5,6,7,8,''] --> false`, () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8, ""];
        expect(isListFilledWithNumbers(sudokuList)).toEqual(false);
      });
    });
    describe("A list should only contain numbers 1-9", () => {
      it(`[1,2,3,4,5,6,7,8,9] --> true`, () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(isListFilledWithNumbersOneToNine(sudokuList)).toEqual(true);
      });
      it(`[1,2,3,99,5,6,7,8,9 ] --> false`, () => {
        const sudokuList = [1, 2, 3, 99, 5, 6, 7, 8, 9];
        expect(isListFilledWithNumbersOneToNine(sudokuList)).toEqual(false);
      });
      it(`[1,2,2,4,5,6,7,8,9] --> true`, () => {
        const sudokuList = [1, 2, 2, 4, 5, 6, 7, 8, 9];
        expect(isListFilledWithNumbersOneToNine(sudokuList)).toEqual(true);
      });
    });
    describe("A list should not contain duplicate numbers", () => {
      it(`[1,2,2,4,5,6,7,8,9] --> true`, () => {
        const sudokuList = [1, 2, 2, 4, 5, 6, 7, 8, 9];
        expect(doesListContainDuplicates(sudokuList)).toEqual(true);
      });
      it(`[1,2,3,4,5,6,7,8,9] --> false`, () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(doesListContainDuplicates(sudokuList)).toEqual(false);
      });
    });
    describe("We can then validate whether a list meets all criteria above ", () => {
      it("[1,2,3,4,5,6,7,8,9] -> true", () => {
        const sudokuList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(isThisListComplete(sudokuList)).toEqual(true);
      });
      it("[1,5,3,4,2,6,7,8,9] -> true", () => {
        const sudokuList = [1, 5, 3, 4, 2, 6, 7, 8, 9];
        expect(isThisListComplete(sudokuList)).toEqual(true);
      });
      it("[1,2,4,5,6,7,8,9] -> false", () => {
        const sudokuList = [1, 2, 4, 5, 6, 7, 8, 9];
        expect(isThisListComplete(sudokuList)).toEqual(false);
      });
      it("[1,5,5,4,2,6,7,8,9] -> false", () => {
        const sudokuList = [1, 5, 5, 4, 2, 6, 7, 8, 9];
        expect(isThisListComplete(sudokuList)).toEqual(false);
      });
    });
    describe ("we have a Sudokou board where want to extract columns and we want to extract a list of numbers"), () =>  {
      it(`[ [5,3,4,6,7,8,9,1,2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 3, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9] 
]", () => {
  
});

    }

  });
});
