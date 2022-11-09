# Kata Sudoku

## first 🍅: jumpstart new kata and start coding!

Atomic behaviors:

Check if an input is a number or not
DONE '' --> false
DONE 1 --> true
DONE '1' --> true

1. Horizontal row: check if row contains 9 numbers
   DONE [''] --> false
   DONE [1,2,3,4,5,6,7,8,9] --> true

## 🍅 2 & 3: horizontal rows!

1. Horizontal row: check if row contains 9 elements
   [1,2,3,4,5,6,7,8,9,10] --> false ✔️
   [1,2,3,4,5,6,7,8] --> false ✔
   [1,2,3,4,5,6,7,8,9] --> true ✔

2. Horizontal row: check if all elements are numbers
   [1,2,3,4,5,6,7,8,9] --> true ✔
   [1,2,3,4,5,6,7,8,''] --> false
