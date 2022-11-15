# Kata Sudoku

https://www.codewars.com/kata/53db96041f1a7d32dc0004d2

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
   [1,2,3,4,5,6,7,8,''] --> false ✔

## 🍅 4: Horizontal row: check if complete numbers 1-9

1. Horizontal row: check if row contains number 1-9
   [1,2,3,4,5,6,7,8,9] --> true ✔
   [1,2,3,99,5,6,7,8,9] --> false ✅
   [1,2,2,4,5,6,7,8,9] --> true ✔

Horizontal row: check if row contains duplicates

[1,2,2,4,5,6,7,8,9] --> true ✔
[1,2,3,4,5,6,7,8,9] --> false ✔

Horizontal row: check if complete (brings together the above atomics)
[1,2,3,4,5,6,7,8,9] --> true
[1,5,3,4,2,6,7,8,9] --> true
[1,2,4,5,6,7,8,9] --> false
[1,5,5,4,2,6,7,8,9] --> false
