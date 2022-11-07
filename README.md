# Kata Sudoku

Atomic behaviors:

Check if an input is a number or not
'' --> false
1 --> true
'1' --> false

1. Horizontal row: check if row contains 9 numbers
   DONE [''] --> false
   DONE [1,2,3,4,5,6,7,8,9] --> true
   [1,2,3,4,5,6,7,'',9] --> false
   [1,2,3,4,5,6,7,8,9,10] --> false

2. Horizontal row: check if row contains numbers 1-9
   [1,2,3,4,5,6,7,8,9] --> true
   [1,2,3,4,5,6,7,8,8] --> false

[1,2,3,4,5,6,7,9]
[1,2,3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9]
[1,2,3,4,5,6,7,8,9]
