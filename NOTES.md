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
[1,2,3,4,5,6,7,8,9] --> true ✔
[1,5,3,4,2,6,7,8,9] --> true ✔
[1,2,4,5,6,7,8,9] --> false ✔
[1,5,5,4,2,6,7,8,9] --> false ✔

## 🍅 5: Refactor code to generalize row routines ✔

## 🍅 6: Making the columns

input
[ [5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]
]

output
✔ 1. first column is [5,6,1,8,4,7,9,2,3]

✔ 2. seventh column [9,3,5,4,7,8,2,6,1]

✔ 3. 11th column --> []
