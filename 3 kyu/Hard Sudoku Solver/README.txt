Description:

This kata is a harder version of http://www.codewars.com/kata/sudoku-solver/python made by @pineappleclock

Write a function that will solve a 9x9 Sudoku puzzle. The function will take one argument consisting of the 2D puzzle array, with the value 0 representing an unknown square.

The Sudokus tested against your function will be "insane" and can have multiple solutions. The solution only need to give one valid solution in the case of the multiple solution sodoku.

It might require some sort of brute force.

Consider applying algorithm with

    Backtracking https://www.wikiwand.com/en/Sudoku_solving_algorithms#Backtracking
    Brute Force

For Sudoku rules, see the Wikipedia : http://www.wikiwand.com/en/Sudoku

Used puzzle from : http://www.extremesudoku.info/sudoku.html

puzzle = [[5,3,0,0,7,0,0,0,0],
          [6,0,0,1,9,5,0,0,0],
          [0,9,8,0,0,0,0,6,0],
          [8,0,0,0,6,0,0,0,3],
          [4,0,0,8,0,3,0,0,1],
          [7,0,0,0,2,0,0,0,6],
          [0,6,0,0,0,0,2,8,0],
          [0,0,0,4,1,9,0,0,5],
          [0,0,0,0,8,0,0,7,9]]

solve(puzzle)


55171d87236c880cea0004c6
