Once you complete this kata, there is a 15x15 Version that you can try. And once you complete that, you can do the Multisize Version which goes up to 50x50.

Description
For this kata, you will be making a Nonogram solver. :)

If you don't know what Nonograms are, you can look at some instructions and also try out some Nonograms here.

For this kata, you will only have to solve 5x5 Nonograms. :)

Instructions
You need to complete the Nonogram class and the solve method:

class Nonogram:

    def __init__(self, clues):
        pass

    def solve(self):
        pass
You will be given the clues and you should return the solved puzzle. All the puzzles will be solveable so you will not need to worry about that.

The clues will be a tuple of the horizontal clues, then the vertical clues, which will contain the individual clues. For example, for the Nonogram:

    |   |   | 1 |   |   |
    | 1 |   | 1 |   |   |
    | 1 | 4 | 1 | 3 | 1 |
-------------------------
  1 |   |   |   |   |   |
-------------------------
  2 |   |   |   |   |   |
-------------------------
  3 |   |   |   |   |   |
-------------------------
2 1 |   |   |   |   |   |
-------------------------
  4 |   |   |   |   |   |
-------------------------
The clues are on the top and the left of the puzzle, so in this case:

The horizontal clues are: ((1, 1), (4,), (1, 1, 1), (3,), (1,)), and the vertical clues are: ((1,), (2,), (3,), (2, 1), (4,)). The horizontal clues are given from left to right. If there is more than one clue for the same column, the upper clue is given first. The vertical clues are given from top to bottom. If there is more than one clue for the same row, the leftmost clue is given first.

Therefore, the clue given to the __init__ method would be (((1, 1), (4,), (1, 1, 1), (3,), (1,)), ((1,), (2,), (3,), (2, 1), (4,))). You are given the horizontal clues first then the vertical clues second.

You should return a tuple of the rows as your answer. In this case, the solved Nonogram looks like:

    |   |   | 1 |   |   |
    | 1 |   | 1 |   |   |
    | 1 | 4 | 1 | 3 | 1 |
-------------------------
  1 |   |   | # |   |   |
-------------------------
  2 | # | # |   |   |   |
-------------------------
  3 |   | # | # | # |   |
-------------------------
2 1 | # | # |   | # |   |
-------------------------
  4 |   | # | # | # | # |
-------------------------
In the tuple, you should use 0 for a unfilled square and 1 for a filled square. Therefore, in this case, you should return:

((0, 0, 1, 0, 0),
 (1, 1, 0, 0, 0),
 (0, 1, 1, 1, 0),
 (1, 1, 0, 1, 0),
 (0, 1, 1, 1, 1))
Good Luck!!

If there is anything that is unclear or confusing, just let me know :)
